function download(url){
    console.log('started downloading content from',url);
    return new Promise(function exec(resolve,reject){
        let content = 'abcd';
        resolve(content);
    })
}

let x = download('www.google.com');
x.then(function fullfillHandler(value){
    console.log('content downloaded is 1',value);
    },
    function rejectHandler(value){
        console.log('rejected with',value);
    }
)
.then(
    function newFullfillHandler(value){
        console.log('value from chainde then promise',value);
    }
)