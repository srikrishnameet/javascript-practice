let iphone = {
    name:'iphone',
    price:125000,
    description:'The new apple iphone 14 pro max',
    rating:4.9,
    display:function(){
        console.log('first display',this);
    }
}

iphone.display();