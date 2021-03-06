config                     = {}
config.ROOT_PATH           = path.join(__dirname, '..')
config.BASE_APP_PATH       = path.join(config.ROOT_PATH, 'app')
config.BASE_ASSETS_PATH    = path.join(config.BASE_APP_PATH, 'assets')
config.BASE_LIB_PATH       = path.join(config.ROOT_PATH, 'lib')
config.BASE_GENERATED_PATH = path.join(config.ROOT_PATH, '.generated')
# config.BASE_TEMPLATES_PATH = path.join(config.BASE_APP_ASSETS_PATH, 'templates')

config.clean = path.join(config.BASE_GENERATED_PATH, "**", "*")

config.sass =
  src: path.join(config.BASE_APP_PATH, "main.scss")
  dest: config.BASE_GENERATED_PATH
  watch: path.join(config.BASE_APP_PATH, "**", "*.scss*")
  options:
    errLogToConsole: true
    includePaths: [
      path.join(config.ROOT_PATH, 'bower_components', 'foundation', 'scss')
      require('node-bourbon').includePaths
    ]


config.js =
  src: path.join(config.BASE_APP_PATH, "app.js")
  dest: path.join(config.BASE_GENERATED_PATH)
  watch: [
    path.join(config.BASE_APP_PATH, "**", "*.{coffee,js}")
  ]

config.jsVendor =
  src: path.join(config.BASE_ASSETS_PATH, "js", "vendor.coffee")
  dest: path.join(config.BASE_GENERATED_PATH, "assets", 'js')
  watch: path.join(config.BASE_ASSETS_PATH, "js", "vendor.coffee")

config.jade =
  src: path.join(config.BASE_APP_PATH, "**", "*.jade")
  dest: config.BASE_GENERATED_PATH
  watch: path.join(config.BASE_APP_PATH, "**", "*.jade")

config.ejs =
  src: path.join(config.BASE_APP_PATH, "**", "*.ejs")
  dest: config.BASE_GENERATED_PATH
  watch: path.join(config.BASE_APP_PATH, "**", "*.ejs")

# config.templates =
#   src:
#     jade: path.join(config.BASE_TEMPLATES_PATH, "**", "*.jade")
#     hbs: path.join(config.BASE_TEMPLATES_PATH, "**", "*.hbs")
#   dest: path.join(config.BASE_GENERATED_PATH, 'js')

config.assets =
  src: [
    path.join(config.BASE_ASSETS_PATH, "img", "**", "*")
    path.join(config.BASE_ASSETS_PATH, "fonts", "**", "*")
    path.join(config.BASE_ASSETS_PATH, "**", "*.html")
  ]
  dest: config.BASE_GENERATED_PATH
  watch: [
    path.join(config.BASE_ASSETS_PATH, "**", "*.html")
    path.join(config.BASE_ASSETS_PATH, "img",   "**", "*")
    path.join(config.BASE_ASSETS_PATH, "fonts", "**", "*")
  ]

config.test =
  src: ''

module.exports = config
