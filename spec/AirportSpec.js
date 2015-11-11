describe ("Airport", function() {

  var airport;
  var plane;
  var planes;

    beforeEach( function() {
      airport = new Airport;
      planes = [];
      plane = "plane";

    });

    it("instructs a plane to land", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      // expect(airport.isStormy).toBe(false);
      expect(airport.land(plane)).toEqual([plane]);
    });

    it("instructs a plane to take off", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      airport.land(plane);
      expect(airport.take_off(plane)).toEqual(plane);
    });

    it("can not land plane is airport is full", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      for(var i = 0; i <20; ++i) {
        airport.land(plane);
      }
      expect(function() { airport.land(plane) }).toThrow("Can not land, airport is full");
    });

    it("should not let plane land when weather is stormy", function() {
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function() { airport.land(plane) }).toThrow("Can not land, weather is stormy");
    })

    it("should not let plane take off when weather is stormy", function() {
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function() { airport.take_off(plane) }).toThrow("Can not take off, weather is stormy");
    })

    it("should not let planes take off if not at airport", function(){
      spyOn(airport, "isStormy").and.returnValue(false);
      expect(function() {airport.take_off(plane) }).toThrow("Can not take off, this plane is not at this airport");
    })
});
