
function createPromise(){
    return new Promise(function executor(resolve,reject){
        console.log('resolved promise');
        resolve("Done");
    })
}

setTimeout(function process(){
    console.log('timer completed');
},0);

let p = createPromise();

p.then(function fullfillHandler(value){
    console.log('we fulfilled with a value',value);
},function rejectHandler(){})

console.log('ending');