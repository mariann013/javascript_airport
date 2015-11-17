function Plane() {

  this.status = "flying";
};

Plane.prototype.isFlying = function () {
  return this.status === "flying";
};
