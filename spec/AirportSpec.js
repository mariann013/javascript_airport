describe ("Airport", function() {

  var airport = new Airport();
  var plane = 'plane';
  it("instructs a plane to land", function() {
    expect(airport.land(plane)).toEqual([plane]);
  });


  it("instructs a plane to take off", function() {
    expect(airport.take_off(plane)).toEqual(plane);
  });

});
