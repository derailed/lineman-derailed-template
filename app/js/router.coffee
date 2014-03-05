@app.config( ($routeProvider, $locationProvider) ->
  $locationProvider.html5Mode( true )

  $routeProvider.when '/home', {
    templateUrl: '/app/templates/home.html',
    controller:  'HomeCtrl'
  }

  $routeProvider.otherwise { redirectTo: '/home' }
)
