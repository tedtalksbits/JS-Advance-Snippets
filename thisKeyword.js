/*
    ========================================
    This Keyword in JavaScript
    ========================================

    The this keyword refers to the object it belongs to.
    
    console.log(this); // refers to the global object

*/

const person = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log('Hello, my name is ' + this.name);
    },
};

person.greet(); // this refers to person object

// using call method to specify the context of this keyword
function sayMyAge() {
    console.log('My age is ' + this.age);
}

sayMyAge.call(person); // this refers to person object

// using apply method to specify the context of this keyword
function sayMyName() {
    console.log('My name is ' + this.name);
}

sayMyName.apply(person); // this refers to person object

// using bind method to specify the context of this keyword

function sayMyNameAndAge() {
    console.log('My name is ' + this.name + ' and my age is ' + this.age);
}

sayMyNameAndAge.bind(person)(); // this refers to person object

// using arrow functions to specify the context of this keyword

const person2 = {
    name: 'John',
    age: 30,
    greet: () => {
        console.log('Hello, my name is ' + this.name);
    },
};

person2.greet(); // this refers to global object because arrow functions do not have their own this keyword

// using arrow functions to specify the context of this keyword

const person3 = {
    name: 'May',
    age: 30,
    greet: function () {
        const inner = () => {
            console.log('Hello, my name is ' + this.name);
        };
        inner();
    },
};

person3.greet(); // this refers to person3 object

// What is the difference between call, apply and bind methods?

// call method - call method calls a function with a given this value and arguments provided individually
// apply method - apply method calls a function with a given this value and arguments provided as an array
// bind method - bind method creates a new function that, when called, has its this keyword set to the provided value
