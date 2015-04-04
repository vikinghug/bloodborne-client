findPort   = require("find-port")
watch = require("gulp-watch")
nodemonConfig = require(path.join(config.ROOT_PATH, 'nodemon.json'))

# Watch
gulp.task "watch", ->
  if nodemonConfig.env.NODE_ENV == "development"
    findPort [35729], (ports) ->
      unless ports.length > 0
        gutil.log "[LiveReload] Can't start LiveReload => ALREADY RUNNING".red
      else
        livereload.listen()
        server = livereload.server
        if server
          msg = "[LiveReload] Now listening on port: " + server.port
          gutil.log msg.green
          livereload.changed()
        # watch path.join(config.BASE_GENERATED_PATH, "**", "*"), (prr) ->
        #   livereload.changed(config.BASE_GENERATED_PATH)

  watch(config.stylus.watch,   -> gulp.start("stylus"))
  watch(config.js.watch,       -> gulp.start("js"))
  watch(config.jsVendor.watch, -> gulp.start("jsVendor"))
  watch(config.assets.watch,   -> gulp.start("assets"))
  watch(config.ejs.watch,      -> gulp.start("ejs"))
  watch(config.jade.watch,     -> gulp.start("jade"))
