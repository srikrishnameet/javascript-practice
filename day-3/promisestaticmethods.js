Promise.resolve(42).then((value)=>{
    console.log(value);
});

Promise.reject('Oops!').catch((error)=>{
    console.log(error);
})