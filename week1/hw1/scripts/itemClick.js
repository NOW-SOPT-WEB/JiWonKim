function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function moveToCart() {
    console.log('확인');
    window.location.href = 'shopCart.html';
}

function handleClick(item) {
    console.log('item:', item.name, item.price);

    const confirmation = confirm('장바구니에 담으시겠습니까?');
    if (confirmation) {
        addToCart(item); 
        moveToCart(); 
    } else {
        console.log('취소');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const homeNavBtn = document.querySelector('.menu-bar'); 
    const homeNavModal = document.querySelector('.home-modal'); 
    const homeNavCloseBtn = document.querySelector('.closeHomeModalBtn'); 
    const homeNavCartPage = document.querySelector('.cart-page'); 

    homeNavBtn.addEventListener('click', () => {
        homeNavModal.style.display = 'block'
    })
    
    homeNavCloseBtn.addEventListener('click', () => {
        homeNavModal.classList.add('close');

        setTimeout(() => {
            homeNavModal.style.display = 'none';
            homeNavModal.classList.remove('close');
        }, 500); 
    })    

    homeNavCartPage.addEventListener('click', () => {
        window.location.href = 'shopCart.html';
    })    

});
