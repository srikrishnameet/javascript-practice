//The .find() method is an array method in JavaScript that returns the first element in an array
//  that satisfies a condition defined by a callback function. If no element meets the condition,
//  it returns undefined. Think of it as a search tool: it stops as soon as it finds a match
//  (short-circuiting), making it efficient when you only need the first result.
const numbers = [1,3,4,7,8];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

const people = [
    { name: "Alice", age: 16 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 15 }
  ];
const person18 = people.find(person => person.age > 18);
console.log(person18);

const config = { threshold: 10 };
const numbers1 = [5, 8, 12, 3];
const firstAboveThreshold = numbers1.find(function (num){
    return num > this.threshold;
},config);
console.log(firstAboveThreshold);