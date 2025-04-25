const storege = JSON.parse(localStorage.getItem('carts')) || [];
const carts = document.querySelector('.carts');
const countsCart = document.querySelector('.countsCart');
const totalPrice = document.getElementById('totalPrice');

function quantityPrices() {
    let total = storege.reduce((pre, item) => {
        return pre + item.price * item.quantity;
    },0)

       let fixPrice = parseInt(total.toFixed(2));
       let normalPrice = fixPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
       })

       totalPrice.textContent = normalPrice;
};

function renderCard() {

    countsCart.textContent = storege.length;
    carts.innerHTML = ``;
    if(storege.length > 0) {
        document.querySelector('.youcart').textContent = `Your cart`;
    };
    if(storege.length <= 0) {
        document.querySelector('.imgempty').style.display = `flex`;
      } 
    if(storege) {
        storege.forEach((item, index) => {
        let {id, imgas, titles, price, quantity = 1} = item;
        let pricequantity = price * quantity;

        let pricestring = pricequantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        });
        
        let newCard = document.createElement('div');
        newCard.setAttribute('id', `${id}`);
        newCard.setAttribute('class', 'newCards');
        newCard.innerHTML = `
        <div class="zoom">
        <img class="imgCard" src="${imgas}">
        </div>
        <p class="titleCard">${titles}<p/>
        <span class="priceCard">${pricestring}</span>
        <div class="quantity">
        <span data-index="${index}" class="btMinus">-</span>
        <span data-index="${index}" class="input">${quantity}</span>
        <span data-index="${index}" class="btPlus">+</span>
        </div>
        <button data-index="${index}" class="closedCard">X</button>
        `
        carts.appendChild(newCard);
        })
    }

    quantityPrices();
}

carts.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if(e.target.classList.contains('btPlus')) {
      storege[index].quantity++;
    }
    else if(e.target.classList.contains('btMinus')) {
        storege[index].quantity--;
        if(storege[index].quantity <= 0) {
            storege.splice(index, 1);
            location.reload();
        }
    }

    localStorage.setItem('carts', JSON.stringify(storege));
    renderCard();
});

renderCard();

                    //  Удаление товаров

carts.addEventListener('click', (e) => {
    const cartPosition = e.target.getAttribute('data-index');
    if(e.target.classList.contains('closedCard') && cartPosition !== null) {
        storege.splice(cartPosition, 1);
        location.reload();
    }
        renderCard();
        localStorage.setItem('carts', JSON.stringify(storege));
        
});
