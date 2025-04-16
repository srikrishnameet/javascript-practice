class Product {
    name;
    price;
    description;
    constructor(name,price,description){
        this.name = name;
        this.price = price;
        this.description = description
    }
    display(){
        return `${this.name} ${this.price} ${this.description}`
    }
}

const p = new Product("bag",100,"a gucci bag");
console.log(p);