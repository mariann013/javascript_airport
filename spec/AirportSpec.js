describe ("Airport", function() {

  var airport;
  var plane;
  var planes;

  it("should let you set an airport default capacity", function() {
    airport = new Airport(40);
    expect(airport.capacity).toEqual(40);
  });

    beforeEach( function() {
      airport = new Airport;
      planes = [];
      plane = "plane";
      capacity = airport.capacity;
    });

    it("instructs a plane to land", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      spyOn(airport, "planeIsHere").and.returnValue(false);
      expect(airport.land(plane)).toEqual([plane]);
    });

    it("instructs a plane to take off", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      spyOn(airport, "planeIsHere").and.returnValue(false);
      airport.land(plane);

      expect(airport.take_off(plane)).toEqual(plane);
    });

    it("can not land plane is airport is at default capacity", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      spyOn(airport, "planeIsHere").and.returnValue(false);
      for(var i = 0; i <capacity; ++i) {
        airport.land(plane);
      }
      expect(function() { airport.land(plane) }).toThrow("Can not land, airport is full");
    });

    it("should not let plane land when weather is stormy", function() {
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function() { airport.land(plane) }).toThrow("Can not land, weather is stormy");
    });

    it("should not let plane take off when weather is stormy", function() {
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function() { airport.take_off(plane) }).toThrow("Can not take off, weather is stormy");
    });

    it("should not let planes take off if not at airport", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      expect(function() {airport.take_off(plane) }).toThrow("Can not take off, this plane is not at this airport");
    });

    it("should not let a landed plane land", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      spyOn(airport, "planeIsHere").and.returnValue(true);
      expect(function() { airport.land(plane) }).toThrow("Can not land, plane has already landed");
    });

    it("should not let a flying plane land", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      spyOn(airport, "planeIsHere").and.returnValue(true);
      expect(function() { airport.land(plane) }).toThrow("Can not land, plane has already landed");
    });
});
