describe ("Airport", function() {

  var airport = new Airport();
  var plane = 'plane';

    it("instructs a plane to land", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      expect(airport.isStormy).toBe(false);
      // expect(airport.land(plane)).toEqual([plane]);
    });


    it("instructs a plane to take off", function() {
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
});
