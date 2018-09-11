const path = require('path');

const gulp = require('gulp');
const webpack = require('webpack');
const WebpackStream = require('webpack-stream');
const WebpackConfig = require('./webpack.config');

const exec = require('child_process').exec;

gulp.task('webpack', () => {
  return WebpackStream(WebpackConfig, webpack).pipe(gulp.dest(path.resolve('public', 'build')));
});

gulp.task('electron', (done) => {
  const command = 'electron public/build/main.js';
  exec(command, (err, stdout, stderr) => {
    done(err);
  });
});

gulp.task('default', gulp.series('webpack', 'electron'), (done) => done());