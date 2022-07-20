const esbuild = require('esbuild');
const path = require('path');

console.log('[esbuild] start');

esbuild.build({
    entryPoints: [path.join(__dirname, "src", "index.ts")],
    outfile: path.join(__dirname, "dist", "shared.js"),
    bundle: true,
    minify: true,
    platform: 'node',
    sourcemap: true,
    target: 'esnext',
    watch: process.argv[2] === '--watch',
}).catch((err) => {
    console.warn(err);
    process.exitCode = 1
}
);
console.log('[esbuild] finish');
