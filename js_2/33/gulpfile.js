const { src, task, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps'); // Requires: npm i -D gulp-sourcemaps
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const POSTCSS_PLUGINS = [
    autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: true
    }),
    cssnano({ preset: ['default', {}] }),
];

const PATH = {
    scssAllFiles: './scss/*.scss',
    htmlAllFiles: './*.html',
};

function scss() {
    return src('./scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(POSTCSS_PLUGINS))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
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
