const original = {
    name:"Alice",
    info : {
        age: 25,
        city:"New York"
    }
};

//Deep copy with json Methos

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.name = "Bob";
deepCopy.info.age =  30;

console.log(original);
console.log(deepCopy);

//JSON.stringify() converts the object to a string, losing all references.

//JSON.parse() rebuilds a new object from the string, creating independent copies of all nested data.

