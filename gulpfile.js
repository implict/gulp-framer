var gulp = require('gulp');
var coffee = require('gulp-coffee');

gulp.task('default', ['coffee']);

gulp.task('coffee', function() {
    gulp.src('./src/*.coffee')
      .pipe(coffee())
      .pipe(gulp.dest('./dist/js/'))
  });
