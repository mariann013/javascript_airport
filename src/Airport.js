function Airport() {
  var planes = [];
  Airport.prototype.land = function(plane) {
    planes.push(plane);
    return planes;
  }

  Airport.prototype.take_off = function(plane) {
    return planes.pop();
  }

}
