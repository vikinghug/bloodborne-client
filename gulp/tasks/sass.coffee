minifycss  = require('gulp-minify-css')
rename     = require('gulp-rename')
sourcemaps = require('gulp-sourcemaps')
bulkSass   = require('gulp-sass-bulk-import')
sass       = require('gulp-sass')

# Stylus
# Get and render all .sass files recursively
gulp.task 'sass', ->
  gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(bulkSass())
    .pipe(sass(config.sass.options))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(livereload())

  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(bulkSass())
    .pipe(sass(config.sass.options))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(livereload())
