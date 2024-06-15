const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const paths = {
    scss: './scss/*.scss',
    cssDest: './../htdocs/dist/css/'
};

function css() {
    return src(paths.scss) // the src
        .pipe(sass())
        .pipe(concat('styles.min.css'))  // concat the scss into a single file
        .pipe(cleanCSS())  // minify it
        .pipe(dest(paths.cssDest)); //the compiled css destination
}

function watchFiles() {
    watch(paths.scss, css); // Watch sass files and run the css task on save
}

exports.css = css;
exports.watch = watchFiles;

exports.default = series(css, watchFiles);