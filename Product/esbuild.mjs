import * as esbuild from 'esbuild';

esbuild
    .build({
        entryPoints: ['./src/componentWrapper.ts'],
        bundle: true,
        minify: true,
        outfile: 'build/mf-product.bundle.js',
        format: 'iife', // Immediately Invoked Function Expression for browser usage
        globalName: 'ProductMicrofrontend',
        target: ['es2017'],
        sourcemap: true,
    })
    .catch(() => process.exit(1));