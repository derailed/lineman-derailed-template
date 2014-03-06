describe "ngHello directive", ->
  Given -> module("app")

  When inject ($rootScope, $compile) ->
    html = angular.element("<div ng-hello='World'></div>")
    @el = $compile(html)($rootScope)
    $rootScope.$digest()

  Then -> @el.text() == "Hello, World!"
