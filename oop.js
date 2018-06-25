console.log('Hello Oop!!!')

// Objects
const circle = {
    radius: 2,                 //here radius and locatio are properties.
    locatiom: {
        x: 1,
        y: 2
    },
    draw: function(){          // here draw is a method
        console.log('draw');
    }
};

//calling the object:
circle.draw();