//shallow copy

const original = {
    name :"Alice",
    info : {
        age: 25,
        city:"New york"
    }
};

const shallowCopy = {...original};

shallowCopy.name = "Bob";
shallowCopy.info.age =  30;
console.log(original);
console.log(shallowCopy);
//name is a primitive (string), so it’s fully copied.

//info is an object, so only its reference is copied. 
// Modifying shallowCopy.info.age changes the original info object because they share the same
//  reference

