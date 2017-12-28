import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  output: {
    file: `dist/index${production ? '.min' : ''}.js`,
    format: 'umd',
    name: 'ityped',
    sourcemap: true,
    banner: `/**
    * @name ityped
    * @description Dead simple Animated Typing with no dependencies
    * @author Luis Vinícius
    * @email luis@uilabs.me
    */`,
  },
  plugins: [
    babel()
  ]
    .concat(production ? [
      uglify()
    ] : [])
}