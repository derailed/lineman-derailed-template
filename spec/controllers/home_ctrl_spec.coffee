describe "controller: HomeCtrl ($httpBackend.when().respond, jasmine-given, coffeescript)", ->
  $scope = null

  Given -> module( "app" )

  Given inject ($controller, $rootScope, $location, @$httpBackend ) ->
    $scope    = $rootScope.$new()
    $redirect = spyOn( $location, 'path' )

    $controller( 'HomeCtrl', {$scope: $scope} )

  Invariant ->
    @$httpBackend.verifyNoOutstandingRequest()
    @$httpBackend.verifyNoOutstandingExpectation()

  describe 'when user visit root url', ->
    Given -> @$httpBackend.whenGET('/').respond(200)
    # When  -> @$httpBackend.flush()
    Then 'It should redirect to /home', ->
      expect( $scope.say_it ).toEqual 'Hello Opiniato!'
      # expect( @redirect ).toHaveBeenCalledWith( '/home' )
      # expect( page ).to have_content 'Hello World'
