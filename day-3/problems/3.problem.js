function fetchUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (id <= 0) reject(new Error(`Invalid userId ${id}`));
            resolve({id,name:`User${id}`});
        },1000);
    })
}

const userPromise = [fetchUser(1),fetchUser(2),fetchUser(0)];

Promise.all(userPromise).then(user => {
    console.log('All users:',user);
}).catch(error => {
    console.log('Error',error.message);
});

async function  getAllUsers() {
    try {
        const users = await Promise.all([fetchUser(1),fetchUser(2),fetchUser(3)]);
        console.log('All users',users);
    } catch (error) {
        console.log('Error',error.message);
    }
}
getAllUsers();