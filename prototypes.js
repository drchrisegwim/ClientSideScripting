function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw!!!');
    };
}

const circle = new Circle(2);
console.log(circle);


// Property descriptor 

let person = {name: 'Christian'};

Object.defineProperty(person,'name',{
    writable: false,
    enumerable:false
});

// So if I try to modify the value of name property. It will not because of the writable set to fal
person.name = 'Blessing';
console.log(person);

console.log(Object.keys(person));

//Constructor Prototypes

function Square(radius){
    // Instance members
    this.radius = radius;
    
}

// Prototype members 
Square.prototype.draw = function (  ) {
    console.log('draw');
}

const sq1 = new Square(3);
const sq2 = new Square(2);

Square.prototype.toString = function(){
    return ' Square with radius ' + this.radius;
}


// Iterating over instance member against prototype members.

// Returns instance members
console.log( "This is: " + Object.keys(sq1));

// Returns all members (Instance(AKA OwnProperty) + prototype)
for (let key in sq1) console.log(key);



























// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:

let obj = {};
Object.getPrototypeOf(obj); 

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,
    enumerable: false
});

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function() {}

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) {}