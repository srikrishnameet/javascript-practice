var globalVariable = "I am global";

function outerFunction(){
    var outerVariabe = 'I am in outer scope';

    function innerFunction(){
        var innerVariable = 'I am in inner scope';
        console.log(innerVariable);
        console.log(outerVariabe);
        console.log(globalVariable);
    }
    innerFunction();

}

outerFunction();