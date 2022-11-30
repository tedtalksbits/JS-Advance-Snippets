/*
    ========================================
    classes in javascript
    ========================================


*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old.`
        );
    }
}

const person1 = new Person('John', 25);

person1.greet();

// prototypal inheritance

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.name} and I study ${this.course}.`);
    }
}

const student1 = new Student('Mark', 23, 'Computer Science');

student1.introduce();
student1.greet();

// create a db using class syntax

class DB {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.push(record);
    }

    get(id) {
        return this.data.find((record) => record.id === id);
    }

    getAll() {
        return this.data;
    }

    delete(id) {
        this.data = this.data.filter((record) => record.id !== id);
    }
}

const db = new DB();

class User extends DB {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
}

const user = new User('John', 25);

user.add({ id: 1, name: 'John', age: 25, course: 'Computer Science' });

console.log(user.get(1));
