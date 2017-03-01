const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const browserify = require('gulp-browserify');

gulp.task('start', () => {
  nodemon({
    script: index.js,
    ext: 'html js',
    watch: ['index.js'],
    env: { NODE_ENV: 'test' },
  });
});