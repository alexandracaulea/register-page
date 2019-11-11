const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");

// compile scss into css
function scssTask() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(prefix("last 5 versions"))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

// Browser Sync
function watchTask() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", scssTask);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.scssTask = scssTask;
exports.watchTask = watchTask;
