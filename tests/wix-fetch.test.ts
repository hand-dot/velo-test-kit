import { http, HttpResponse } from "msw";
import { describe, expect, test } from "vitest";
import { fetch } from "wix-fetch";


describe("wix-fetch", () => {
    test("should work", async () => {
        global.server.use(
            http.get("https://test.com/api/hello", () => {
                return HttpResponse.json({ key1: 'value1', key2: 'value2' })
            })
        );

        const res = await fetch("https://test.com/api/hello")
            .then((httpResponse) => {
                if (httpResponse.ok) {
                    return httpResponse.json();
                } else {
                    return Promise.reject('Fetch did not succeed');
                }
            })
            .then(json => json.key1)
            .catch(err => console.log(err));

        expect(res).toBe('value1');
    });
});