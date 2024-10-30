import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                { src: 'assets', dest: '.' }, // Copies assets folder
            ],
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/componentWrapper.ts'), // Entry point
            name: 'ProductDetailsElement',
            fileName: 'mf-product.bundle',
            formats: ['iife'],
        },
        target: 'es2017',
        sourcemap: true,
        outDir: 'build',
    },
    server: {
        host: true,
        port: 8083,
    },
});
