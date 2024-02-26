import { vi } from "vitest";
import _wixFetch from 'wix-fetch';

type WixFetch = typeof _wixFetch;

const wixFetch: WixFetch = {
  fetch: vi.fn((url, options = {}) => {
    return fetch(url, {
      method: options.method,
      headers: options.headers,
      body: options.body,
      // mode: options.mode,
      // credentials: options.credentials,
      // cache: options.cache,
    });
  }),
  getJSON: vi.fn(),
}

vi.mock("wix-fetch", () => ({
  __esModule: true,
  default: wixFetch,
  ...wixFetch,
}));