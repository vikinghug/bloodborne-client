gulpJade = require("gulp-jade")

# Jade
gulp.task "jade", ->
  gulp.src(config.jade.src)
    .pipe(plumber())
    .pipe(gulpJade({
      pretty: true
      data:
        capitalize: (str) ->
          str.charAt(0).toUpperCase() + str.slice(1)
        random: require('faker')
    }))
    .pipe gulp.dest(config.jade.dest)
    .pipe(livereload())
