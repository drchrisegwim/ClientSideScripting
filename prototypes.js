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