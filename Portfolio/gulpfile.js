var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
    return gulp.src('css/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/'))
        // .pipe(plumber({
        //     errorHandler: onError
        // }))
        ;
});

gulp.task('watch', function(){
  gulp.watch('css/*.scss', ['sass']);
  // Other watchers
});

gulp.task('default', function() {
  // place code for your default task here
});
