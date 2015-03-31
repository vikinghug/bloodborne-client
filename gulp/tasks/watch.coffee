findPort   = require("find-port")
livereload = require("gulp-livereload")
watch = require("gulp-watch")
nodemonConfig = require(path.join(config.ROOT_PATH, 'nodemon.json'))

# Watch
gulp.task "watch", ->
  if nodemonConfig.env.NODE_ENV == "development"
    server = livereload()

    findPort [35729], (ports) ->
      console.log "wtf"
      unless ports.length > 0
        gutil.log "[LiveReload] Can't start LiveReload => ALREADY RUNNING".red
      else
        console.log "hello"
        server = livereload.listen()
        console.log server
        if server
          msg = "[LiveReload] Now listening on port: " + server.port
          gutil.log msg.green
          livereload.changed()
        watch path.join(config.BASE_GENERATED_PATH, "**", "*"), ->
          livereload.changed()

  watch(config.stylus.watch,   -> gulp.start("stylus"))
  watch(config.js.watch,       -> gulp.start("js"))
  watch(config.jsVendor.watch, -> gulp.start("jsVendor"))
  watch(config.assets.watch,   -> gulp.start("assets"))
  watch(config.ejs.watch,      -> gulp.start("ejs"))
  watch(config.jade.watch,     -> gulp.start("jade"))
