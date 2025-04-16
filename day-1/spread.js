
//The spread operator (...) is an ES6 feature in JavaScript that expands iterables (like arrays, strings, 
// or Sets) or object properties into individual elements or key-value pairs within a new context—such as
//  an array literal, object literal, or function call. It’s a concise way to copy, merge, or pass data, 
// creating shallow copies without mutating the original.


// const mixed = [1, [2, 3], 4, [5]];
// const flattened = [...mixed[0], ...mixed[1], ...mixed[2], ...mixed[3]];
// console.log(flattened);
const range = [...Array(5).keys()];
console.log(range);

const defaults = { color: "blue", size: 10 };
const overrides = { size: 15, weight: 5 };
const settings = {...defaults,...overrides};
console.log(settings);

//convert the map into arr [key,value] pair how can i do that
const map = new Map([["a",1],["b",2]]);
const entries = [...map];
console.log(entries);


const numbers = [1,2,3,4,5];
const withOutThree = [...numbers.filter(num => num !== 3)];
console.log(numbers);

const unique = new Set([1,2,3]);
const extended = [...unique,4,5];
console.log(extended);

const nested = [[1,2],[3,4]];
const copy = [...nested];
copy[0][0] = 99;
console.log(copy);
console.log(nested);