import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, copyFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

test('release retries identical objects, preserves provenance and rejects changed packages', () => {
    const root = mkdtempSync(join(tmpdir(), 'zrlog-release-'));
    try {
        for (const dir of ['scripts', 'bin', 'store', 'artifacts/0.1.0']) mkdirSync(join(root, dir), { recursive: true });
        for (const file of ['publish.sh', 'release-contract.mjs']) {
            copyFileSync(new URL(file, import.meta.url), join(root, 'scripts', file));
        }
        const executable = (name, body) => writeFileSync(join(root, 'bin', name), `#!${process.execPath}\n${body}`, { mode: 0o755 });
        executable('aws', `
const fs = require('fs'), path = require('path'), args = process.argv.slice(2);
const option = name => args[args.indexOf(name) + 1];
const object = path.join(process.env.TEST_STORE, option('--key'));
if (args[1] === 'put-object') {
    if (fs.existsSync(object)) process.exit(1);
    if (option('--if-none-match') !== '*') process.exit(2);
    fs.mkdirSync(path.dirname(object), {recursive:true});
    fs.copyFileSync(option('--body'), object);
} else {
    fs.copyFileSync(object, args.at(-1));
}
`);
        executable('curl', `
const fs = require('fs'), path = require('path'), args = process.argv.slice(2);
const url = new URL(args.find(arg => arg.startsWith('https://')));
fs.copyFileSync(path.join(process.env.TEST_STORE, url.pathname), args[args.indexOf('--output') + 1]);
`);
        const release = join(root, 'artifacts/0.1.0');
        const prepare = (content, source) => {
            const file = 'zrlog-ui-0.1.0.tgz';
            const sha256 = createHash('sha256').update(content).digest('hex');
            writeFileSync(join(release, file), content);
            writeFileSync(join(release, 'SHA256SUMS'), `${sha256}  ${file}\n`);
            writeFileSync(join(release, 'manifest.json'), JSON.stringify({version:'0.1.0', source, packages:[{file, sha256}]}));
        };
        const publish = () => spawnSync('bash', ['scripts/publish.sh'], {
            cwd: root, encoding: 'utf8', env: {...process.env,
                PATH: `${join(root, 'bin')}:${process.env.PATH}`,
                TEST_STORE: join(root, 'store'), RELEASE_VERSION: '0.1.0',
                CDN_BUCKET: 'test', CDN_ENDPOINT: 'https://example.invalid',
                AWS_ACCESS_KEY_ID: 'test', AWS_SECRET_ACCESS_KEY: 'test',
            },
        });
        prepare('first package', 'first-commit');
        let result = publish();
        assert.equal(result.status, 0, result.stderr);
        prepare('first package', 'workflow-fix');
        result = publish();
        assert.equal(result.status, 0, result.stderr);
        assert.match(result.stdout, /Reusing identical/);
        const stored = join(root, 'store/frontend-common/0.1.0');
        assert.equal(JSON.parse(readFileSync(join(stored, 'manifest.json'))).source, 'first-commit');
        prepare('changed package', 'new-commit');
        result = publish();
        assert.notEqual(result.status, 0);
        assert.match(result.stderr, /differs; publish a new version/);
        assert.equal(readFileSync(join(stored, 'zrlog-ui-0.1.0.tgz'), 'utf8'), 'first package');
    } finally {
        rmSync(root, {recursive:true, force:true});
    }
});
