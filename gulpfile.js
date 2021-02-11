const
    gulp         = require('gulp'),
    gulpLess     = require('gulp-less'),
    path         = require('path'),
    concat       = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minify       = require('gulp-minify'),
    browserSync  = require('browser-sync'),
    del          = require('del'),
    babel        = require('gulp-babel');


function less() {
    return gulp.src('src/app.less')
    .pipe(gulpLess({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('src'))
    .pipe(browserSync.reload({stream: true}));
};


function js() {
    return gulp.src('src/app.js')
    // .pipe(concat('app2.js'))
    // .pipe(babel({
    //     presets: ['@babel/env']
    // }))
    // .pipe(gulp.dest('src'))
    .pipe(browserSync.reload({stream: true}));
};


function html() {
    return gulp.src('src/*.html')
    .pipe(browserSync.reload({stream: true}));
};


function browser() {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
};


function watch() {
    gulp.watch('src/**/*.less', less);
    gulp.watch('src/**/*.js', js);
    gulp.watch('src/*.html', html);
};


gulp.task('browser', browser);
gulp.task('less', less);
gulp.task('js', js);
gulp.task('html', html);
gulp.task('watch', watch);

gulp.task('start', gulp.parallel('less','js','browser','html','watch'));