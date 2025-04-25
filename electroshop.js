const block = document.querySelector('.textContent');
const totalPrices = document.querySelector('.count');
const spanCounts = document.querySelector('.spanCounts');
const urlProduct = 'https://fakestoreapi.com/products';

// function quntityPrice() {
//    let total = data.reduce((pre, item) => {
//        return pre + parseInt(item.price.replace(/\s/g, ''), 10) * item.quantity;
//    },0)

//    let totalPrice = total.toLocaleString('ru-RU', {
//       style: `currency`,
//       currency: `RUB`,
//       minimumFractionDigits: 0
//    })

//    count.textContent = `${totalPrice}`;
// }

// function renderCart() {
//       block.innerHTML = ``;
//       spanCounts.textContent = data.length;

//       if(data.length <= 0) {
//          let span = document.createElement('span');
//          span.setAttribute('class', 'spanTitle');
//          span.textContent = `Пусто!!!`;
//          block.append(span);
//       }
      
//    data.forEach((item, index) => {
//       // console.log(item);
//      let {id, name, price, image, quantity = 1} = item;
//      let numbPrice = parseInt(price.replace(/\s/g, ''), 10);
//      let quntityPrice = numbPrice * quantity;
//      let stringPrice = quntityPrice.toLocaleString('ru-RU', {
//       style: `currency`,
//       currency: `RUB`,
//       minimumFractionDigits: 0
//      });
     
//      let newcart = document.createElement('div');
//      newcart.setAttribute('class', 'newcart');
//      newcart.setAttribute('id', `${id}`);
//      newcart.innerHTML = `
//      <div class="zoom">
//      <img class="productImg" src="${image}">
//      </div>
//      <p class="title">${name}<p/>
//      <span class="price">${stringPrice}</span>
//      <div class="quntity">
//      <span data-index="${index}" class="btMinus">-</span>
//      <input type="text" value="${quantity}">
//      <span data-index="${index}" class="btPlus">+</span>
//      </div>
//      <button data-index="${index}" class="closed">X</button>
//      `
//      block.append(newcart);

// }) 

// quntityPrice();

// }

// block.addEventListener('click', (e) => {
//    const index = e.target.dataset.index;
//    if(e.target.classList.contains('btPlus')) {
//      data[index].quantity++;
//    }
//    else if(e.target.classList.contains('btMinus')) {
//      data[index].quantity--;
//      if(data[index].quantity <= 0) {
//        data.splice(index, 1);
//      }
//    }

//    renderCart();
// });

// renderCart();

//                   // Удаление товаров

// block.onclick = (e) => {
//    const position = e.target.getAttribute('data-index');
//    if(e.target.classList.contains('closed') && position !== null) {
//       data.splice(position, 1);
//    }
//    renderCart();
// }

// //                        // Popup



// window.addEventListener('DOMContentLoaded', function() {

//    const imgPopup = document.querySelector('.imgPopup');
//    const titlePopup = document.querySelector('.titlePopup');
//    const pricePopup = document.querySelector('.pricePopup');
//    const arrData = document.querySelectorAll('.card');
//    console.log(arrData);

// arrData.forEach(el => {
//    let openPopup = el.childNodes[3];
//    let img = el.childNodes[3].childNodes[1].attributes.src.textContent;
//    let name = el.childNodes[5].textContent;
//    let price = el.childNodes[6].textContent;
// openPopup.addEventListener('click', () => {
//       imgPopup.src = img;
//       titlePopup.textContent = name;
//       pricePopup.textContent = price;

//       document.querySelector('.poupbg').classList.add('poupbgclass');
//       document.querySelector('html').classList.add('noScroll');
// })

// })

// document.querySelector('.btclosedPopup').addEventListener('click', () => {
//    document.querySelector('.poupbg').classList.remove('poupbgclass');
//    document.querySelector('html').classList.remove('noScroll');
// })

// });

                  // Product

// for (let i = 0; i < products.length; i++) {
//     products[i].quantity = 1;
// }
// const arrProducts = products;

// function renderCart() {
//    function quantityTotal() {
//       let total = arrProducts.reduce((pre, product) => {
//           return pre + product.price * product.quantity;
//       },0)
   
//       let totalString = total.toLocaleString('en-US', {
//          style: `currency`,
//          currency: `USD`,
//          minimumFractionDigits: 0
//       });
   
//    totalPrices.textContent = `${totalString}`;
// };

//    spanCounts.textContent = arrProducts.length;
//    block.innerHTML = ``;
//       arrProducts.forEach((item, index) => {
//          let {id, image, title, price, quantity} = item;
//          let priceQuantity = price * quantity;
         
//          let normalprice = priceQuantity.toLocaleString('en-US', {
//             style: `currency`,
//             currency: `USD`,
//             minimumFractionDigits: 0
//          })

//          if(item) {
//             let card = document.createElement('div');
//             card.setAttribute('id', `${id}`);
//             card.setAttribute('class', 'card');
//             card.innerHTML = `
//             <button data-index="${index}" class="close">X</button>
//             <div class="zoom">
//             <img class="imgCard" src="${image}">
//             </div>
//             <p class="titleCard">${title}<p/>
//             <span class="priceCard">${normalprice}</span>
//             <div class="quntity">
//             <span data-index="${index}" class="btMinus">-</span>
//             <span data-index="${index}" class="input">${quantity}</span>
//             <span data-index="${index}" class="btPlus">+</span>
//             </div>
//             <button data-index="${index}" class="closedCard">Add to cart</button>
//             `
//             block.appendChild(card);
//          }
         
//       })
      
//    quantityTotal();
// }

// block.addEventListener('click', (e) => {
//    const index = e.target.dataset.index;
//    if(e.target.classList.contains('btPlus')) {
//       arrProducts[index].quantity++;
//    }
//    else if (e.target.classList.contains('btMinus')) {
//       arrProducts[index].quantity--;
//       if(arrProducts[index].quantity <= 0) {
//          arrProducts.splice(index, 1);
//       } 
//    }

//    renderCart();
// })

// renderCart();

//                   //   Удаление товаров

// document.onclick = (e) => {
//    const position = e.target.getAttribute('data-index');
//    if(e.target.classList.contains('close') && position !== null) {
//       arrProducts.splice(position, 1);
//    }

//    renderCart();
// };


//                        // Popup

// block.addEventListener('click', (e) => {
//    const targets = e.target;
//    if(targets.closest('.zoom')) {
//       const card = e.target.closest('.card');
//       const img = card.querySelector('img').getAttribute('src');
//       const name = card.querySelector('.titleCard').textContent;
//       const price = card.querySelector('.priceCard').textContent;

//       const imgPopup = document.querySelector('.imgPopup');
//       const titlePopup = document.querySelector('.titlePopup');
//       const pricePopup = document.querySelector('.pricePopup');

//       imgPopup.src = img;
//       titlePopup.textContent = name;
//       pricePopup.textContent = price;

//       document.querySelector('.poupbg').classList.add('poupbgclass');
//       document.querySelector('html').classList.add('noScroll');
//    }
// });

// document.querySelector('.btclosedPopup').addEventListener('click', () => {
//    document.querySelector('.poupbg').classList.remove('poupbgclass');
//    document.querySelector('html').classList.remove('noScroll');
// });


                       // Product-Fetch

// let goup = document.createElement('div');
// goup.setAttribute('class', 'goup');
// let imggoup = document.createElement('img');
// imggoup.setAttribute('src', 'img/arrowUp.png');
// imggoup.setAttribute('class', 'imggoup');

// document.querySelector('.container').append(goup);
// goup.append(imggoup);

// fetch('https://fakestoreapi.com/products')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {

// data.forEach(item => {
//    item.quantity = 1;
// });

// const productsData = data;

// function renderCart() {

//     function quntityPrice() {
//     let total = productsData.reduce((pre, item) => {
//          return pre + item.price * item.quantity;
//     },0)

//     let normalprice = total.toLocaleString('en-US', {
//        style: `currency`,
//        currency: `USD`,
//        minimumFractionDigits: 0
//     })
//       console.log(normalprice);
//     };

//     const cardStorege = JSON.parse(localStorage.getItem('carts')) || [];
//     const countsCart = document.querySelector('.countsCart');
//     countsCart.textContent = cardStorege.length;
//     spanCounts.textContent = productsData.length;

//     block.innerHTML = ``;
//       productsData.forEach((el, index) => {
//          let {id, image, title, price, quantity = 1} = el;

//             let normalPrice = price * quantity;
//             let prices = normalPrice.toLocaleString('en-US', {
//                style: 'currency',
//                currency: 'USD',
//                minimumFractionDigits: 0
//             });

//             let card = document.createElement('div');
//             card.setAttribute('id', `${id}`);
//             card.setAttribute('class', 'card');
//             card.innerHTML = `
//             <button data-index="${index}" class="close">X</button>
//             <div class="zoom">
//             <img class="imgCard" src="${image}">
//             </div>
//             <p class="titleCard">${title}<p/>
//             <span class="priceCard">${prices}</span>
//             <div class="quntity">
//             <span data-index="${index}" class="btMinus">-</span>
//             <span data-index="${index}" class="input">${quantity}</span>
//             <span data-index="${index}" class="btPlus">+</span>
//             </div>
//             <button data-index="${index}" class="closedCard">Add to cart</button>
//             `
//             block.append(card);
//       })

//    quntityPrice();

// }

// block.addEventListener('click', (e) => {

//           const index = e.target.dataset.index;
//           if(e.target.classList.contains('btPlus')) {
//              productsData[index].quantity++;
//           }
//           else if (e.target.classList.contains('btMinus')) {
//              productsData[index].quantity--;
//              if(productsData[index].quantity <= 0) {
//                 productsData.splice(index, 1);
//              }
//           }
//           else if(e.target.classList.contains('close')) {
//                 productsData.splice(index, 1);
//           }
//                   //   добавление товаров в корзину

//           else if(e.target.classList.contains('closedCard')) {
//                 let card = e.target.closest('.card');
//                 let id = card.id;
//                 let imgas = card.querySelector('.imgCard').src;
//                 let titles = card.querySelector('.titleCard').textContent;
//                 let prices = card.querySelector('.priceCard').textContent;
//                 let newCard = {id, imgas, titles, prices, quantity: 1};
//                 const cardStorege = localStorage.getItem('carts') || "[]";
//                 let carts = JSON.parse(cardStorege);
//                 const existCart = carts.findIndex((item) => item.id === id);
//                 if(existCart !== -1) {
//                   alert('Такой товар уже добавлен!');
//                 }else {
//                   carts.push(newCard);
//                 }
//                 localStorage.setItem('carts', JSON.stringify(carts));
//           }

//    renderCart();
// })

// renderCart();

// });

//                         // Popup-Card

// block.addEventListener('click', (e) => {
//    const targets = e.target;
//    if(targets.closest('.zoom')) {
//       const card = targets.closest('.card');
//       const img = card.querySelector('.imgCard').getAttribute('src');
//       const titleCard = card.querySelector('.titleCard').textContent;
//       const priceCard = card.querySelector('.priceCard').textContent;
 
//       const imgPopup = document.querySelector('.imgPopup');
//       const titlePopup = document.querySelector('.titlePopup');
//       const pricePopup = document.querySelector('.pricePopup');
 
//       imgPopup.src = img;
//       titlePopup.textContent = titleCard;
//       pricePopup.textContent = priceCard;
 
//       document.querySelector('.poupbg').classList.add('poupbgclass');
//       document.querySelector('html').classList.add('noScroll');
//    }
// });

// document.querySelector('.btclosedPopup').addEventListener('click', () => {
//      document.querySelector('.poupbg').classList.remove('poupbgclass');
//      document.querySelector('html').classList.remove('noScroll');
// });

               // Go-up

// const btgoup = document.querySelector('.goup');
// btgoup.addEventListener('click', functionGoup);
// window.addEventListener('scroll', tracker);

// function tracker() {
//    const offset = window.pageYOffset;
//    const coords = document.documentElement.clientHeight;
//    if(offset < coords) {
//       btgoup.classList.add('displaynone');
//    }else {
//       btgoup.classList.remove('displaynone');
//    }
// }

// function functionGoup() {
//    if(window.pageYOffset > 0) {
//       window.scrollBy(0, -75)
//       setTimeout(functionGoup, 0); 
//    }
// }

//                   //  Рендер товаров чере локальную базу-данных

// const productsData = products;

// productsData.forEach(item => {
//    item.quantity = 1;
// });

// let goup = document.createElement('div');
// goup.setAttribute('class', 'goup');
// let imggoup = document.createElement('img');
// imggoup.setAttribute('src', 'img/arrowUp.png');
// imggoup.setAttribute('class', 'imggoup');

// document.querySelector('.container').append(goup);
// goup.append(imggoup);

// function renderCart() {

//    //  function quntityPrice() {
//    //  let total = productsData.reduce((pre, item) => {
//    //       return pre + item.price * item.quantity;
//    //  },0)

//    //  let normalprice = total.toLocaleString('en-US', {
//    //     style: `currency`,
//    //     currency: `USD`,
//    //     minimumFractionDigits: 0
//    //  })
//    //    console.log(normalprice);
//    //  };

//     const cardStorege = JSON.parse(localStorage.getItem('carts')) || [];
//     const countsCart = document.querySelector('.countsCart');
//     countsCart.textContent = cardStorege.length;
//     spanCounts.textContent = productsData.length;

//     block.innerHTML = ``;
//       productsData.forEach((el, index) => {
//          let {id, image, title, price, quantity = 1} = el;
//             let normalPrice = price * quantity;
//             let prices = normalPrice.toLocaleString('en-US', {
//                style: 'currency',
//                currency: 'USD',
//                minimumFractionDigits: 0
//             });

//             let card = document.createElement('div');
//             card.setAttribute('id', `${id}`);
//             card.setAttribute('class', 'card');
//             card.innerHTML = `
//             <button data-index="${index}" class="close">X</button>
//             <div class="zoom">
//             <img class="imgCard" src="${image}">
//             </div>
//             <p class="titleCard">${title}<p/>
//             <span class="priceCard">${prices}</span>
//             <div class="quntity">
//             <span data-index="${index}" class="btMinus">-</span>
//             <span data-index="${index}" class="input">${quantity}</span>
//             <span data-index="${index}" class="btPlus">+</span>
//             </div>
//             <button data-index="${index}" class="closedCard">Add to cart</button>
//             `
//             block.append(card);
//       })

//    // quntityPrice();

// }

// block.addEventListener('click', (e) => {

//           const index = e.target.dataset.index;
//           if(e.target.classList.contains('btPlus')) {
//              productsData[index].quantity++;
//           }
//           else if (e.target.classList.contains('btMinus')) {
//              productsData[index].quantity--;
//              if(productsData[index].quantity <= 0) {
//                 productsData.splice(index, 1);
//              }
//           }
//           else if(e.target.classList.contains('close')) {
//                 productsData.splice(index, 1);
//           }
//                   //   добавление товаров в корзину

//           else if(e.target.classList.contains('closedCard')) {
//                 let card = e.target.closest('.card');
//                 let id = card.id;
//                 let imgas = card.querySelector('.imgCard').src;
//                 let titles = card.querySelector('.titleCard').textContent;
//                 let prices = card.querySelector('.priceCard').textContent;
//                 let price = parseInt(prices.replace(/\D/g, ''), 10);
            
//                 let newCard = {id, imgas, titles, price, quantity: 1};
             
//                 const cardStorege = localStorage.getItem('carts') || "[]";
//                 let carts = JSON.parse(cardStorege);

//                 const existCart = carts.findIndex((item) => item.id === id);
//                 if(existCart !== -1) {
//                   alert('Такой товар уже добавлен!');
//                 }else {
//                   carts.push(newCard);
//                 }
//                 localStorage.setItem('carts', JSON.stringify(carts));
//           }

//    renderCart();
// })

// renderCart();

const productsData = products;
productsData.forEach(item => {
   item.quantity = 1;
});

let goup = document.createElement('div');
goup.setAttribute('class', 'goup');
let imggoup = document.createElement('img');
imggoup.setAttribute('src', 'img/arrowUp.png');
imggoup.setAttribute('class', 'imggoup');
document.querySelector('.container').append(goup);
goup.append(imggoup);

// === ПАГИНАЦИЯ ===

let currentPage = 1;
const itemsPerPage = 6; // Сколько товаров на одной странице
const paginationContainer = document.createElement('div');
paginationContainer.setAttribute('class', 'pagination');
document.querySelector('.container').append(paginationContainer);

function paginateProducts(products, page, perPage) {
   const start = (page - 1) * perPage;
   const end = page * perPage;
   return products.slice(start, end);
}

function renderPaginationButtons(totalItems, perPage) {
   const totalPages = Math.ceil(totalItems / perPage);
   paginationContainer.innerHTML = '';

   for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = i === currentPage ? 'active' : '';
      btn.addEventListener('click', () => {
         currentPage = i;
         renderCart();
      });
      paginationContainer.appendChild(btn);
   }
}

// === РЕНДЕР КАРТОЧЕК ===

function renderCart() {
   const cardStorege = JSON.parse(localStorage.getItem('carts')) || [];
   const countsCart = document.querySelector('.countsCart');
   countsCart.textContent = cardStorege.length;
   spanCounts.textContent = productsData.length;

   block.innerHTML = ``;

   const currentProducts = paginateProducts(productsData, currentPage, itemsPerPage);

   currentProducts.forEach((el, index) => {
      let globalIndex = (currentPage - 1) * itemsPerPage + index;
      let { id, image, title, price, quantity = 1 } = el;
      let normalPrice = price * quantity;
      let prices = normalPrice.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD',
         minimumFractionDigits: 0
      });

      let card = document.createElement('div');
      card.setAttribute('id', `${id}`);
      card.setAttribute('class', 'card');
      card.innerHTML = `
         <button data-index="${globalIndex}" class="close">X</button>
         <div class="zoom">
            <img class="imgCard" src="${image}">
         </div>
         <p class="titleCard">${title}<p/>
         <span class="priceCard">${prices}</span>
         <div class="quntity">
            <span data-index="${globalIndex}" class="btMinus">-</span>
            <span data-index="${globalIndex}" class="input">${quantity}</span>
            <span data-index="${globalIndex}" class="btPlus">+</span>
         </div>
         <button data-index="${globalIndex}" class="closedCard">Add to cart</button>
      `;
      block.append(card);
   });

   renderPaginationButtons(productsData.length, itemsPerPage);
}

// === СОБЫТИЯ НА КНОПКИ В КАРТОЧКАХ ===

block.addEventListener('click', (e) => {
   const index = e.target.dataset.index;
   if (e.target.classList.contains('btPlus')) {
      productsData[index].quantity++;
   } else if (e.target.classList.contains('btMinus')) {
      productsData[index].quantity--;
      if (productsData[index].quantity <= 0) {
         productsData.splice(index, 1);
      }
   } else if (e.target.classList.contains('close')) {
      productsData.splice(index, 1);
   } else if (e.target.classList.contains('closedCard')) {
      let card = e.target.closest('.card');
      let id = card.id;
      let imgas = card.querySelector('.imgCard').src;
      let titles = card.querySelector('.titleCard').textContent;
      let prices = card.querySelector('.priceCard').textContent;
      let price = parseInt(prices.replace(/\D/g, ''), 10);
      let newCard = { id, imgas, titles, price, quantity: 1 };

      const cardStorege = localStorage.getItem('carts') || "[]";
      let carts = JSON.parse(cardStorege);

      const existCart = carts.findIndex((item) => item.id === id);
      if (existCart !== -1) {
         alert('Такой товар уже добавлен!');
      } else {
         carts.push(newCard);
      }
      localStorage.setItem('carts', JSON.stringify(carts));
   }

   renderCart();
});

// ПЕРВАЯ СТРАНИЦА — СРАЗУ ОТОБРАЖАЕТСЯ
renderCart();


                        // Popup-Card

block.addEventListener('click', (e) => {
   const targets = e.target;
   if(targets.closest('.zoom')) {
      const card = targets.closest('.card');
      const img = card.querySelector('.imgCard').src;
      const titleCard = card.querySelector('.titleCard').textContent;
      const priceCard = card.querySelector('.priceCard').textContent;
 
      const imgPopup = document.querySelector('.imgPopup');
      const titlePopup = document.querySelector('.titlePopup');
      const pricePopup = document.querySelector('.pricePopup');
 
      imgPopup.src = img;
      titlePopup.textContent = titleCard;
      pricePopup.textContent = priceCard;
 
      document.querySelector('.poupbg').classList.add('poupbgclass');
      document.querySelector('html').classList.add('noScroll');

   }

});

document.querySelector('.btclosedPopup').addEventListener('click', () => {
     document.querySelector('.poupbg').classList.remove('poupbgclass');
     document.querySelector('html').classList.remove('noScroll');
});

               // Go-up

const btgoup = document.querySelector('.goup');
btgoup.addEventListener('click', functionGoup);
window.addEventListener('scroll', tracker);

function tracker() {
   const offset = window.pageYOffset;
   const coords = document.documentElement.clientHeight;
   if(offset < coords) {
      btgoup.classList.add('displaynone');
   }else {
      btgoup.classList.remove('displaynone');
   }
}

function functionGoup() {
   if(window.pageYOffset > 0) {
      window.scrollBy(0, -75)
      setTimeout(functionGoup, 0); 
   }
}

