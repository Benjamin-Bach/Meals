const
  gulp  = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  syncOpts = {
    proxy: 'localhost' + __dirname.replace('/home/ben/Docker/www',''),
    files       : [
      'src/*'
    ],
    watchEvents : ['add', 'change', 'unlink', 'addDir', 'unlinkDir'],
    open        : true,
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
  return gulp.src('./src/HappyMeals.js')
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


gulp.task('browsersync', () => {
  if (browsersync === false) {
    browsersync = require('browser-sync').create();
    browsersync.init(syncOpts);
  }
});


gulp.task('build', gulp.parallel('js-prod'));
gulp.task('default', gulp.parallel('browsersync'));
