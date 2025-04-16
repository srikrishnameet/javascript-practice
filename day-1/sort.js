//The .sort() method is a built-in array method in JavaScript that sorts the elements of an array in place 
// and returns the sorted array. By default, it converts elements to strings and sorts them in ascending
//  order based on their UTF-16 code unit values. However, you can provide a comparison function to 
// customize the sorting logic for numbers, objects, or other data types.



const numbers = [10,5,100,2];
numbers.sort();
console.log(numbers);

//sort in descending order
numbers.sort((a,b)=> a - b);
console.log(numbers);

//sort in ascending order
numbers.sort((a,b)=> b-a);
console.log(numbers);

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
];
people.sort((a,b)=> a.age - b.age);
console.log(people);

const words = ["cat", "elephant", "dog", "zebra"];
words.sort((a,b)=>a.length - b.length);
console.log(words);

people.sort((a,b)=> {
    if(a.age != b.age) return a.age - b.age;
    return a.name.localeCompare(b.name);
})
console.log(people);

const mixed = [3, "apple", 1, "zebra", 2];
mixed.sort((a,b)=>{
    if (typeof a === typeof b) return typeof a === 'string' ? a.localeCompare(b): a - b;
    return typeof a === 'string' ? 1 : -1;
})
console.log(mixed);