function Plane() {

  this.landed = true;
};

Plane.prototype.isLanded = function () {
  return (this.landed === true);
};

Plane.prototype.land = function () {
  this.landed = true;
};

Plane.prototype.flying = function () {
  this.landed = false;
};
