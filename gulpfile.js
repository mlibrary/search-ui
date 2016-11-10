'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var nunjucks    = require('gulp-nunjucks');
var clean       = require('gulp-clean');
var fs          = require('fs')

// Static Server + watching scss/html files
gulp.task('serve', ['templates', 'sass', 'images'], function() {
    browserSync.init({
        server: "./build"
    });

    gulp.watch("./stylesheets/*.scss", ['sass']);
    gulp.watch("./stylesheets/**/*.scss", ['sass']);
    gulp.watch("./templates/**/*.html", ['templates']);
    gulp.watch("./*.json", ['templates']);

    gulp.watch("./templates/*.html").on('change', browserSync.reload);
    gulp.watch("./data.json").on('change', browserSync.reload);
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
