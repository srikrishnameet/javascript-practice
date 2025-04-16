const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Error !");
const promise3 = new Promise((resolve)=> setTimeout(()=> resolve(3),1000));

Promise.allSettled([promise1,promise2,promise3]).then((results)=>{
    console.log(results);
});