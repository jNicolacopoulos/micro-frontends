import * as esbuild from 'esbuild';

esbuild
    .build({
        entryPoints: ['./src/componentWrapper.tsx'],
        bundle: true,
        minify: true,
        outfile: 'build/mf-account.bundle.js',
        format: 'iife', // Immediately Invoked Function Expression for browser usage
        globalName: 'AccountMicrofrontend',
        target: ['es2017'],
        sourcemap: true,
    })
    .catch(() => process.exit(1));
