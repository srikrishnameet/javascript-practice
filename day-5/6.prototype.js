

function Product(n){
    this.name = n;
}

let d = new Product('iphone');
Product.prototype.display = function(){console.log('name of the product is',this.name)};
d.display();