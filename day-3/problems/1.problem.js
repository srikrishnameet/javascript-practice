//1. Convert a Callback Function to a Promise

function fetchUser(id,callback){
    setTimeout(()=>{
        if (id <= 0){
            callback(new Error('Invalid userId'),null);
        }
        else {
            callback(null,{id,name :`User${id}`});
        }
    },1000);
}

function fetchUserPromise(id){
    return new Promise((resolve,reject)=>{
        fetchUser(id,(error,user)=>{
            if (error){
                reject(error);
            }
            else {
                resolve(user);
            }
        })
    })
}

fetchUserPromise(1).then(user => console.log(user)).catch(error=> console.log(error.message));
fetchUserPromise(0)
  .then(user => console.log(user))
  .catch(error => console.error(error.message)); 


async function getUser(id) {
    try {
      const user = await fetchUserPromise(id);
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  }
  getUser(1);
