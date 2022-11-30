/*
    ========================================
    Iterables and Iterators
    ========================================

    Iterables are objects that implement the Symbol.iterator method. This method returns an iterator object that defines how to access values from the object. The iterator object implements the next() method, which returns the next value in the sequence. The next() method returns an object with two properties: value and done. The value property contains the next value in the sequence, and the done property is a boolean that indicates whether the iterator is finished returning values.
*/

// Iterables

const arr = [1, 2, 3, 4, 5];

// traditional loop

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for of loop

for (let value of arr) {
    console.log(value);
}

// for of loop with strings

const str = 'Hello';

for (let value of str) {
    console.log(value);
}

// for of loop with maps

const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
]);

for (let value of map) {
    console.log(value);
}

// for of loop with sets

const set = new Set([1, 2, 3, 4, 5]);

for (let value of set) {
    console.log(value);
}

// for of loop with arguments

function sum() {
    let total = 0;

    for (let value of arguments) {
        total += value;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));

// for of loop with DOM elements

// const divs = document.querySelectorAll('div');

// for (let div of divs) {
//     div.addEventListener('click', function () {
//         console.log(this.innerHTML);
//     });
// }

// iterators

const obj = {
    [Symbol.iterator]: function () {
        let step = 0;

        return {
            next: function () {
                step++;

                if (step === 1) {
                    return { value: 'Hello', done: false };
                } else if (step === 2) {
                    return { value: 'World', done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
        };
    },
};

for (let value of obj) {
    console.log(value);
}
