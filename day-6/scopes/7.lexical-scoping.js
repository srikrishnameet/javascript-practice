//The scope chain in JavaScript follows a principle known as lexical (or static) scoping.

//Lexical scoping means that the scope of a function is determined by where the function is declared, not where it's called.

var a = 'iam in global';

function firstFunction(){
    var a = 'iam in first function';

    function secondFunction(){
        console.log(a);
    }
    secondFunction();
}

firstFunction();