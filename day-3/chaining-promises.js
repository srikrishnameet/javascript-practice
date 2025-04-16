const fetchData = new Promise((resolve)=> {
    setTimeout(()=> resolve("Data fetched"),1000);
});

fetchData.then((data)=> {
    console.log(data);
    return new Promise((resolve)=>{
        setTimeout(()=> resolve('Processed '+data),1000);
    });
}).then((processData)=>{
    console.log(processData);
})
.catch((error)=>{
    console.log('Error',error);
})