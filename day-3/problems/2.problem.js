//2. Chaining Promises



function fetchUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (id <= 0) reject(new Error('Invalid user Id'));
            resolve({id,name:`User${id}`});
        },1000);
    })
}

function fetchUserPost(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([{postId:1,userId},{postId:2,userId}]);
        },1000);
    })
}


function fetchComments(postId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([`comments1 on Post${postId}`,`Commnets2 on Post${postId}`]);
        },1000);
    })
}

fetchUser(1).then(user => {
    console.log('user',user);
    return fetchUserPost(user.id);
}).then(posts => {
    console.log('posts',posts);
    return fetchComments(posts[0].postId);
}).then(comments =>{
    console.log('comments',comments);
    
}).catch(error => {
    console.log('Error',error.message);
})