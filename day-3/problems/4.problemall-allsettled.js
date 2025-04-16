
function fetchYUsersData(id){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            if (id == 2) reject(new Error(`Failed to Id ${id}`));
            resolve({id,data:`Data ${id}`});
        })
       
    },1000)
}

Promise.all([fetchYUsersData(1),fetchYUsersData(2),fetchYUsersData(3)]).
then(results => console.log('promise all returns',results))
.catch(error => console.error('promise all Error'));

Promise.allSettled([fetchYUsersData(1),fetchYUsersData(2),fetchYUsersData(3)])
.then(results => console.log('promise allsettled results',results))
.catch(error=>console.error('Promise all settled error') );
