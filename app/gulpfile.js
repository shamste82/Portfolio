var gulp = require('gulp'),
    minifyFile = require('gulp-file-inline'),
    browserSync = require('browser-sync').create();

gulp.task('start', function(){
    console.log("I'm running gulp!");
});


gulp.task('default', ['scripts', 'styles']);


gulp.task('browser-sync', function () {
   var files = [
      '*.html',
      'css/**/*.css',
      'js/**/*.js',
      'sass/**/*.scss'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});
