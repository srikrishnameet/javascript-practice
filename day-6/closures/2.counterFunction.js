//Problem: Create a counter function using a closure that maintains a private count and provides methods to increment,
//  decrement, and get the count.

function createCounter(){
    let count = 0; //private varibale

    return {
        increment:()=> ++count,
        decrement : ()=> --count,
        getCount : () => count
    }
}

//Emphasize that count is private and only accessible through the returned methods.

//Explain the closure: the returned object’s methods retain access to count.

//Discuss why this is better than a global variable (prevents unintended modifications).



const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());



