> [!WARNING]  
> This project is currently under development and should be considered a concept at this stage.  
> We welcome your feedback and suggestions.

# velo-test-kit

[velo-test-kit](https://github.com/hand-dot/velo-test-kit) enables unit testing for code that utilizes Wix's Velo platform.  
It offers a seamless development experience by mocking Velo modules, and using Vite and TypeScript for an efficient development workflow.  

This toolkit allows for easy customization of default mock behaviors and supports data-dependent tests, such as those involving CMS data.

## Getting Started

### Setup

1. Clone your Wix site repository to your local machine by following the guide on [Velo: Setting Up Git Integration & Wix CLI](https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli/setting-up-git-integration-wix-cli).

2. In the cloned repository, execute the following command:
   ```
   npm install vitest typescript github:hand-dot/velo-test-kit --save-dev
   ```

3. Add `typeRoots` and `checkJs: true` to the `compilerOptions` in your repository's `jsconfig.json` as shown below:

    ```json
    {
      "compilerOptions": {
        "typeRoots": [
          ".wix/types/wix-code-types/dist/types"
        ],
        "checkJs": true
      },
      "references": [...]
    }
    ```

4. Add `vitest.config.ts` to the root of your repository and specify `'velo-test-kit'` in `setupFiles` as follows:

    ```ts
    import { defineConfig } from 'vitest/config';
    export default defineConfig({
        test: {
            setupFiles: ['velo-test-kit']
        },
    });
    ```

5. [Optional] For tests utilizing `wix-data`, set up a test CMS environment. For example, if testing with the following collection:

    ![Example Collection](https://github.com/hand-dot/velo-test-kit/assets/24843808/761effaf-b1f6-4856-82a9-40969ca4e85e)

    Add the collection's configuration in the `velo-test-kit/CMS` directory. For a `messages` collection, create `messages.ts` and define the columns and initial data:

    ```tsx
    const schema = {
        _id: String,
        message: String,
        sender: String,
        receiver: String,
        viewed: Boolean,
    };

    const data = [
        { _id: '1', message: 'Test1', sender: 'xxx', receiver: 'yyy', viewed: false },
        { _id: '2', message: 'Test2', sender: 'xxx', receiver: 'yyy', viewed: true },
        { _id: '3', message: 'Test3', sender: 'xxx', receiver: 'yyy', viewed: false },
        { _id: '4', message: 'Test4', sender: 'xxx', receiver: 'yyy', viewed: true },
    ]

    export default {
        schema,
        data
    }
    ```

6. Write your tests and execute them using `npx vitest`. enjoy🤟

If you want to reference a pre-setup project, please check out the following repo:  
https://github.com/hand-dot/my-site-velo-test-kit


### Tips

#### How to mock wix-fetch

First, install [msw](https://mswjs.io/).
    
```bash
npm install msw
```

Then Please set a function to `global.server.use` in your test file.

```
import { http, HttpResponse } from "msw";
import { describe, expect, test } from "vitest";
import { fetch } from "wix-fetch";

describe("wix-fetch", () => {
    test("should work", async () => {
        global.server.use(
            http.get("https://test.com/api/hello", () => HttpResponse.json({ key1: 'value1', key2: 'value2' }))
        );

        const res = await fetch("https://test.com/api/hello")
            .then((httpResponse) => httpResponse.ok ? httpResponse.json() : Promise.reject('Fetch did not succeed'))
            .then(json => json.key1)
            .catch(err => console.log(err));

        expect(res).toBe('value1');
    });
});
```


### Development

- To develop within `velo-test-kit`, clone [this repo](https://github.com/hand-dot/velo-test-kit) and run `npm install`. You can run `npm run dev` within `velo-test-kit` and `npm run test` in the `sample-project` directory to test and develop simultaneously.

- If you wish to develop with changes reflected in a separate project:
    - Run `npm link` in `velo-test-kit`, then install `velo-test-kit` in your development project using `npm install github:hand-dot/velo-test-kit --save-dev` followed by `npm link velo-test-kit`.
    - Execute `npm run dev` in `velo-test-kit` and `npm run test` in your development project to develop with live changes detection.
