/*
    ========================================
    In javascript, we determine the number of arguments passed to a function by using the arguments object.
    ========================================
*/

function howManyArgs(...args) {
    return args.length;
}

function howManyArgs2() {
    return arguments.length;
}

console.log('How many args', howManyArgs(1, 2, 3, 4, 5));
console.log('How many args', howManyArgs2(1, 2, 3, 4, 5));
