//setTimeout with Immediate Invocation (Avoiding Closure Pitfalls)


for (var i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}

for(var i = 0; i < 3; i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },1000);
    }(i));
}

