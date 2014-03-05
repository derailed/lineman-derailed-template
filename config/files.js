/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    ngtemplates: {
      dest: "generated/angular/template-cache.js"
    },

    // As an example, to override the file patterns for
    // the order in which to load third party JS libs:
    js: {
      vendor: [
        "vendor/bower/underscore/underscore.js",
        "vendor/bower/angular/angular.js",
        "vendor/bower/angular-route/angular-route.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]
    },

    sass: {
      compile: {
        options: {
          loadPath: [
            "vendor/bower/foundation/*.scss",
            "app/css/**/*.scss"
          ]
        }
      }
    }
  };
};
