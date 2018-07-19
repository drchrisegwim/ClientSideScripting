// Mixin is a way to combine one or more objects into one given object.

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

//So to combine we use the object.assign function

const person = Object.assign({}, canEat, canWalk);
console.log(person);

// Or we create a Person object as shown below:

function Person2(){

}

Object.assign(Person2.prototype, canEat, canWalk);
const person2 = new Person2();
console.log(person2);

// Note the rest onject in ES6 is denoted by ... as demontsrated below to say regardless on the number of argument possible, it will collect it via sources and add them as an array.
function mixin (target, ...sources){
  Object.assign(target, ...sources);  //... here is the spread operator. ie to spread array element got from rest operator

}

// So to now use mixin we do the following 
mixin(Person2.prototype, canEat, canWalk);

const personMixin = new Person2();
console.log(personMixin);

