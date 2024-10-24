import * as esbuild from 'esbuild';

let ctx = await esbuild.context({
    entryPoints: ['./src/componentWrapper.ts'],
    outfile: 'build/mf-shopping-cart.bundle.js',
    bundle: true,
    sourcemap: true,
});

await ctx.watch();

let { host, port } = await ctx.serve({
    servedir: 'build',
    port: 8082,
});

console.log(`Serving mf-shopping-cart on host ${host}:${port}...`);
