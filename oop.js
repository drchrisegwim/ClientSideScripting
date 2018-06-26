console.log('Hello Oop!!!')

// Objects
const circle = {
    radius: 2,                 //here radius and locatio are properties.
    location: {
        x: 1,
        y: 2
    },
    draw: function(){          // here draw is a method
        console.log('draw');
    }
};

//calling the object:
circle.draw();

//Two ways to define an object is by 1. factories and by 2. constructors:

// Factory function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw from create circle!');
        }
    };
}

const myCircle = createCircle(1);
myCircle.draw();


// Constructor Function
//The "This" keyword is basically a reference to the object referencing this piece of code.
// Constructor in Js starts with Capital letter of its object and does not have return keyword yet it returns its properties and functions.

function Circle (radius){
     this.radius = radius;
     this.draw = function(){
         console.log('drawing from constructor');
     }
}

const anotherCircle = new Circle(5);
console.log("This is to display the call to the constructor",anotherCircle);


// Every object in Js has a constructor property.
//Functions are actually objects in Js.

// Value vs Reference types.

let x = 10;
let y = x;

x = 20;
console.log(y);
console.log(x);

// from the above code you can see that the value of y is independent of that of x.
// But if we want both x and y value to be dependent then:

let xx = { value: 10};
let yy = xx;

xx.value = 20;

console.log('The yy value is:',yy);
console.log('The xx value is:',xx);

//Primitives are copied by their values 

let number = 10;

function increase(number){
    number++;
}

increase(number);

console.log(number);  // Ans is 10 cos of copy by value.


//while objects by their reference:
let obj = {value:10};

function increase(obj){
 obj.value++;
}

increase(obj);
console.log(obj);


//Adding or removing properties from an object

//Adding
function NewCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw new circle!');
    }
}

const circ = new NewCircle(5);

circ.location = {x: 2};

//Removing/Deleting

delete circ.radius;
