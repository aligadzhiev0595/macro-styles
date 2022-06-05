import gulp from "gulp";
import nodeSass from 'node-sass'
import gulpSass from "gulp-sass";
import rename from 'gulp-rename';

const sass = gulpSass(nodeSass);

gulp.task('build', () => {
  return gulp
    .src('./src/index.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
  gulp.watch('./src/*.scss', gulp.parallel('build'));
});