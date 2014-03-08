describe "HomeController", ->
  beforeEach -> module( "app" )
  beforeEach inject ($controller, $rootScope, FrameworkResource, @$httpBackend ) ->
    @scope = $rootScope.$new()
    $controller( 'HomeController', {$scope: @scope, FrameworkResource } )

  afterEach ->
    @$httpBackend.verifyNoOutstandingRequest()
    @$httpBackend.verifyNoOutstandingExpectation()

  describe '#frameworks', ->
    it "populate frameworks correctly", ->
      res = [{name:'Blee'}, {name:'Fred'}]

      @$httpBackend.expectGET('/api/v1/frameworks/index.json').respond( res )
      @$httpBackend.flush()

      expect( @scope.frameworks.length ).toEqual 2
      expect( @scope.frameworks[0].name ).toEqual res[0].name
