const
  gulp  = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  syncOpts = {
    proxy: 'localhost',
    files       : [
      'build/*'
    ],
    watchEvents : ['add', 'change', 'unlink', 'addDir', 'unlinkDir'],
    open        : false,
    notify      : false,
    ghostMode   : false,
    ui: {
      port: 8001
    }
  }
;
console.log(plugins);
var browsersync = false;

gulp.task('js-prod', () => {
  return gulp.src('./src/*.js')
  .pipe(plugins.babel({
			presets: ['@babel/env']
		}))
  .pipe(plugins.uglify({
    compress: {
      drop_console: true
    }
  }))
  .pipe(gulp.dest('./build/'));
});

gulp.task('js-dev', () => {
  return gulp.src('./src/*.js')
  .pipe(gulp.dest('./build/'));
});

gulp.task('browsersync', () => {
  if (browsersync === false) {
    browsersync = require('browser-sync').create();
    browsersync.init(syncOpts);
  }
});

gulp.task('watch:js', () => {
  gulp.watch('./src/*.js', gulp.series('js-dev'));
});

gulp.task('watch', gulp.parallel('watch:js'));
gulp.task('build', gulp.parallel('js-prod'));
gulp.task('default', gulp.parallel('browsersync','watch'));
