nodemon = require("gulp-nodemon")
run     = require('run-command')

nodemonConfig = require(path.join(config.ROOT_PATH, 'nodemon.json'))
nodemonConfig.env.GULP = true

# Server
gulp.task 'server', ["default"], ->
  nodemon(nodemonConfig)
  run "gulp watch"
