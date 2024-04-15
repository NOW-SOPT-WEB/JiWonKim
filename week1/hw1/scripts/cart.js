// console.log('cart.js 들어옴')
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // console.log('cart: ', cart);

    const tableTitle = document.createElement('tr');
    const productImgTitle = document.createElement('th');
    productImgTitle.textContent = '상품 정보';
    tableTitle.appendChild(productImgTitle);

    const productNameTitle = document.createElement('th');
    productNameTitle.textContent = '상품명';
    tableTitle.appendChild(productNameTitle);

    const productPriceTitle = document.createElement('th');
    productPriceTitle.textContent = '상품 금액';
    tableTitle.appendChild(productPriceTitle);

    const categoryTitle = document.createElement('th');
    categoryTitle.textContent = '카테고리'; 
    tableTitle.appendChild(categoryTitle);

    const deleteTitle = document.createElement('th');
    deleteTitle.textContent = '삭제'; 
    tableTitle.appendChild(deleteTitle);

    cartItems.appendChild(tableTitle);
    

    cart.forEach(item => {
        const cartItem = document.createElement('tr');

        const itemImg = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        img.style.width = 'auto';
        img.style.height = '50px';
        itemImg.appendChild(img);
        cartItem.appendChild(itemImg);

        const itemName = document.createElement('td');
        itemName.textContent = item.name;
        cartItem.appendChild(itemName);

        const itemPrice = document.createElement('td');
        const price = item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        itemPrice.textContent = price + '원';
        cartItem.appendChild(itemPrice);

        const itemCategory = document.createElement('td');
        itemCategory.textContent = item.listName;
        cartItem.appendChild(itemCategory);

        const itemDelete = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';
        deleteBtn.addEventListener('click', function() {
            removeItemFromCart(item.id); 
        });
        itemDelete.appendChild(deleteBtn);
        cartItem.appendChild(itemDelete);

        cartItems.appendChild(cartItem);
    });
});

function removeItemFromCart(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    location.reload();
}
