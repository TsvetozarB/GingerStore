
let isMenuOpened = false;
const shop = document.getElementsByClassName('shop')[0];

shop.addEventListener('click', (e) => {
    e.stopImmediatePropagation();

    const shopItems = document.getElementsByClassName('shop-item');
    if (!isMenuOpened) {
        for (const iter of shopItems) {
            iter.classList.add("display-flex");
        }
    } else {
        for (const iter of shopItems) {
            iter.classList.remove("display-flex");
        }
    }

    isMenuOpened = !isMenuOpened;
   
});

document.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    
    const shopItems = document.getElementsByClassName('shop-item');
    if (isMenuOpened) {
        
        for (const iter of shopItems) {
            iter.classList.remove("display-flex");
        }
        
        isMenuOpened = false;
    }
});

const burger = document.getElementById('nav-burger');

burger.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    burger.classList.toggle('open');
});