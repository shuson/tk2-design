import {writeFileSync, existsSync} from 'fs'
import sh from 'shelljs'
import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import sass from 'node-sass'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    //scss({
    //  output
    //}),
    postcss({
      modules: true,
      extensions: ['.css'],
      sourceMap: false
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}

function output(styles, styleNodes) { //this is to keep the style source to to dist
  const fileList = Object.keys(styleNodes)
  fileList.forEach(function(file) {
    const outDir = file.substring(file.lastIndexOf("/components")+12, file.lastIndexOf("/"))
    const outputFile = file.substring(file.lastIndexOf("/components")+12, file.lastIndexOf("."))
    
    const result = sass.renderSync({
      file: file
    })
    
    const fileDir = path.resolve(__dirname, './dist/styles/'+outDir)
    if(!existsSync(fileDir)) {
      sh.mkdir('-p', fileDir)
    }
    const filename = path.resolve(__dirname, `./dist/styles/${outputFile}.css`)
    if(!existsSync(filename)) {
      writeFileSync(filename, result.css)
    }
  })
}