async function fetchData(){
    const promise = new Promise((resolve)=>{
        setTimeout(()=> resolve("Data !",1000));
    });
    const result = await promise;
    console.log(result);
}
