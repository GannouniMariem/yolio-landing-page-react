var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');

// Css Task
gulp.task('sass', function () {
  return gulp.src('src/scss/style.scss') // Get The Source Files
  .pipe(sourcemaps.init()) // To Initialize The Sourcemap ( For Getting The Source (Line) Of Code In The Scss File )
  .pipe(sass().on('error', sass.logError)) // Compile Sass Code To Css Code, Compress The Executed Code  & Log Errors
  .pipe(prefix('last 2 versions')) // Add Prefixes (Css3) For 2 Last versions of Browsers
  //.pipe(combineMq()) // Combine Media Queries
  .pipe(concat('style.css')) // Concat Css Files Into One File
  .pipe(sourcemaps.write('maps')) // Create The Sourcemap In a Folder Named maps ( if we don't write the map in a precise destination it will be created in our file generated which make the size of the file more bigger )
  .pipe(gulp.dest('src/css')) // Send The Files To The Destination
  .pipe(notify('Css Task Is Done !')) // Show Notification
});


// Js Task
/**
 * gulp.task('js', function () {
  // return gulp.src('./js/*.js') // Get The Source Files
  return gulp.src([
                    './node_modules/bootstrap/dist/js/bootstrap.js',
                    './node_modules/simplebar/dist/simplebar.js',
                    './node_modules/sharer.js/sharer.js',
                    './node_modules/jquery-validation/dist/jquery.validate.js',
                    './js/!(script)*.js',
                    './js/script.js'
                  ]) // Get The Source Files
  .pipe(concat('script.min.js')) // Concat Js Files Into One File
  // .pipe(uglify()) // Minify Js Files
  .pipe(gulp.dest('../assets/js')) // Send The Files To The Destination
  .pipe(notify('JS Task Is Done !')) // Show Notification
});
 */

// Watch Task
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass')); // Watch The Css Task
  //gulp.watch('js/*.js', ['js']); // Watch The Js Task
})