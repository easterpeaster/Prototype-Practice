// create a class with constructor with properties
class Car{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

// add a method called "getDescription" that returns a string containing info
// about the car
    getDescription() {
        return `This car is a ${this.make} ${this.model}. It was release in ${this.year}.`;
    }
}
const TeslaCar = new Car('Tesla', 'Model S', 2018);
console.log(TeslaCar.getDescription());

// create a subclass of Car and add a new property called "range"
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }

    getInfo() {
        return `${this.getDescription()} It has a range of ${this.range} miles`
    }
}

// override the getDescrpition

// create an instance of ElectricCar and call it.
const firstECar = new ElectricCar('Tesla', 'Model S', 2019, 300);
console.log(firstECar.getInfo());
