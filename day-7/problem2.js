//implement a throttle function

function throttle(func,limit){
    let lastCall = 0;
    return function(...args){
        const now = Date.now();
        if (now - lastCall >= limit){
            func.apply(this,args);
            lastCall = now;
        }
    }
}

const logscroll = throttle (()=>{
    console.log('Scroll position',window.scrollY);
},1000);

window.addEventListener('scroll',logscroll);