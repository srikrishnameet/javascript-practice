//var is a function scoped variables declared with var are scopes scoped to the nearest enclosing functions.
//let and const are block scoped decalred with let are scopes to the nearest enclosing block 

function myFunction(){
    if (true){
        var localVariable = 'I am in block scope';
        let blockVariable = 'I am also in block scope';

    }
    console.log(localVariable);
    console.log(blockVariable); // throws undefined
}

myFunction();
