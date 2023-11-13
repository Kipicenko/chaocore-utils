import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        preserveModules: true,
    },
    plugins: [
        nodeResolve(),
        typescript({ noEmitOnError: true }),
        commonjs(),
        terser(),
    ],
};
