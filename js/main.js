let productContainer = document.querySelector('#productcontainer');
let btn = document.getElementById('btn');
let form = document.querySelector('form');
let inp = document.querySelector('form input');
let data = {};
let item = [];
let url = "http://sushi-order/info2.json";
let url2 = "http://sushi-order/response.php";


btn.onclick = (e) => {
    e.preventDefault();   
    // console.log(form.elements);    
    sendAjax();
}

async function sendAjax() {
    // console.log(form);
    let response = await fetch(url2, {
        method: 'POST',
        body: new FormData(form)
    });

    let result = await response.json();
    console.log(result);
}


 fetch(url)
     .then(response => {
         // console.log(response)
         if (response.ok && response.status === 200) {
             return response.json();

         } else {
             console.log(response);
         }
     })
     .then(function (data) {
         // console.log(data);
         data.forEach(function (data) {
             renderProduct(data);
         });
         return data;
     }).then((data) => {
         console.log(data);
         let productCard = document.querySelectorAll('div[data-product-card]');
         console.log(productCard);

         let minus = document.querySelectorAll('[data-click="minus"]');
         let plus = document.querySelectorAll('[data-click="plus"]');
        // console.log(minus);
        // setCount(minus);
        // setCount(plus);
            minus.forEach((item) => {
                item.addEventListener('click', (e) => {
                    let id = +e.target.closest('div[data-product-card]').getAttribute('id');
                    console.log(id);
                    let res = data.findIndex((elem) => {
                        console.log(elem);
                        if (elem['id'] == id) {
                            return true;
                        }
                    });
                     let count = data[res].countItem;
                    if (count > 1) {
                        count--;

                    }
                    data[res].countItem = count;
                    item.nextElementSibling.textContent = count;
                    let price = data[res].countItem;
                    console.log(price * data[res].price);
                    price *= data[res].price;
                    // data[res].price = price 
                    console.log(data);
                    // item.closest('.price__currency');
                    e.target.closest('div[data-product-card]').querySelector('.price__currency span').textContent = price;
                    // console.log();

                })
            })
            plus.forEach((item) => {
                item.addEventListener('click', (e) => {
                    let id = +e.target.closest('div[data-product-card]').getAttribute('id');
                    console.log(id);
                    let res = data.findIndex((elem) => {
                        console.log(elem);
                        if (elem['id'] == id) {
                            return true;
                        }
                    });
                     let count = data[res].countItem;
                    
                        count++;

                   
                    data[res].countItem = count;
                    item.previousElementSibling.textContent = count;

                     let price = data[res].countItem;
                     console.log(price * data[res].price);
                     price *= data[res].price;
                     // data[res].price = price 
                     console.log(data);
                     // item.closest('.price__currency');
                     e.target.closest('div[data-product-card]').querySelector('.price__currency span').textContent = price;

                    console.log(item.previousElementSibling);

                })
            })
         
        //  productCard.forEach((card) => {
        //      card.addEventListener('click', (e) => {
        //          let id = e.target.matches('div[data-product-card]');
        //          console.log(id);
        //      })
        //  });

     })
     .catch(function (data) {
         console.log('Ошибка ' + data);
     })



// console.log(data);
function renderProduct(item) {
  let product =  `
    <div data-product-card class="card mb-4" id="${item.id}">
        <img class="product-img" src="img/roll/${item.image}" alt="${item.image}">
        <div class="card-body text-center">
            <h4 class="item-title">${item.title}</h5>
            <p><small class="text-muted">${item.quantity} шт.</small></p>

            <div class="details-wrapper">
                <div class="items">
                    <div data-click="minus" id="minus" class="items__control">-</div>
                    <div data-counter id="number" class="items__current">${item.countItem}</div>
                    <div data-click="plus" id="plus" class="items__control">+</div>
                </div>

                <div class="price">
                    <div class="price__weight">${item.weight}г.</div>
                    <div class="price__currency"><span>${item['price']}</span>₽</div>
                </div>
            </div>

            <button id="addToCart" type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

        </div>
    </div>`;
    
    productContainer.insertAdjacentHTML('beforeend', product);
    // idCount++;
    
}

// item.forEach(function (item) {
//     renderProduct(item);
//     // idCount++;
// });
// console.log(idCount);
// renderProduct();





