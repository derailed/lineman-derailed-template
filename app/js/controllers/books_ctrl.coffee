app.controller 'BooksCtrl', ($scope, Books)->
  $scope.books = Books.query()
