var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  scripts: [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'js/vendor/*.js',
    'js/application.js',
    'js/**/*.js',
  ],
  styles: [
    'css/base.css',
    'css/layout.css',
    'css/mixins/*.css',
    'css/modules/*.css',
    'css/theme.css'
  ]
};

// DEV: Concatenate and minify Javascripts with sourcemaps
gulp.task('js-dev', function() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(concat('simplysocial.min.js'))
    .pipe(gulp.dest('./'));
});

// BUILD: Concatenate and minify Javascripts
gulp.task('js-build', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('simplysocial.min.js'))
    .pipe(gulp.dest('./'));
});

// DEV: Concatenate and minify CSS with sourcemaps
gulp.task('css-dev', function() {
  return gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(concat('simplysocial.min.css'))
    .pipe(gulp.dest('./'));
});

// BUILD: Concatenate and minify CSS
gulp.task('css-build', function() {
  return gulp.src(paths.styles)
    .pipe(minifyCss())
    .pipe(concat('simplysocial.min.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['js-dev']);
  gulp.watch(paths.styles, ['css-dev']);
  gulp.watch('gulpfile.js', ['js-dev', 'css-dev']);
});

gulp.task('dev', ['js-dev', 'css-dev', 'watch']);
gulp.task('build', ['js-build', 'css-build']);
