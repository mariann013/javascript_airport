describe("WeatherReporter", function() {
  var weatherreporter = new WeatherReporter();

    it("returns stormy", function() {
      spyOn(Math, "random").and.returnValue(0.9);
      expect(weatherreporter.isStormy()).toBe(true);
    });


    it("returns not stormy", function() {
      spyOn(Math, "random").and.returnValue(0.3);
      expect(weatherreporter.isStormy()).toBe(false);
    });

});
