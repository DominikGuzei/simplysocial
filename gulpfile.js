var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var concatWithSourceMaps = require('gulp-concat-sourcemap');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

var paths = {
  vendorScripts: [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/ngDialog/js/ngDialog.js',
    'node_modules/angular-retina/dist/angular-retina.js',
  ],
  scripts: [
    'js/vendor/*.js',
    'js/application.js',
    'js/**/*.js',
  ],
  styles: [
    'css/base.scss',
    'css/vendor/*.scss',
    'css/pages/*.scss',
    'css/modules/*.scss',
    'css/layout.scss',
    'css/theme.scss'
  ]
};

output = './dist';

// Concatenate and minify vendor scripts
gulp.task('vendor', function() {
  return gulp.src(paths.vendorScripts)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(output));
});

// Concatenate vendor scripts
gulp.task('vendor-dev', function() {
  return gulp.src(paths.vendorScripts)
    .pipe(concatWithSourceMaps('vendor.min.js'))
    .pipe(gulp.dest(output));
});

// Concatenate and minify Javascripts with sourcemaps
gulp.task('js', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('simplysocial.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(output));
});

// Concatenate and minify Javascripts with sourcemaps
gulp.task('js-dev', function() {
  return gulp.src(paths.scripts)
    .pipe(concatWithSourceMaps('simplysocial.min.js'))
    .pipe(gulp.dest(output));
});

// Concatenate and minify CSS with sourcemaps
gulp.task('css', function() {
  return gulp.src(paths.styles)
    .pipe(sass())
    .pipe(concat('simplysocial.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(output));
});

// Concatenate and minify CSS with sourcemaps
gulp.task('css-dev', function() {
  return gulp.src(paths.styles)
    .pipe(sass())
    .pipe(concatWithSourceMaps('simplysocial.min.css'))
    .pipe(gulp.dest(output));
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('watch', function () {
  gulp.watch(paths.vendor, ['vendor-dev']);
  gulp.watch(paths.scripts, ['js-dev']);
  gulp.watch(paths.styles, ['css-dev']);
});

gulp.task('dev', ['vendor-dev', 'js-dev', 'css-dev', 'watch', 'connect']);
gulp.task('build', ['vendor', 'js', 'css']);
