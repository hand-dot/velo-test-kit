import { vi } from "vitest";
import _wixRouter from 'wix-router';

type WixRouter = typeof _wixRouter;

const wixRouter: WixRouter = {
    afterRouter: vi.fn(),
    afterSitemap: vi.fn(),
    beforeRouter: vi.fn(),
    customizeQuery: vi.fn(),
    forbidden: vi.fn(),
    next: vi.fn(),
    notFound: vi.fn(),
    ok: vi.fn(),
    redirect: vi.fn(),
    router: vi.fn(),
    sendStatus: vi.fn(),
    sitemap: vi.fn(),
    WixRouterSitemapEntry: vi.fn(),
}

vi.mock("wix-router", () => ({
    __esModule: true,
    default: wixRouter,
    ...wixRouter,
}));