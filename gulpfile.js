var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");

gulp.task('sass', function () {
    gulp.src('style.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
});
gulp.task('default', ['sass'], function () {
    gulp.watch('style.scss', ['sass']);
});