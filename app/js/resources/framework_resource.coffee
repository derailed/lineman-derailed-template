app.factory 'FrameworkResource', ($resource)->
  $resource('/api/v1/frameworks/index.json')