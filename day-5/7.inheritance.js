class Category {
    constructor(c){
        this.category = c;
    }

}

class Product extends Category{
    constructor(name,category){
        super(category);
        this.name = name;
    }
}

const p = new Product("iphone","electronics");
console.log(p);