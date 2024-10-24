import * as esbuild from 'esbuild';

let ctx = await esbuild.context({
    entryPoints: ['./src/componentWrapper.ts'],
    outfile: 'build/mf-product.bundle.js',
    bundle: true,
    sourcemap: true,
});

await ctx.watch();

let { host, port } = await ctx.serve({
    servedir: 'build',
    port: 8083,
});

console.log(`Serving mf-product on host ${host}:${port}...`);
