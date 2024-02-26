import { vi } from "vitest";
import _wixHttpFunctions from 'wix-http-functions';

type WixHttpFunctions = typeof _wixHttpFunctions;

const wixHttpFunctions: WixHttpFunctions = {
    badRequest: vi.fn(() => ({ status: 400, headers: {}, body: "Bad Request" })),
    created: vi.fn(),
    forbidden: vi.fn(),
    get: vi.fn(),
    notFound: vi.fn(),
    ok: vi.fn(),
    options: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    response: vi.fn(),
    serverError: vi.fn(),
    use: vi.fn(),
    wixHttpFunctionRequest: {
        body: {
            json: vi.fn(),
            text: vi.fn(),
            buffer: vi.fn(),
        },
        headers: {},
        method: "GET",
        path: [],
        query: {},
        baseUrl: "",
        functionName: "",
        ip: "",
        url: "",
    },
}

vi.mock("wix-http-functions", () => ({
    __esModule: true,
    default: wixHttpFunctions,
    ...wixHttpFunctions,
}));