/*
    ========================================
    Closure in JavaScript
    ========================================

    A closure is a function that has access to the parent scope, even after the parent function has closed.
*/

function outer() {
    let a = 10;
    function inner() {
        console.log(a);
        a++;
    }
    // return inner function which stores the value of a in its closure
    return inner;
}

const innerFunc = outer();
innerFunc(); // 10
innerFunc(); // 11

// The inner function has access to the variable a even after the outer function has closed.
