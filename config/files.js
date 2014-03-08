module.exports = function(lineman) {
  return {
    js: {
      vendor: [
        "vendor/bower/underscore/underscore.js",
        "vendor/bower/angular/angular.min.js",
        "vendor/bower/angular-route/angular-route.min.js",
        "vendor/bower/angular-resource/angular-resource.min.js",
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
