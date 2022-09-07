const gulp = require('gulp');
const gulpLess = require('gulp-less');
const path = require('path');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const browserSync = require('browser-sync');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const rollup = require('gulp-rollup');
const rename = require("gulp-rename");
const babel = require('gulp-babel');
const concat = require('gulp-concat');


// Less build
function less() {
    return gulp.src('src/app.less')
        .pipe(gulpLess({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('src'))
        .pipe(browserSync.reload({ stream: true }));
};


// Reload browser js
function js() {
    return gulp.src('src/app.js')
        .pipe(browserSync.reload({ stream: true }));
};


// Reload browser html
function html() {
    return gulp.src('src/*.html')
        .pipe(browserSync.reload({ stream: true }));
};


// Browser init
function browser() {
    browserSync({
        server: {
            baseDir: 'src',
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        },
        notify: false
    });
};


// Css test
function testCss() {
    return gulp.src('src/app.less')
        .pipe(gulpLess({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({
            suffix: '-min'
        }))
        .pipe(gulp.dest('dist/test'));
};


// Js test
function testJs() {
    return gulp.src('./src/**/*.js')
        .pipe(rollup({
            input: './src/app.js',
            output: {
                format: 'umd',
                name: 'app'
            }
        }))
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(minify())
        .pipe(gulp.dest('dist/test'));
};


// Css prod
function prodCss() {
    return gulp.src('src/app.less')
        .pipe(gulpLess({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({
            suffix: '-min'
        }))
        .pipe(gulp.dest('dist/prod'));
};


// Js prod
function prodJs() {
    return gulp.src('./src/**/*.js')
        .pipe(rollup({
            input: './src/app.js',
            output: {
                format: 'umd',
                name: 'app'
            }
        }))
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(minify())
        .pipe(gulp.dest('dist/prod'));
};


// Delete 'dist' directory
function testClean() {
    return del(['dist//app.js', 'dist//app-min.js', 'dist//app-min.css']);
};

function prodClean() {
    return del(['dist/prod/app.js', 'dist/prod/app-min.js', 'dist/prod/app-min.css']);
};


// Whatch func
function watch() {
    gulp.watch('src/**/*.less', less);
    gulp.watch('src/**/*.js', js);
    gulp.watch('src/*.html', html);
};


// Gulp tasks
gulp.task('browser', browser);
gulp.task('less', less);
gulp.task('js', js);
gulp.task('html', html);
gulp.task('watch', watch);

gulp.task('testCss', testCss);
gulp.task('testJs', testJs);
gulp.task('testClean', testClean);

gulp.task('prodCss', prodCss);
gulp.task('prodJs', prodJs);
gulp.task('prodClean', prodClean);


// Serve and dulid command
gulp.task('dev', gulp.parallel('less', 'js', 'browser', 'watch'));
gulp.task('test', gulp.series('testClean', 'testCss', 'testJs'));
gulp.task('prod', gulp.series('prodClean', 'prodCss', 'prodJs'));