//Implement a function that caches results of expensive computations to avoid redundant calculations (memoization).



function memoization(fn){
    const cache = {};
    return function (...args){
        const key = JSON.stringify(args);
        if (key in cache){
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    }
}

function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n-1);
}

const memoFactorial = memoization(factorial);
console.log(memoFactorial(5));
console.log(memoFactorial(5));
