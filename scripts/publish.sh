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
for artifact in "$release_dir"/*.tgz "$release_dir/SHA256SUMS" "$release_dir/manifest.json"; do
    # Atomic creation: a previously released URL can never be overwritten.
    aws s3api put-object --bucket "$CDN_BUCKET" \
        --key "frontend-common/${RELEASE_VERSION}/$(basename "$artifact")" \
        --body "$artifact" --if-none-match '*' \
        --cache-control 'public, max-age=31536000, immutable' \
        --endpoint-url "$CDN_ENDPOINT" > /dev/null
done
verify_dir="$(mktemp -d)"
trap 'rm -rf "$verify_dir"' EXIT
for artifact in "$release_dir"/*.tgz; do
    name="$(basename "$artifact")"
    curl --fail --show-error --silent --retry 3 \
        "https://dl.zrlog.com/frontend-common/${RELEASE_VERSION}/${name}" --output "$verify_dir/$name"
done
cp "$release_dir/SHA256SUMS" "$verify_dir/SHA256SUMS"
(cd "$verify_dir" && sha256sum --check SHA256SUMS)
