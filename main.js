import { menuArr } from "./js/menuArr.js";

const mainMenu = document.getElementById('mainMenu');
let footerOrders = document.getElementById('footer__orders');
const form = document.getElementById('form');


let totalPrice = 0;


function renderOut(arr) {
    let getHtml = ``;
    arr.map(function (elem) {
        getHtml += `
            <li class="menu__inner">
                <img src="img/${elem.img}" alt="" class="menu__img">
                    <div class="menu__title">
                        <h2>${elem.name}</h2>
                        <p>${elem.ingredients}</p>
                        <h3>$${elem.price}</h3>
                    </div>
                    <button id="${elem.id}" class="menu__add"><p>+</p></button>
            </li>`
    });
    mainMenu.innerHTML += getHtml;
};

renderOut(menuArr);

document.addEventListener('click', function (e) {
    if (e.target.id === 'pizza') {
        footerOrders.innerHTML += `
        <li class="order" data-price="${menuArr[0].price}">
            <h2>${menuArr[0].name} <a id="remove">remove</a></h2>
            <h3>$${menuArr[0].price}</h3>
        </li >
        `
        totalPrice += menuArr[0].price;
        document.getElementById('footer').style.display = 'block';
        document.querySelector('.ready').style.display = 'none';
    } else if (e.target.id === 'burger') {
        footerOrders.innerHTML += `
        <li class="order" data-price="${menuArr[1].price}">
            <h2>${menuArr[1].name} <a id="remove">remove</a></h2>
            <h3>$${menuArr[1].price}</h3>
        </li >
        `
        totalPrice += menuArr[1].price;
        document.getElementById('footer').style.display = 'block';
        document.querySelector('.ready').style.display = 'none';
    } else if (e.target.id === 'beer') {
        footerOrders.innerHTML += `
        <li class="order" data-price="${menuArr[2].price}">
            <h2>${menuArr[2].name} <a id="remove">remove</a></h2>
            <h3>$${menuArr[2].price}</h3>
        </li >
        `
        totalPrice += menuArr[2].price;
        document.getElementById('footer').style.display = 'block';
        document.querySelector('.ready').style.display = 'none';
    }

    if (e.target.id === 'remove') {
        const orderItem = e.target.closest('.order');
        orderItem.remove(); 
        totalPrice -= orderItem.dataset.price;
    }
    document.getElementById('price').innerHTML = `$${totalPrice}`; 

    if(e.target.id === 'complete') {
        document.querySelector('.pop__up').style.display = 'block';
    }
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    document.getElementById('price').innerHTML = `$${totalPrice = 0}`;
    document.querySelector('.ready').style.display = 'block';
    document.querySelector('.pop__up').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    const value = document.getElementById('name').value 
    document.getElementById('order__name').innerHTML = value;
    footerOrders.innerHTML = ``;
})












