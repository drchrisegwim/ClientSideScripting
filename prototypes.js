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