export const releaseBase = "https://dl.zrlog.com/frontend-common";

export function validateVersion(version) {
    if (typeof version !== "string" || version.trim() !== version || !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(version)) {
        throw new Error("Use a stable semantic version such as 0.1.0");
    }
    return version;
}

export function validatePackages(version, packages) {
    validateVersion(version);
    for (const [name, pkg] of Object.entries(packages)) {
        if (pkg.name !== `@zrlog/${name}` || pkg.version !== version) {
            throw new Error(`${name} must declare @zrlog/${name}@${version}`);
        }
        if (pkg.private) throw new Error(`${name} is marked private`);
        for (const value of Object.values(pkg.dependencies || {})) {
            if (/^(file:|link:|workspace:|\.\.?\/)/.test(value)) {
                throw new Error(`${name} has a local-only runtime dependency`);
            }
        }
    }
}
