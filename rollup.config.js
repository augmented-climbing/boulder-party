import alias from 'rollup-plugin-alias'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  dest: 'app/index.js',
  sourceMap: true,
  plugins: [
    alias({
      vue$: 'vue/dist/vue.common.js'
    }),
    vue(),
    nodeResolve(),
    commonjs()
  ]
}