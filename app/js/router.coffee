@app.config( ($routeProvider, $locationProvider) ->

  $locationProvider.html5Mode( true )

  $routeProvider.when '/', {
    templateUrl: '/app/templates/home.html',
    controller:  'HomeCtrl'
  }

  $routeProvider.when '/mybooks', {
    templateUrl: '/app/templates/books/books.html',
    controller:  'BooksCtrl'
  }

  $routeProvider.otherwise { redirectTo: '/' }
)
