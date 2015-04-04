minifycss  = require('gulp-minify-css')
rename     = require('gulp-rename')
sourcemaps = require('gulp-sourcemaps')
stylus     = require('gulp-stylus')
sumi       = require('sumi-e')

# Stylus
# Get and render all .styl files recursively
gulp.task 'stylus', ->
  gulp.src(config.stylus.src, {base: config.BASE_APP_PATH})
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(stylus(use: sumi()))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.stylus.dest))
    .pipe(livereload())

  return gulp.src(config.stylus.src, {base: config.BASE_APP_PATH})
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(stylus(use: sumi()))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.stylus.dest))
    .pipe(livereload())
