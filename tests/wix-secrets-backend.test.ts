import { describe, expect, test, vi } from "vitest";
import { getSecret } from "wix-secrets-backend";


describe("wix-secrets-backend", () => {
    test("should work", async () => {
        vi.mocked(getSecret).mockResolvedValue('!!');
        const mySecret = await getSecret("my-secret");
        expect(mySecret).toBe('!!');
    });
});