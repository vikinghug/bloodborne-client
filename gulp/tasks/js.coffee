babelify   = require("babelify")
browserify = require("browserify")
buffer     = require("vinyl-buffer")
rename     = require("gulp-rename")
source     = require("vinyl-source-stream")
sourcemaps = require("gulp-sourcemaps")
uglify     = require("gulp-uglify")

# Task
gulp.task "js", ->
  jsStream = browserify(config.js.src)
    .transform(babelify)
    .bundle()

  # minified code
  jsStream
    .pipe(plumber())
    .pipe(source(config.js.src))
    .pipe(buffer())
    .pipe(cache('jsMin'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({ compress: { negate_iife: false }}))
    .pipe(rename("app.min.js"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.js.dest))

  # standard code
  jsStream
    .pipe(plumber())
    .pipe(source(config.js.src))
    .pipe(buffer())
    .pipe(cache('js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(rename("app.js"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.js.dest))
    .pipe(livereload())
    .pipe(livereload())

  return jsStream
