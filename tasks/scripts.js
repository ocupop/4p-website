import gulp from 'gulp'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import { webpackConfig } from './webpack'

gulp.task('scripts', function () {
  return gulp.src('./scripts/**/*')
    .pipe(webpackStream(webpackConfig, webpack))
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end'); // Don't stop the rest of the task
    })
    .pipe(gulp.dest('./src'))
})