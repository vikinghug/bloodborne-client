browserify = require("browserify")
buffer     = require("vinyl-buffer")
rename     = require("gulp-rename")
source     = require("vinyl-source-stream")
sourcemaps = require("gulp-sourcemaps")

# Vendor assets for JS
gulp.task "jsVendor", ->
  jsVendorStream = browserify(config.jsVendor.src, {
    extensions: [".coffee"]
    debug: true
  }).transform("coffeeify")
    .transform("browserify-shim")
    .bundle()

  # standard code
  jsVendorStream
    .pipe(plumber())
    .pipe(source(config.jsVendor.src))
    .pipe(buffer())
    .pipe(rename("vendor.js"))
    .pipe(gulp.dest(config.jsVendor.dest))
    .pipe(livereload())

  return jsVendorStream
