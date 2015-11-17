describe ("Plane", function() {

  var plane;

  beforeEach( function () {
    plane = new Plane();
  });

  it("should be flying by default", function() {
    expect(plane.isFlying()).toEqual(true);
  });
})
