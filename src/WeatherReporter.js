function WeatherReporter() {
  WeatherReporter.prototype.isStormy = function() {
    if (Math.random() >= 0.9) {
      return true;
    } else {
      return false;
    }
  }

}
