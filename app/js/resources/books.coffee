app.factory 'Books', ($q, $resource)->
  $resource('/api/books/index.json')
