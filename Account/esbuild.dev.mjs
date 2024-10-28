import esbuild from 'esbuild';

let ctx = await esbuild.context({
    entryPoints: ['./src/componentWrapper.tsx'],
    outfile: 'build/mf-account.bundle.js',
    bundle: true,
    sourcemap: true,
});

await ctx.watch();

let { host, port } = await ctx.serve({
    servedir: 'build',
    port: 8081,
});

console.log(`Serving mf-account on host ${host}:${port}...`);
