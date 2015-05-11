var gulp = require('gulp'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    open = require('gulp-open'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    port = 3000;

gulp.task('browserify', function () {
  return gulp.src('./src/App.js')
    .pipe(browserify({transform: ['reactify', 'babelify']}))
    //.pipe(uglify({mangle: true}))
    .pipe(gulp.dest('./js'));
});

gulp.task('open', function () {
  var options = {
    url: 'http://localhost:' + port
  };
  return gulp.src('./index.html')
    .pipe(open('', options));
});

gulp.task('connect', function(){
  connect.server({
    root: '',
    port: port,
    livereload: true
  });
});

gulp.task('js', function(){
  return gulp.src('./js/*.js')
    .pipe(connect.reload());
});
gulp.task('html', function(){
  return gulp.src('./index.html')
    .pipe(connect.reload());
});
gulp.task('watch', function () {
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('./src/**/*.js', ['browserify']);
});
gulp.task('default', ['browserify', 'connect', 'open', 'watch']);