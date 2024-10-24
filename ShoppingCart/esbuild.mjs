import * as esbuild from 'esbuild';

esbuild
    .build({
        entryPoints: ['./src/componentWrapper.ts'],
        bundle: true,
        minify: true,
        outfile: 'build/mf-shopping-cart.bundle.js',
        format: 'iife', // Immediately Invoked Function Expression for browser usage
        globalName: 'ShoppingCartMicrofrontend',
        target: ['es2017'],
        sourcemap: true,
    })
    .catch(() => process.exit(1));
