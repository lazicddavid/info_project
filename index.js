/*const car = {
  brand: "BMW",
  speed: 120,

  accelerate() {
    this.speed += 35;
  },

  brake() {
    this.speed -= 30;
  },

  getSpeed() {
    return this.speed;
  },
};
car.accelerate();
car.accelerate();
car.brake();

console.log(car.getSpeed());*/

const car = {
  brand: "volvo",
  speed: 190,
  maxSpeed: 200,

  accelerate() {
    this.speed += 20;
  },

  getSpeed() {
    return this.speed;
  },

  speedLimit() {
    if (this.speed >= this.maxSpeed) {
      console.log("slow!");
    }
  },
};

car.accelerate();
car.speedLimit();
car.speedLimit();
car.speedLimit();
car.speedLimit();
