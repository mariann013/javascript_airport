function Airport(weatherReporter) {

  var planes = [];

    Airport.prototype.land = function(plane) {
      if (this.isStormy()) {
        throw "Can not land, weather is stormy";
      } else if (planes.length < 20) {
          planes.push(plane);
          return planes;
      } else {
        throw "Can not land, airport is full";
      }
      }

    Airport.prototype.take_off = function(plane) {
      return planes.pop();
    }

    Airport.prototype.isStormy = function(WeatherReport) {
      currentWeather = new WeatherReporter;
      return currentWeather.isStormy();
    }
}
