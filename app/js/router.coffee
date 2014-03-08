@app.config ($routeProvider, $locationProvider) ->
  $locationProvider.html5Mode( true )

  $routeProvider.when '/', {
    templateUrl: '/templates/home/index.html',
    controller:  'HomeController'
  }
  $routeProvider.otherwise { redirectTo: '/' }