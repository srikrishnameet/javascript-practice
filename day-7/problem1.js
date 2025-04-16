//Implement a Debounce Function

function debounce(fn,delay){
    let timeOutId;
    return function(...args){
        clearInterval(timeOutId);
        timeOutId = setTimeout(()=>{
            fn.apply(this,args);
        },delay);
    }
}


const search = debounce((query)=>{
    console.log('search query',query);
},1000);

search('a');
search('ap');
search('app');

