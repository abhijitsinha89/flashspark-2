var gulp = require('gulp');
var gutil = require('gulp-util');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var notify = require('gulp-notify');
var watch = require('gulp-notify');
var uglify= require('gulp-uglify');
var sass = require('gulp-sass');
var imagemin= require('gulp-imagemin');

gulp.task('vendormodules',function(){
  var vendorjs =[
    './bower_components/angular/angular.js',
    './bower_components/angular-route/angular-route.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    './bower_components/angular-sanitize/angular-sanitize.js',
    './bower_components/angular-aria/angular-aria.js',
    './bower_components/angular-animate/angular-animate.js',
    './bower_components/angular-material/angular-material.js',
    './bower_components/angular-material/angular-ui-router.js',
    './bower_components/moment/moment.js'
  ];

  gulp.src(vendorjs,{base:'./bower_components/'}).pipe(uglify()).pipe(concat('vendorscripts.min.js')).pipe(gulp.dest('build/vendor/')).pipe(notify({
    message:"vendor scripts have been processed"
  }));
});

gulp.task('appmodules',function () {
  var appjs = [
    './app/app.js',
    './app/config.route.js',
    './app/shared/directives/*.js',
    './app/shared/services/*.js',
    './app/layout/*.js',
    './app/**/*.js'
  ];

  gulp.src(appjs,{base:'./bower_components/'}).pipe(concat('app.min.js')).pipe(gulp.dest('build/app/')).pipe(notify({
    message:"app scripts have been processed"
  }));
});

gulp.task('vendorcss', function () {
    var vendorcss = [
    './bower_components/angular/angular-csp.css',
    './bower_components/font-awsome/css/font-awesome.css',
      './content/styles/*.css',
    './bower_components/bootstrap/dist/css/bootstrap.min.css'
    ];
     gulp.src(vendorcss).pipe(minifyCSS()).pipe(concat('vendorcss.min.css'))
     .pipe(gulp.dest('build/vendor')).pipe(notify({
    message:"vendorcss has been processed"
  }));
});

gulp.task('fonts-vendor',function(){

  gulp.src('./bower_components/font-awsome/fonts/*',{base:'./bower_components/font-awsome/'}).pipe(gulp.dest('build/')).pipe(notify({
    message:"fonts have been loaded"
  }));
});

gulp.task('fonts-bootstrap',function(){

  gulp.src('./bower_components/bootstrap/fonts/*',{base:'./bower_components/bootstrap/'}).pipe(gulp.dest('build/')).pipe(notify({
    message:"bootstrap fonts have been loaded"
  }));
});

gulp.task('fonts-custom',function(){

  gulp.src('./content/fonts/*',{base:'./content/'}).pipe(gulp.dest('build/')).pipe(notify({
    message:"custom fonts have been loaded"
  }));
});

gulp.task('sass',function(){
  gulp.src('./content/styles/*.scss').pipe(sass()).pipe(concat('app.min.css')).pipe(minifyCSS()).pipe(gulp.dest('./build/app/')).pipe(notify({
    message:"sass styles have been processed"
  }));
});

gulp.task('watch',function(){

  gulp.watch('./app/**/*.js',function(){
    gulp.run('appmodules');
  });

gulp.watch('./content/styles/*.scss',function(){
    gulp.run('sass');
  });
});


gulp.task('default', ['vendormodules', 'vendorcss', 'appmodules','fonts-custom','fonts-vendor','fonts-bootstrap' , 'sass' , 'watch']);