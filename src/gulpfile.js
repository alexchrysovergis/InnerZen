const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');

const paths = {
  scss: './scss/*.scss',
  cssDest: '../htdocs/dist/css/'
};

function css() {
  return src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      tailwindcss('./tailwind.config.js'),
      autoprefixer()
    ]))
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(dest(paths.cssDest));
}

exports.default = series(css);