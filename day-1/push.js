//The push() method in JavaScript is a built-in array method that adds one or more elements to the end 
// of an array and returns the new length of the array. It modifies the original array in place 
// (i.e., it’s a mutator method) rather than creating a new array
let fruits = ['apple','banana'];
let newLength = fruits.push('orange');
console.log(fruits);

//multiple elements
let numbers = [1,2];
numbers.push(3,4,5);
console.log(numbers);

let input = [];
function addInput(value){
    input.push(value);
}
addInput('red');
addInput('blue');
console.log(input);

//pushing objects
let users = [{name:'Alice'}];
users.push({name:'Bob'});
console.log(users);


//using with spread operator
let arr1 = [1,2];
let arr2 = [3,4];
arr1.push(...arr2);
console.log(arr1);
