let iphone = {
    name: 'iphone',
    price: 125000,
    description: 'The new apple iphone 14 pro',
    rating: 4.9,
    display: function() {
        let iphoneRed = {
            name: 'iphone red',
            price: '110000',
            print: () => {
                console.log(this);
            }
        }
        iphoneRed.print();
    }
}

iphone.display();