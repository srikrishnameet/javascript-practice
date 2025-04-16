//The .join() method is a built-in array method in JavaScript that combines all elements of an array into
//  a single string. It takes an optional separator (a string) that’s inserted between each pair of elements 
// in the resulting string. If no separator is provided, it defaults to a comma (,). 
// It’s a simple yet powerful way to convert an array into a readable or formatted string.

// Convert an array of numbers into a comma-separated string.

const numbers = [1,2,3,4];
const result = numbers.join();
console.log(result);

const words = ["Hello","world","from",'javascript'];
const sentence = words.join(" ");
console.log(sentence);


const parts = ["user","123","2025"];
const id = parts.join("-");
console.log(id);

const mixed = [42, "apple", true, 3.14];
const result1 = mixed.join("|");
console.log(result1);

const items = [
    {name :"Book", toString:()=> "Book"},
    {name :"Pen",toString:()=> "Pen"}
]
const list = items.join(" and ");
console.log(list);