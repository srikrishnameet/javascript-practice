

function exampleBlockScope(){
    if(true){
        let localVariable = 'I am block-scope with let';
        const constBlockVar = 'I am block-scope with const';
    }

    console.log(localStorage);//throws erroe
    console.log(constBlockVar);//throws error
}