import { vi } from "vitest";
import _wixAuth from 'wix-auth';

type WixAuth = typeof _wixAuth;

const wixAuth: WixAuth = {
    elevate: vi.fn(func => func),
}

vi.mock("wix-auth", () => ({
    __esModule: true,
    default: wixAuth,
    ...wixAuth,
}));