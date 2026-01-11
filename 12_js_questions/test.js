function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model, topSpeed);
  this.topSpeed = topSpeed;
}

SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
Object.setPrototypeOf(SportsCar.prototype, Car.prototype);

const vrum = new SportsCar("a", "b", 32);
vrum.make = "Ferrari"
vrum.model = "SF90"
console.log(vrum.make);
console.log(vrum.getMakeModel());
console.log(vrum.getTopSpeed());
