// create an object called car
let car = {
    type: "Sports Car",
    model: "Ferrari 488 GTB",
    color: "Red"
};

//ise typeof to check the type of the object and log it
console.log(typeof car); //output: object

// update the type property to "Toyota" and log the upfated object
car.type = "Toyota";
console.log(car); //output: { type: 'Toyota', model: 'Ferrari 488 GTB', color: 'Red' }

// add new property wheels with the value 4
car.wheels = 4;
console.log(car); //output: { type: 'Toyota', model: 'Ferrari 488 GTB', color: 'Red', wheels: 4 }
