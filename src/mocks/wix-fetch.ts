import { vi } from "vitest";
import _wixFetch from 'wix-fetch';

type WixFetch = typeof _wixFetch;

const wixFetch: WixFetch = {
  fetch: vi.fn(),
  getJSON: vi.fn(),
}

vi.mock("wix-secrets-backend", () => ({
  __esModule: true,
  default: wixFetch,
  ...wixFetch,
}));