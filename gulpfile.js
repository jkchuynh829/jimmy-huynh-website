const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const browserify = require('gulp-browserify');

gulp.task('scripts', () => {
  gulp.src('./src/main.js')
      .pipe(browserify({
        insertGlobals: true,
        debut: !gulp.env.production
      }))
      .pipe(gulp.dest('./public/build/'));
});