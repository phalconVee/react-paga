import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: './src/Paga.js',
    output: [
      {
        file: 'dist/Paga.js',
        format: 'cjs',
      }
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      commonjs({
        include: "node_modules/**"
      }),
      external(),
      terser(),
    ]
  }
];
