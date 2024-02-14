let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');


document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


    document.addEventListener('DOMContentLoaded', function() {
        const addToCartButtons = document.querySelectorAll('.box .btn');


        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                const item = event.target.closest('.box');
                const itemName = item.querySelector('h3').innerText;
                const itemPrice = item.querySelector('.price').innerText;


                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <span class="fas fa-times"></span>
                    <img src="${item.querySelector('img').src}" alt="">
                    <div class="content">
                        <h3>${itemName}</h3>
                        <div class="price">${itemPrice}</div>
                    </div>
                `;


                const cartItemsContainer = document.querySelector('.cart-items-container');
                cartItemsContainer.appendChild(cartItem);


                updateCartTotal();
            });
        });


        const cartItemsContainer = document.querySelector('.cart-items-container');
        cartItemsContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('fa-times')) {
                const itemToRemove = event.target.closest('.cart-item');
                itemToRemove.remove();
                updateCartTotal();
            }
        });


        function updateCartTotal() {
            const cartItems = document.querySelectorAll('.cart-item');
            let total = 0;
            cartItems.forEach(item => {
                const priceText = item.querySelector('.price').innerText;
                const price = parseFloat(priceText.replace('₱', '') )
                total += price;
            });


            const payNowButton = document.querySelector('.cart-items-container .btn');
            if (payNowButton) {
                payNowButton.innerText = `Pay now - ₱${total.toFixed(2)}`;
            }
        }
    });

