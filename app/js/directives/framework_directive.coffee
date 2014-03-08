@app.directive 'framework', ->
  restrict: 'E'
  replace:  true
  scope:    { url: "@", image: "@" }
  template: "<a ng-href='{{url}}' target='#'>" +
            "<img ng-src='{{image}}' class='logo'/></a>"