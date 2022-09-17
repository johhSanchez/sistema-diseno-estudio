const {src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
var version = require('./package.json');

compileSass.compiler = require('node-sass');

const bundleSass = () => {
    return src('./scss/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(dest('./public/stylesheets/'))
}

const devWatch = () => {
    watch('./scss/**/*.scss', bundleSass)
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;