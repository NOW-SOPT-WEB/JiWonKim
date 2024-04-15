// console.log('cart.js 들어옴')
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // console.log('cart: ', cart);

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - ${item.price}원`;
        cartItems.appendChild(cartItem);
    });
});
