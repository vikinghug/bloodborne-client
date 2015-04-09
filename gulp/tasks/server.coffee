nodemon = require("gulp-nodemon")
run     = require('run-command')

nodemonConfig = require(path.join(config.ROOT_PATH, 'nodemon.json'))
nodemonConfig.env.GULP = true

# Server
gulp.task 'server', ->
  nodemon(nodemonConfig)
    .on('start', ['default'])

# Development
gulp.task 'develop', ->
  nodemon(nodemonConfig)
    .on('start', ['default', 'watch'])

# Server
gulp.task 'server-production', ->
  runSequence(['bower', 'default'], -> nodemon(nodemonConfig))
