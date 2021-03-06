module.exports = function(lineman) {
  return {
    server: {
      pushState: true
    },

    uglify: {
      options: {
        mangle: false,
        banner: "<%= meta.banner %>"
      }
    },

    removeTasks: {
      common: ['less', 'pages:dev', 'handlebars', 'jst'],
      dist:   ["pages:dist"]
    },

    coffeelint: {
      app: ["app/js/**/*.coffee"]
    },

    sass: {
      compile: {
        options: {
          loadPath:   [
            "vendor/bower/foundation/scss",
            "vendor/bower/fontawesome/scss",
            "app/css"
          ],
          bundleExec: true
        }
      }
    },

    haml: {
      templates: {
        files: [
          {
            expand: true,
            cwd:    "app/templates",
            src:    ["**/*.haml"],
            dest:   "generated/templates/",
            ext:    ".html"
          }
        ]
      }
    },

    ngtemplates: {
      app: {
        options: {
           base: "/app/templates"
         },
         src:  "app/templates/**/*.haml",
         dest: "<%=files.ngtemplates.dest%>"
      }
    },

    watch: {
      pages: {
        files: ["<%= files.pages.source %>"],
        tasks: ["haml:pages"]
      },
      ngtemplates: {
        files: "app/templates/**/*.haml",
        tasks: ["haml:templates", "ngtemplates", "concat_sourcemap:js"]
      },
      js: {
        files: ["<%= files.js.vendor %>", "<%= files.js.app %>"],
        tasks: ["concat_sourcemap:js"]
      },
      coffee: {
        files: "<%= files.coffee.app %>",
        tasks: ["coffee", "concat_sourcemap:js"]
      },
      jsSpecs: {
        files: ["<%= files.js.specHelpers %>", "<%= files.js.spec %>"],
        tasks: ["concat_sourcemap:spec"]
      },
      coffeeSpecs: {
        files: ["<%= files.coffee.specHelpers %>", "<%= files.coffee.spec %>"],
        tasks: ["coffee", "concat_sourcemap:spec"]
      },
      css: {
        files: ["<%= files.css.vendor %>", "<%= files.css.app %>"],
        tasks: ["concat_sourcemap:css"]
      },
      sass: {
        files: ["<%= files.css.vendor %>", "<%= files.sass.app %>"],
        tasks: ["sass", "concat_sourcemap:css"]
      }
    },

    // API Proxying - Hitting sinatra app running with shotgun
    server: {
      apiProxy: {
        enabled: true,
        host:    'localhost',
        port:    4567
      }
    },

    // Sass
    enableSass: true,

    webfonts: {
      files: {
        "vendor/bower/fontawesome/fonts/": "vendor/bower/fontawesome/fonts/*.*"
      }
    }
    
    // Asset Fingerprints
    //
    // Lineman can fingerprint your static assets by appending a hash to the filename
    // and logging a manifest of logical-to-hashed filenames in dist/assets.json
    // via grunt-asset-fingerprint
    //
    // enableAssetFingerprint: true
  };
};
