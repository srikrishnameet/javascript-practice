/**
 * A Pure Function is a function that:
Always produces the same output for the same input (deterministic).

Has no side effects (e.g., it doesn’t modify external state, 
make network calls, or alter global variables).


 */

function add(a,b){
    return a+b;
}

console.log(add(2,3));
console.log(add(2,3));