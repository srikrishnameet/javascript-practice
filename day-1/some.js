//The .some() method is a built-in array method in JavaScript that tests 
// whether at least one element in an array passes a condition defined by a
//  callback function. It returns a boolean value: true if at least one
//  element satisfies the condition, and false if none do. It’s like asking,
//  “Does this array have at least one thing that matches what I’m looking
//  for?” It stops checking as soon as it finds a match (short-circuiting),
//  making it efficient for large arrays when you only need to confirm
//  existence.

const numbers = [1,3,5,8,9];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);

const people = [
    { name: "Alice", age: 16 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 15 }
];
const hasAdult = people.some(person => person.age > 18);
console.log(hasAdult);

const inputs = ["hello", "test@example.com", "world"];
const hasEmail = inputs.some(input => input.includes("@") && input.includes("."));
console.log(hasEmail);