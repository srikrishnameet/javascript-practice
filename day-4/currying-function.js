//non -curried function

function add(a,b,c){
    return a + b + c;
}

function curriedAdd(a){
    return function (b){
        return function(c){
            return a + b + c;
        }
    }
}
const add1 = curriedAdd(1);
const add1andadd2 = add1(2);
console.log(add1andadd2(3));

console.log(curriedAdd(1)(2)(3)); // 6