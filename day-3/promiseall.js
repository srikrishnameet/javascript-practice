
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve)=> setTimeout(()=> resolve(2),1000));
const promise3 = Promise.resolve(3);
const promise4 = Promise.reject("Error 4");
Promise.all([promise1,promise2,promise3,promise4]).then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.log(error);
})