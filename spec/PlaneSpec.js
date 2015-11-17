describe ("Plane", function() {

  var plane;

  beforeEach( function () {
    plane = new Plane();
  });

  it("should be landed by default", function() {
    expect(plane.isLanded()).toEqual(true);
  });
})
