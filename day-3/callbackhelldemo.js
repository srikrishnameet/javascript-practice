

function download (url,cb){
    console.log('started downloading from the url',url);
    setTimeout(function exec(){
        console.log('completed downloading after 5 s');
        const content = 'abcdef';
        cb(content);
        cb(content);
    },5000)
}

download('www.google.com',function processDownload(data){
    console.log('downloded data is data');

});

//here callback hell is calling 2 times
//we are dealing with promises

function download1(url){
    console.log('started downloading content from',url);
    return new Promise(function exec(resolve,reject){
        setTimeout(function p(){
            console.log('completed the downloading data in 5 sec');
            const content = 'abcdef';
            resolve(content);
            resolve(content);
        },1000);
    })
}

const x = download1('www.google.com');
x.then(function fullfillHandler(value){
    console.log('content downloaded is',value);
})
