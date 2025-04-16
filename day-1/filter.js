let numbers = [1,2,3,4,5,6,];
let evens = numbers.filter(num => num % 2 == 0);
console.log(evens);

let words = ['apple','banana','grape','pineapple'];
let longWords = words.filter(word => word.length > 5);
console.log(longWords);

let users = [
    {name :'Alice',age:25},
    {name :'Bob',age:35},
    {name:'Charlie',age:40}
];

let over30 = users.filter(user => user.age > 30);
console.log(over30);

let number1 = [1,2,3,4,5,6,8];
let filtered = number1.filter(num => num % 2 == 0 && num > 3);
console.log(filtered);

let letters = ['a', 'b', 'c', 'd', 'e'];
let addIndices = letters.filter((letter,index)=> index % 2 != 0);
console.log(addIndices);

let nested = [[1, 2, 3], [4, 6, 8], [3, 5, 7]];
let hasBigNumber = nested.filter(subArray => subArray.some(num => num > 5));
console.log(hasBigNumber);

let products = [
    { name: 'Shirt', price: 20, inStock: true },
    { name: 'Pants', price: 60, inStock: true },
    { name: 'Shoes', price: 45, inStock: false },
    { name: 'Hat', price: 15, inStock: true }
];

let inStockFilter = products.filter(product => product.inStock && product.price < 50);
console.log(inStockFilter);

let students = [
    { name: 'Alice', grades: [85, 92, 88] },
    { name: 'Bob', grades: [78, 82, 80] },
    { name: 'Charlie', grades: [95, 88, 90] }
];

let gradeFilter90 = students.filter(student => student.grades.some(grade => grade > 50));
console.log(gradeFilter90);