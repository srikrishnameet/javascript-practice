//write a function that curries any given function.
//  Here’s a generic implementation:


function curry(fn){
    return function curried(...args){
       
        if (args.length >= fn.length){
            return fn(...args);
        }
        return (...nextArgs) => curried(...args,...nextArgs);
    }
}

function multiply(a,b,c){
    return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4));

//Mention libraries like Lodash or Ramda that provide currying utilities (_.curry).

//Discuss trade-offs: Currying can make code more modular but may add complexity for simple use cases.


