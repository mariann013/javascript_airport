function Airport(weatherReporter) {

  this.planes = [];

    Airport.prototype.land = function(plane) {
      if (this.isStormy()) {
        throw "Can not land, weather is stormy";
      } else if (this.planes.length < 20) {
          this.planes.push(plane);
          return this.planes;
      } else {
        throw "Can not land, airport is full";
      }
    }

    Airport.prototype.take_off = function(plane) {
      if (this.isStormy()) {
        throw "Can not take off, weather is stormy";
      } else if (this.planes.indexOf(plane) === -1) {
        throw "Can not take off, this plane is not at this airport";
      } else {
          this.planes.splice(this.planes.indexOf(plane), 1);
        return plane;
      }
    }

    Airport.prototype.isStormy = function(WeatherReport) {
      currentWeather = new WeatherReporter;
      return currentWeather.isStormy();
    }
}
