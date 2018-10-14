import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
  input: 'index.js',
  output: {
    file: 'index.build.js',
    format: 'umd',
    name: 'hyper'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    json(),
    commonjs()
  ]
};