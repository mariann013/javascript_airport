function Airport() {

  var planes = [];

    Airport.prototype.land = function(plane) {
      if(planes.length < 20) {
      planes.push(plane);
      return planes;
    }
    else {
      throw "Can not land, airport is full";
    }
    }

    Airport.prototype.take_off = function(plane) {
      return planes.pop();
    }

}
