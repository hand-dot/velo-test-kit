import { defineConfig } from 'vitest/config';
export default defineConfig({
    test: {
        setupFiles: ['../dist/index.js']
    },
});