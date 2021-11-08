import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import json from "@rollup/plugin-json";
import path from 'path'

export default [{
  input: "modules/compare/index.js",
  external: ['react',
  'react-dom',
  "*.css"],
  output: [
    {
      file: "dist/compare.cjs.js",
      format: 'cjs',
      sourcemap: true
    },
    {
      file:  "dist/compare.esm.js",
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    }, 
  ],
  plugins: [
    external(),
    postcss({
      minimize: true,
      extensions: ['.css'],
      extract: path.resolve('dist/bundle.css'),
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      include: ['modules/**/**/*', 'components/**/**/*', "theme/*", "utils/*"],
      plugins: [
      ["import", { libraryName: "antd", style: true, libraryDirectory: "es" }]]
    }),
    resolve(),
    commonjs(),
    json(),
  ]
},
{
  input: "modules/chat/index.js",
  external: ['react',
  'react-dom', 
  "*.css"],
  output: [
    {
      file: "dist/chat.cjs.js",
      format: 'cjs',
      sourcemap: true
    },
    {
      file: "dist/chat.esm.js",
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    }, 
  ],
  plugins: [
    external(),
    postcss({
      minimize: true,
      extensions: ['.css'],
      extract: path.resolve('dist/bundle.css'),
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      include: ['modules/**/**/*', 'components/**/**/*', "theme/*", "utils/*"],
      plugins: [
        ["import", { libraryName: "antd", style: true, libraryDirectory: "es" }]
      ]
    }),
    resolve(),
    commonjs(),
    json(),
  ]
}
]
