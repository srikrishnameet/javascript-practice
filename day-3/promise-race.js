
const promise1 = new Promise((resolve)=> setTimeout(()=> resolve("slow"),2000));
const promise2 = new Promise((resolve)=> setTimeout(()=> resolve("Fast"),1000));

Promise.race([promise1,promise2]).then((value)=> {
    console.log(value);
})