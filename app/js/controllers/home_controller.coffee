@app.controller "HomeController", ($scope, FrameworkResource)->
  $scope.frameworks = FrameworkResource.query()
