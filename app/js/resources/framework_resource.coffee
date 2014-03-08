app.factory 'FrameworkResource', ($q, $resource)->
  $resource('/api/v1/frameworks/index.json')
