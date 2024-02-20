import { defineConfig } from 'vitest/config';
export default defineConfig({
    test: {
        setupFiles: ['src/index.ts'],
        include: ['tests/**/*.test.ts'],

    },
});