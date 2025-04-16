const promise1 = Promise.reject('Error 1');
const promise2 = new Promise((resolve)=>setTimeout(()=> resolve('Success'),1000));

Promise.any([promise1,promise2]).then((value)=>{
    console.log(value);
})