'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var nunjucks    = require('gulp-nunjucks');
var clean       = require('gulp-clean');
var concat      = require('gulp-concat');

// Static Server + watching scss/html files
gulp.task('serve', ['templates', 'sass', 'images', 'scripts'], function() {
    browserSync.init({
        server: "./build"
    });

    gulp.watch("./stylesheets/**", ['sass']);
    gulp.watch("./templates/**", ['templates']);
    gulp.watch("./assets/javascript/**", ['scripts']);
    gulp.watch("./**").on('change', browserSync.reload);
});

gulp.task('images', function() {
  return gulp.src("./assets/images/**")
      .pipe(gulp.dest("./build/assets/images"))
})

gulp.task('sass', function() {
    return gulp.src("./stylesheets/main.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./build/assets/stylesheets"))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src('./assets/javascript/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./build/assets/javascript/'));
});

gulp.task('templates', function() {
  var data = JSON.parse(fs.readFileSync('./data.json'));

  return gulp.src('templates/index.html')
      .pipe(nunjucks.compile({data}))
      .pipe(gulp.dest('./build'))
});

gulp.task('clean', function() {
    return gulp.src('/build', {read: false})
        .pipe(clean());
})

gulp.task('default', ['clean', 'serve']);
