describe "Framework directive", ->
  beforeEach -> module("app")
  # beforeEach module('Templates')
  
  beforeEach inject ($rootScope, $compile, @$httpBackend) ->
    scope = $rootScope.$new()
    html  = angular.element("<framework url='http://linemanjs.com' image='blee.png'></framework>")
    @res  = $compile( html )(scope)
    scope.$digest()
        
  it "populate frameworks correctly", ->
    img = @res.find('img')[0]
    expect( img ).toNotBe  null
    expect( img.src ).toMatch /\.*blee.png$/