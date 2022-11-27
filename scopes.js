/*
    ========================================
    Scopes in JavaScript
    ========================================

    Scopes are the context in which a variable is declared. In JavaScript, there are two types of scopes:

    1. Global Scope
    2. Local Scope
*/

// Nested function scope

let a = 10;

function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}

outer(); // 10 20 30

// Nested functions can access variables from outer scopes but not vice versa
