/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  //Override application configuration here. Common examples follow in the comments.
  return {
    server: {
      pushState: true
    },

    loadNpmTasks: [
      "grunt-angular-templates",
      "grunt-concat-sourcemap",
      "grunt-haml",
      "grunt-ngmin",
      "grunt-bower-task",
      "grunt-contrib-sass"
    ],

    removeTasks: {
      common: ['concat', 'less', 'handlebars', 'jst', 'pages:dev'],
      dist:   ["pages:dist"]
    },
    prependTasks: {
      common: ["bower", "haml", "ngtemplates"],
      dist:   ['ngmin']
    },
    appendTasks: {
      common: ["concat_sourcemap"]
    },

    // configuration for sass
    sass: {
      compile: {
        options: {
          loadPath:   [
            "vendor/bower/foundation/scss",
            "app/css"
          ],
          bundleExec: true
        }
      }
    },

    // configuration for grunt-haml
    haml: {
      pages: {
        files: [
          {
            expand: true,
            cwd:    "app/pages",
            src:    ["**/*.haml"],
            dest:   "generated/",
            ext:    ".html"
          },
        ]
      },
      templates: {
        files: [
          {
            expand: true,
            cwd:    "app/templates",
            src:    ["**/*.haml"],
            dest:   "generated/angular/templates/",
            ext:    ".html"
          },
        ]
      }
    },

    // configuration for grunt-angular-templates
    ngtemplates: {
      app: { // "app" matches the name of the angular module defined in app.js
        options: {
          prefix: "/app/templates"
        },
        cwd: "generated/angular/templates",
        src: "**/*.html",
        dest: "generated/angular/template-cache.js"
      }
    },

    // configuration for grunt-ngmin, this happens _after_ concat once, which is the ngmin ideal :)
    ngmin: {
      js: {
        src:  "<%= files.js.concatenated %>",
        dest: "<%= files.js.concatenated %>"
      }
    },

    // generates a sourcemap for js, specs, and css with inlined sources
    // grunt-angular-templates expects that a module already be defined to inject into
    // this configuration orders the template inclusion _after_ the app level module
    concat_sourcemap: {
      options: {
        sourcesContent: true
      },
      js: {
        src: [
          "<%= files.js.vendor %>",
          "<%= files.coffee.generated %>",
          "<%= files.js.app %>",
          "<%= files.ngtemplates.dest %>"
        ],
        dest: "<%= files.js.concatenated %>"
      },
      spec: {
        src: [
          "<%= files.js.specHelpers %>",
          "<%= files.coffee.generatedSpecHelpers %>",
          "<%= files.js.spec %>",
          "<%= files.coffee.generatedSpec %>"
        ],
        dest: "<%= files.js.concatenatedSpec %>"
      },
      css: {
        src: [
          "<%= files.less.generatedVendor %>",
          "<%= files.sass.generatedVendor %>",
          "<%= files.css.vendor %>",
          "<%= files.less.generatedApp %>",
          "<%= files.sass.generatedApp %>",
          "<%= files.css.app %>"
        ],
        dest: "<%= files.css.concatenated %>"
      }
    },

    // configures grunt-watch-nospawn to listen for changes to
    // and recompile angular templates, also swaps lineman default
    // watch target concat with concat_sourcemap
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

    // API Proxying
    //
    // During development, you'll likely want to make XHR (AJAX) requests to an API on the same
    // port as your lineman development server. By enabling the API proxy and setting the port, all
    // requests for paths that don't match a static asset in ./generated will be forwarded to
    // whatever service might be running on the specified port.
    //
    server: {
      apiProxy: {
        enabled: true,
        host: 'localhost',
        port: 9393
      }
    },

    // Sass
    //
    // Lineman supports Sass via grunt-contrib-sass, which requires you first
    // have Ruby installed as well as the `sass` gem. To enable it, comment out the
    // following line:
    //
    enableSass: true,

    // Asset Fingerprints
    //
    // Lineman can fingerprint your static assets by appending a hash to the filename
    // and logging a manifest of logical-to-hashed filenames in dist/assets.json
    // via grunt-asset-fingerprint
    //
    // enableAssetFingerprint: true

  };
};
