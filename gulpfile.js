const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const del = require('del');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const sass = require('gulp-sass');
const sourcemaps = require ('gulp-sourcemaps');
const terser = require('gulp-terser');
const { paralleld } = require('gulp');



function cssTask() {
    return gulp.src('./src/styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./src/styles/css'))
    .pipe(browserSync.stream())
}

function copyHtml() {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
}

function imgTask() {
    return gulp.src('./src/images/*')
    .pipe(imagemin()).pipe(gulp.dest('./dist/images'));
}

function jsTask() {
    return gulp.src('./src/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });

    gulp.watch('./src/styles/scss/**/*.scss', cssTask);
    gulp.watch('./src/*.html', copyHtml);
    gulp.watch('./src/scripts/*.js', jsTask);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/scripts/*.js').on('change', browserSync.reload);
}

exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.watch = watch;
exports.imgTask = imgTask;
exports.copyHtml = copyHtml;

exports.default = gulp.series(gulp.parallel(copyHtml, imgTask, jsTask, cssTask),watch);