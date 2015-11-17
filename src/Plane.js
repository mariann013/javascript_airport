function Plane() {

  this.status = "landed";
};

Plane.prototype.isLanded = function () {
  return (this.status === "landed");
};
