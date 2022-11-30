/*
    ========================================
    generators in javascript
    ========================================

    Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
*/

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

for (const iterator of gen) {
    console.log(iterator);
}
