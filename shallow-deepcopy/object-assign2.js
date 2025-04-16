const original = {
    id : 1,
    details : {
        color : "blue"
    }
}
const shallowCopy = Object.assign({},original);

shallowCopy.id = 2;
shallowCopy.details.user = "red";

console.log(original);
console.log(shallowCopy);