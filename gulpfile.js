var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var watchify = require('watchify');

var path = {
  ALL: ['src/**/*.js', 'src/views/**/*.html'],
  JS: ['src/components/**/*.js', 'src/react/*.js'],
  MINIFIED_OUT: 'bundled.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'src/public/scripts/',
  DEST: 'dist',
  ENTRY_POINT: 'src/react/app.js',
  OUT: 'build.js'
};

gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('test', function(){
  return gulp.src('test/**/*.js', {read: false})
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', function() {
  gulp.watch(path.JS, ['build']);
});

gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify(path.MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_BUILD));
});
