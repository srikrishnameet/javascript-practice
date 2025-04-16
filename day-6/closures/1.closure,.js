//In JavaScript, a closure is formed when a function is declared within another function, and the inner function 
// has access to the variables of the outer function.


function outerFunction(){
    var outerVariable = ' Im in outerFUnction';

    function innerFunction(){
        console.log(outerVariable);
    }

    return innerFunction;
}

var closure = outerFunction();
closure();
