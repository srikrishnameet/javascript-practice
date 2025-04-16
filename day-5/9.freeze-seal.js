let arr = [1,2,3,4];
console.log(typeof arr);
let obj = {x:10,y:20};

Object.freeze(obj);
obj.z = 30;
console.log(obj);

//seal 
let obj1 = {x:10,y:20};
obj1.x = 30;
obj1.z = 99;
console.log(obj1);