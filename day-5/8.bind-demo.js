const player1 = {
    firstName :'virat',
    lastName : 'Kohli',
    numberToBat : 3,
    canBowl : false,
    getDetails : function () {
        return `${this.firstName} ${this.lastName} comes at No. ${this.numberTOBat}`;
    }
}

const obj = player1.getDetails;
console.log(obj());

let x = obj.bind(player1);
console.log(x());