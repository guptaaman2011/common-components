import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'
export default [{
  input: "components/atoms/IconButton/index.js",
  external: ['react',
  'react-dom'],
  globals: {   react: 'React',
  'react-dom': 'ReactDOM' },
  output: [
    {
      file: "dist/iconbutton.js",
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
},
{
  input: "components/atoms/ChatAvatar/index.js",
  external: ['react',
  'react-dom'],
  globals: {   react: 'React',
  'react-dom': 'ReactDOM' },
  output: [
    {
      file: "dist/chatavatar.js",
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}]
