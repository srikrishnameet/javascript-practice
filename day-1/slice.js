//The .slice() method is a built-in method for arrays (and strings) in JavaScript that returns a shallow 
// copy of a portion of an array or string, based on specified start and end indices. It doesn’t modify 
// the original array or string—it creates a new one. Think of it as a way to “cut out” a section of the 
// data you’re working with.


const numbers = [0,1,2,3,4];
const subArray = numbers.slice(1,4);
console.log(subArray);

const fruits = ["apple","banana","ornage"];
const fruitscopy = fruits.slice();
console.log(fruitscopy);

