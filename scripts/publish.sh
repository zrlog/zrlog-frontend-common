#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
: "${RELEASE_VERSION:?Set RELEASE_VERSION}"
: "${CDN_BUCKET:?Set CDN_BUCKET}"
: "${CDN_ENDPOINT:?Set CDN_ENDPOINT}"
: "${AWS_ACCESS_KEY_ID:?Set AWS_ACCESS_KEY_ID}"
: "${AWS_SECRET_ACCESS_KEY:?Set AWS_SECRET_ACCESS_KEY}"
node --input-type=module -e 'import { validateVersion } from "./scripts/release-contract.mjs"; validateVersion(process.env.RELEASE_VERSION)'
release_dir="artifacts/${RELEASE_VERSION}"
test -f "${release_dir}/manifest.json"
(cd "$release_dir" && sha256sum --check SHA256SUMS)
verify_dir="$(mktemp -d)"
trap 'rm -rf "$verify_dir"' EXIT
for artifact in "$release_dir"/*.tgz "$release_dir/SHA256SUMS" "$release_dir/manifest.json"; do
    name="$(basename "$artifact")"
    # Atomic creation; a retry may reuse an identical object, never overwrite it.
    if ! aws s3api put-object --bucket "$CDN_BUCKET" \
        --key "frontend-common/${RELEASE_VERSION}/$(basename "$artifact")" \
        --body "$artifact" --if-none-match '*' \
        --cache-control 'public, max-age=31536000, immutable' \
        --endpoint-url "$CDN_ENDPOINT" > /dev/null 2> "$verify_dir/upload-error"; then
        aws s3api get-object --bucket "$CDN_BUCKET" \
            --key "frontend-common/${RELEASE_VERSION}/$name" \
            --endpoint-url "$CDN_ENDPOINT" "$verify_dir/existing" > /dev/null
        if [ "$name" = manifest.json ]; then
            # Keep the first source attribution when a workflow-only fix retries
            # an otherwise byte-identical release.
            node --input-type=module - "$artifact" "$verify_dir/existing" <<'JS'
import { readFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';
const [current, existing] = process.argv.slice(2).map(path => JSON.parse(readFileSync(path, 'utf8')));
if (current.version !== existing.version || !isDeepStrictEqual(current.packages, existing.packages)) {
    throw new Error('Published manifest differs; publish a new version');
}
JS
        else
            cmp --silent "$artifact" "$verify_dir/existing" || {
                echo "Published $name differs; publish a new version" >&2
                exit 1
            }
        fi
        echo "Reusing identical immutable $name"
    fi
done
for artifact in "$release_dir"/*.tgz; do
    name="$(basename "$artifact")"
    curl --fail --show-error --silent --retry 6 --retry-all-errors --retry-delay 5 --retry-max-time 60 \
        "https://dl.zrlog.com/frontend-common/${RELEASE_VERSION}/${name}" --output "$verify_dir/$name"
done
cp "$release_dir/SHA256SUMS" "$verify_dir/SHA256SUMS"
(cd "$verify_dir" && sha256sum --check SHA256SUMS)
