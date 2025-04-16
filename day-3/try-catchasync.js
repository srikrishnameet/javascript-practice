async function fetchData() {
    try {
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=> reject("Failed!"),1000);
        });
        const result = await promise;
    } catch (err) {
        console.log(err);
    }
}

fetchData();