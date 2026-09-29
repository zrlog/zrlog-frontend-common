import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { validateVersion } from './release-contract.mjs';

const runGh = (...args) => execFileSync('gh', args, {encoding: 'utf8'});

// The S3-verified artifacts are mirrored byte-for-byte; no CDN access is needed.
export function publishGithub(directory, repository, gh = runGh) {
    const manifest = JSON.parse(readFileSync(join(directory, 'manifest.json'), 'utf8'));
    const version = validateVersion(manifest.version);
    if (!/^[a-f0-9]{40}$/.test(manifest.source)) throw new Error('Release requires a source commit SHA');
    const files = ['ui', 'utils'].map(name => `zrlog-${name}-${version}.tgz`);
    for (const file of files) {
        const sha = createHash('sha256').update(readFileSync(join(directory, file))).digest('hex');
        if (manifest.packages.find(pkg => pkg.file === file)?.sha256 !== sha) {
            throw new Error(`Package checksum mismatch: ${file}`);
        }
    }
    files.push('SHA256SUMS', 'manifest.json');
    const api = `repos/${repository}`;
    const tag = `v${version}`;
    const optional = route => {
        try { return JSON.parse(gh('api', route)); }
        catch (error) {
            if (String(error.stderr).includes('HTTP 404')) return null;
            throw error;
        }
    };
    const temp = mkdtempSync(join(tmpdir(), 'zrlog-github-release-'));
    try {
        let release = optional(`${api}/releases/tags/${tag}`);
        const commit = optional(`${api}/commits/${tag}`);
        if (commit && commit.sha !== manifest.source) throw new Error('Release tag points to another source commit');
        if (!release) {
            const input = join(temp, 'release.json');
            writeFileSync(input, JSON.stringify({
                tag_name: tag, target_commitish: manifest.source, draft: true,
                name: `Frontend packages ${version}`,
                body: `Versioned @zrlog/ui and @zrlog/utils packages. See manifest.json and SHA256SUMS for provenance and checksums.`,
            }));
            release = JSON.parse(gh('api', '--method', 'POST', `${api}/releases`, '--input', input));
        } else if (release.draft) {
            const target = JSON.parse(gh('api', `${api}/commits/${release.target_commitish}`));
            if (target.sha !== manifest.source) throw new Error('Draft release points to another source commit');
        }
        for (const file of files) {
            if (!release.assets.some(asset => asset.name === file)) {
                gh('release', 'upload', tag, join(directory, file), '--repo', repository);
            }
            gh('release', 'download', tag, '--pattern', file, '--dir', temp, '--repo', repository);
            if (!readFileSync(join(directory, file)).equals(readFileSync(join(temp, file)))) {
                throw new Error(`GitHub asset differs: ${file}; publish a new version`);
            }
        }
        if (release.draft) gh('release', 'edit', tag, '--draft=false', '--repo', repository);
        return `https://github.com/${repository}/releases/tag/${tag}`;
    } finally {
        rmSync(temp, {recursive: true, force: true});
    }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
    const version = validateVersion(process.env.RELEASE_VERSION);
    console.log(publishGithub(resolve('artifacts', version), 'zrlog/zrlog-frontend-common'));
}
