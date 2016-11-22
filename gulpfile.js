var gulp = require('gulp'),
    minifyFile = require('gulp-file-inline'),
    imageResize = require('gulp-image-resize'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();

gulp.task('start', function(){
    console.log("I'm running gulp!");
});


gulp.task('default', ['scripts', 'styles']);

gulp.task('image-resize',function(){
   gulp.src("img/*.jpg")
       .pipe(rename(function(path){
           path.basename += "-landscape-mobile"
       }))
       .pipe(imageResize({
          width: 350,
          height: 250,
          crop: true,
          upscale: false
       }))
       .pipe(gulp.dest('img/resize/'));
});

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

gulp.task('inline', function(){
   return gulp;
    .src(['index.html', 'css/*.css', 'js' ])
});