require("protractor");
require("protractor/jasminewd");

// BOZO!! Coffee seems to be toast here. Need to figure this out...
describe( "Derailed App", function() {
  beforeEach( function() {
    browser.get("/");    
  });
  
  it( "Picks out the header correctly", function() {
    expect( browser.getTitle() ).toBe( "DeRailed!" );    
    expect( element( by.css('div.title') ).getText() ).toEqual( "DeRailed!!" );
  });

  // BOZO !! Revisit... This shit is really clumky.  
  it( "Picks out frameworks from server correctly", function() {
    var cols = element( by.css('columns') );
    expect( cols.isPresent() ).toBe( true );
  });
});