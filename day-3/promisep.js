const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const randomNumber = Math.random();
        if (randomNumber > 0.5){
            resolve(randomNumber);
        }
        else{
            reject("Number too small");
        }
    },1000);
})

myPromise.then(
    (result)=>{
        console.log('success',result);
    })
    .catch((error)=>{
        console.log('Error',error);
    })
    .finally(()=>{
        console.log("Done!");
});