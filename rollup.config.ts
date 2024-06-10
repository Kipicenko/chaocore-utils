import type { RollupOptions } from "rollup";

import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const build_esm: RollupOptions = {
    input: "src/index.ts",
    output: {
        dir: "dist/esm",
        format: "es",
        exports: "named",
        preserveModules: true,
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
            noEmitOnError: true,
            compilerOptions: {
                outDir: "dist/esm",
            },
        }),
        terser(),
    ],
};

const build_cjs: RollupOptions = {
    input: "src/index.ts",
    output: {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        entryFileNames: "[name].cjs",
        preserveModules: true,
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
            noEmitOnError: true,
            compilerOptions: {
                outDir: "dist/cjs",
            },
        }),
        terser(),
    ],
};

const builds: Array<RollupOptions> = [build_esm, build_cjs];

export default builds;
