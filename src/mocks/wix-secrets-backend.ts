import { vi } from "vitest";
import _wixSecretsBackend from 'wix-secrets-backend';

type WixSecretsBackend = typeof _wixSecretsBackend;


const wixSecretsBackend: WixSecretsBackend = {
  createSecret: vi.fn(),
  deleteSecret: vi.fn(),
  getSecret: vi.fn(),
  updateSecret: vi.fn(),
}

vi.mock("wix-secrets-backend", () => ({
  __esModule: true,
  default: wixSecretsBackend,
  ...wixSecretsBackend,
}));