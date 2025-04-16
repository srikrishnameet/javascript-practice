class Product {
    #name;
    #price;
    description;
    constructor(name,price,description){
        this.#name = name;
        this.#price = price;
        this.description = description;
    }
    display(){
        console.log(this.#name,this.description,this.#price);
    }
    
    set Name(name){
        if (typeof(name) !== 'string'){
            console.log('Invalid name')
            return;
        }
        this.#name = name;
    }

    set Price(price){
        if (price < 0) return;
        this.#price = price;
    }
    get getName(){
        return this.#name;
    }
}

const p = new Product("bag",100,"a gucci bag");


p.Name='Bag'
p.Price='100000';
console.log(p);
console.log(p.getName);
p.display();