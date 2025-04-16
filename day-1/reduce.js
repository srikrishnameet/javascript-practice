let numbers = [1,2,3,4,5];

let sum = numbers.reduce((acc,curr)=>acc+curr,0); // 0 is intialvalue
console.log(sum);

//product numbers
let number = [2,3,4];
let product = number.reduce((acc,curr)=> acc * curr,1);
console.log(product);

//concat strings
let words = ["hello","world","!"];
let sentence = words.reduce((acc,curr) => acc + ' ' + curr,'');
console.log(sentence);


//counting occurences
let numbers1 = [1, 2, 2, 3, 1];
let counts = numbers1.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0)+1;
    return acc;
},{});
console.log(counts);

//Flattening an Array
let nested = [[1,2],[3,4],[5,6]];
let flat = nested.reduce((acc,curr)=> acc.concat(curr),[]);
console.log(flat);

let numbers2 = [3, 1, 4, 1, 5];
let max = numbers2.reduce((acc,curr)=> Math.max(acc,curr));
console.log(max);

let people = [
    {name :'Alice',age:25},
    {name :'Bob',age:30},
    {name :'Charlie',age:25},

]
let groupByAge = people.reduce((acc,curr)=>{
    acc[curr.age] = acc[curr.age] || [];
    acc[curr.age].push(curr);
    return acc;
},{});
console.log(groupByAge);
