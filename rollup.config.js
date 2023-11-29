import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const buildSettings = [
    {
        dir: "dist/esm",
        format: "es",
        options: {
            noEmitOnError: true,
            compilerOptions: {
                outDir: "dist/esm",
                declaration: false,
                emitDeclarationOnly: false,
                declarationDir: null,
            },
        },
    },
    {
        dir: "dist/cjs",
        format: "cjs",
        options: {
            noEmitOnError: true,
            compilerOptions: {
                outDir: "dist/cjs",
                declaration: false,
                emitDeclarationOnly: false,
                declarationDir: null,
            },
        },
    },
];

const builds = buildSettings.map(({ dir, format, options }) => ({
    input: "src/index.ts",
    output: {
        dir,
        format,
        exports: "named",
        preserveModules: true,
    },
    plugins: [commonjs(), nodeResolve(), typescript(options), terser()],
}));

export default builds;
