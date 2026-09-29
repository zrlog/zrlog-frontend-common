import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join, basename } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { publishGithub } from './publish-github.mjs';

test('GitHub mirror verifies every asset before publishing and refuses replacement or retagging', () => {
    const directory = mkdtempSync(join(tmpdir(), 'zrlog-mirror-test-'));
    try {
        const source = 'a'.repeat(40);
        const manifest = {version: '0.1.0', source, packages: []};
        for (const name of ['ui', 'utils']) {
            const file = `zrlog-${name}-0.1.0.tgz`;
            writeFileSync(join(directory, file), name);
            manifest.packages.push({file, sha256: createHash('sha256').update(name).digest('hex')});
        }
        writeFileSync(join(directory, 'manifest.json'), JSON.stringify(manifest));
        writeFileSync(join(directory, 'SHA256SUMS'), manifest.packages.map(p => `${p.sha256}  ${p.file}\n`).join(''));
        let release = null, tag = null, uploads = 0;
        const assets = new Map();
        const gh = (...args) => {
            if (args[0] === 'api') {
                if (args.includes('POST')) {
                    const body = JSON.parse(readFileSync(args[args.indexOf('--input') + 1]));
                    release = {...body, assets: []};
                    assert.equal(body.draft, true);
                    return JSON.stringify(release);
                }
                if (args[1].includes('/commits/')) {
                    if (tag) return JSON.stringify({sha: tag});
                } else if (release) {
                    return JSON.stringify({...release, assets: [...assets.keys()].map(name => ({name}))});
                }
                throw Object.assign(new Error('not found'), {stderr: 'HTTP 404'});
            }
            assert.equal(args[0], 'release');
            if (args[1] === 'upload') {
                assert.ok(!args.includes('--clobber'));
                assets.set(basename(args[3]), readFileSync(args[3]));
                uploads++;
            } else if (args[1] === 'download') {
                const file = args[args.indexOf('--pattern') + 1];
                writeFileSync(join(args[args.indexOf('--dir') + 1], file), assets.get(file));
            } else if (args[1] === 'edit') {
                assert.equal(assets.size, 4);
                release.draft = false;
                tag = source;
            } else throw new Error(`Unexpected command: ${args}`);
            return '';
        };
        const publish = () => publishGithub(directory, 'zrlog/zrlog-frontend-common', gh);
        assert.match(publish(), /releases\/tag\/v0.1.0$/);
        assert.equal(uploads, 4);
        publish();
        assert.equal(uploads, 4, 'Retries do not reupload assets');
        assets.set('zrlog-ui-0.1.0.tgz', Buffer.from('different published content'));
        assert.throws(publish, /GitHub asset differs/);
        assert.equal(uploads, 4);
        tag = 'b'.repeat(40);
        assert.throws(publish, /another source commit/);
    } finally {
        rmSync(directory, {recursive: true, force: true});
    }
});
