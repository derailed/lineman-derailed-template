@app.directive 'ngHello', ->
  restrict:      'A'
  replace:       true
  templateUrl:   '/app/templates/hello.html'
  scope: { name: '@ngHello' }
