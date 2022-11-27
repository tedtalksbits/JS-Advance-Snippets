/*
    ========================================
    Function Currying in JavaScript
    ========================================

    Function currying is a technique of evaluating a function with multiple arguments, into a sequence of functions with single argument.

    eg - sum(2, 3, 1) => 6 (3 arguments)
    curriedSum(2)(3)(1) => 6 (3 functions)

*/

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(2, 3, 1));

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            };
        };
    };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(1));
