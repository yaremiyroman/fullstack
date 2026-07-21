const { src, task, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps'); // Requires: npm i -D gulp-sourcemaps
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

const PLUGINS = [
    cssnano({ preset: ['default', {}] }),
];

const PATH = {
    scssAllFiles: './scss/*.scss',
    htmlAllFiles: './*.html',
};



function scss() {
    return src('./scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(PLUGINS))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./css/'));
}

async function sync() {
    browserSync.reload();
}

function watchFiles() {
    syncInit();
    watch(PATH.scssAllFiles, series(scss, sync));
    watch(PATH.htmlAllFiles, sync);
}
// scss();

function syncInit() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}

task('default', scss);
task('watch', series(scss, watchFiles));
