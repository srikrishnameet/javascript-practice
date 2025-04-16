//Block scope in JavaScript is like a series of nested boxes within a larger container, each with its own set of variables.
//Unlike global and local scopes, which are defined by functions or global context, block scope is created within specific 
// code blocks, such as conditional statements (if, else, switch) and loops (for, while).

if (true){
    let blockVariable = 'Iam in block scope';
    console.log(blockVariable);
}
//console.log(blockVariable);