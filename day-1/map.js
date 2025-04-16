

let numbers = [1,2,3,4,5];
let doubled = numbers.map((num)=>num * 2);
console.log(doubled);

let words = ['apple', 'banana', 'orange'];
let captaliazeWords = words.map((word)=> word.charAt(0).toUpperCase()+ word.slice(1));
console.log(captaliazeWords);

let users = [
    {name : 'Alice',age:25},
    {name :'Bob', age:30},
    {name:'Charlie', age:35},
]

let names = users.map(user =>user.name);
console.log(names);

let numbers1 = [1, 2, 3, 4, 5];
let labeled = numbers1.map(num => num % 2 === 0? `${num} Even` : `${num} Odd`);
console.log(labeled);

let nested = [[1,2],[3,4],[5,6]];
let doubleNested = nested.map(subArray => subArray.map(num => num * 2));
console.log(doubleNested);

let letters = ['a','b','c'];
let indexed = letters.map((letter,index)=> `${letter}${index}`);
console.log(indexed);

let products = [
    {name:'tshirt',price:20,quantity:2},
    {name:'pants',price:30,quantity : 1},
    {name: 'shoes',price:50,quantity:3},
]

let totals = products.map(product =>({
    name : product.name,
    price:product.price * product.quantity
}));

console.log(totals);

let numbers3 = [1,2,3,4,5,6];
let squaredEvents = numbers3.filter(num => num % 2 === 0).map(num => num * num);
console.log(squaredEvents);


let students = [
    { name: 'Alice', grades: [85, 90, 88] },
    { name: 'Bob', grades: [78, 82, 80] }
];
let averages = students.map(student =>({
    name:student.name,
    average:student.grades.reduce((sum,grade)=> sum + grade)/student.grades.length
}))
console.log(averages);