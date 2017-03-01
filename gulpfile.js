const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const browserify = require('gulp-browserify');

gulp.task('scripts', () => {
  gulp.src('./views/main.js')
      .pipe(browserify({
        insertGlobals: true,
        debut: !gulp.env.production
      }))
      .pipe(gulp.dest('./public/'));
});

gulp.task('build', ['scripts']);

gulp.task('default', ['build']);