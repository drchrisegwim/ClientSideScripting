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

