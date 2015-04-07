# Static Assets
gulp.task "assets", ->
  gulp.src(config.assets.src, {base: config.BASE_APP_PATH})
    .pipe(plumber())
    .pipe(cache('assets'))
    .pipe(gulp.dest(config.assets.dest))
    .pipe(livereload())
