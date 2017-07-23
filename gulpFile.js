
/*step
1. refer the gulp packages.
2. create the tasks.
*/

/*Concat two js files
 locate your js files i.e. fetch the file paths.
 read file 1 and read file2 
 create a another file pass file1and fl2 to that.
 move the newly created file to a folder.
*/

var gulp = require("gulp");
var concat = require('gulp-concat');
var iife = require("gulp-iife");
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var vendorFiles =
  [
   "./bower_components/jquery/dist/jquery.js",
    "./bower_components/bootstrap/dist/js/bootstrap.js",
    "./bower_components/angular/angular.js"];

var userFiles = ["./app/*/*.js"]



gulp.task('bundle', function () {
  return gulp.src(userFiles)
    .pipe(iife())
    .pipe(concat('bundle.js'))
   /* .pipe(rename('uglify.js'))
    .pipe(uglify())*/
    .pipe(gulp.dest('./dist/'));
});


gulp.task('vendor', function () {
  return gulp.src(vendorFiles)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/'));
});