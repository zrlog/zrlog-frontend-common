import { test } from "node:test";
import assert from "node:assert/strict";
import { validatePackages, validateVersion } from "./release-contract.mjs";

test("release paths accept only stable semantic versions", () => {
    assert.equal(validateVersion("0.1.0"), "0.1.0");
    for (const version of ["latest", "../0.1.0", "01.2.3", "0.1.0/x", "0.1.0\n", "0.1.0-SNAPSHOT"]) {
        assert.throws(() => validateVersion(version));
    }
});
test("release rejects mismatched versions and unresolved workspace dependencies", () => {
    assert.throws(() => validatePackages("0.1.0", { ui: { name: "@zrlog/ui", version: "0.2.0" } }));
    assert.throws(() => validatePackages("0.1.0", { ui: {
        name: "@zrlog/ui", version: "0.1.0", dependencies: { "@zrlog/utils": "file:../utils" },
    } }));
    validatePackages("0.1.0", { utils: { name: "@zrlog/utils", version: "0.1.0" } });
});
