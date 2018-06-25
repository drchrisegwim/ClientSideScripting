//This is my first javascript code
console.log('Hello eGlory');  

//Variable declaration
let name = 'Emeks';
console.log(name);

//Constant declaration

const interestRate = 0.3;
//interestRate = 3.4;
console.log(interestRate);

//primitive types

let fullName = 'Christian Egwim';   // string literal
let age = 28;                   // Number literal
let isApproved = true;          // Boolean literal
let firstName                   // undefined literal
let lastname = undefined         // undefined literal
let selectedColor = null;       // null literal  

//N/B JS is a dynamic language meaning its type can be changed dynamically at run time.
let myName = 'Nnaemeka Egwim';
myName = 'foo';

console.log(myName);


// Reference types eg. objects, arrays, functions etc....
// 1. Objects (or object literals)

let person = {
    name: 'Christian Nnaemeka Egwim',
    age: 27
};

console.log(person);

// To access the person properties one way is to use the Dot Notation eg.

person.age = 44;
console.log('Persons new age is:', person.age);


//The other way to access it is by using "Bracket Notation" as shown below:
person['name'] = 'Egwim Junior';
console.log(person['name']);


//2. Arrays...
let selectedColors = ['red', 'blue', 'green'];
console.log(selectedColors);

// To access element of array via it index do the follwing:
console.log(selectedColors[2]);

// Length of array is also dynamic like variable eg:
selectedColors[3] = 'yellow';
selectedColors[4] = 23;
console.log(selectedColors);
console.log(selectedColors.indexOf);
console.log(selectedColors.length);

//Technically an Array is an object.

//Functions is one of the fundamental building blocks in javascript.
function  greet() {
    console.log('Am just a greeting function 0h :)');
}
//Performing a task
function greetWithName(name){
    console.log('Hello',name);
}
greet();
greetWithName('ChristianEgwim')

//A function that calculates a value

function square(number){
    return number * number;
}
let ans = square(2);
console.log(ans);





