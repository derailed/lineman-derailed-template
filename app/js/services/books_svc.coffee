app.factory 'BooksSvc', ($q,$http)->
  getBooks: ->
    $http.get('/books.json')
