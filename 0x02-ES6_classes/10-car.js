export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CarSpecie = this.constructor[Symbol.species];
    const clonedCar = new CarSpecie();
    return clonedCar;
  }
}
