/*
    ========================================
    prototypes in javascript
    ========================================



*/

const Person = function (name, age) {
    this.name = name;
    this.age = age;
};

const person1 = new Person('John', 25);
const person2 = new Person('Jane', 30);

console.log(person1);
console.log(person2);

// adding a method to the prototype of the Person constructor

Person.prototype.greet = function () {
    console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
};

person1.greet();
person2.greet();

// prototypal inheritance

const Student = function (name, age, course) {
    // this = {}
    Person.call(this, name, age);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.name} and I study ${this.course}.`);
};

const student1 = new Student('Mark', 23, 'Computer Science');

student1.introduce();
