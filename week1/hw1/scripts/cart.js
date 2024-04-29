// console.log('cart.js 들어옴')
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    // console.log('cart: ', cart);

    const tableTitle = document.createElement('tr');

    const checkBoxTitle = document.createElement('th');
    const selectAllCheckBox = document.createElement('input');
    selectAllCheckBox.type = 'checkbox';
    selectAllCheckBox.addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckBox.checked;
        });        
    });
    checkBoxTitle.appendChild(selectAllCheckBox);
    tableTitle.appendChild(checkBoxTitle);

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

        const itemCheckBox = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.dataset.item = JSON.stringify(item);
        console.log(checkbox.dataset.item);
        itemCheckBox.appendChild(checkbox);
        cartItem.appendChild(itemCheckBox);

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
        const price = item.price.toLocaleString();
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

    const buyBtn = document.querySelector('.buyBtn');
    const homeBtn = document.querySelector('.homeBtn');
    const modalCloseBtn = document.querySelector('.close-modal-btn');

    buyBtn.addEventListener('click', buyItems);

    modalCloseBtn.addEventListener('click', closeModal);

    homeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    

});

function removeItemFromCart(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    location.reload();
}

function openModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

function buyItems() {
    const purchaseList = document.querySelector(".item-list"); 
    const totalPrice = document.getElementById("totalPrice");  
    const finalBuyBtn = document.querySelector('.final-buy-btn');

    const selectedItems = [];
    let total = 0;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        if (checkbox.dataset.item && checkbox.dataset.item !== "undefined") {
            try {
                const item = JSON.parse(checkbox.dataset.item);
                console.log('Checked item data:', item);
                selectedItems.push(item);
                total += item.price;
            } catch (e) {
                console.error('JSON parsing error for data-item:', checkbox.dataset.item, e);
            }
        } else {
            console.error('Invalid or missing data-item on checked checkbox:', checkbox);
        }
    });

    purchaseList.innerHTML = "";  
    selectedItems.forEach(item => {
        const listItem = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.img; 
        img.alt = item.name;
        img.style.width = '50px';
        img.style.height = '50px';

        const text = document.createElement("span");
        text.textContent = `${item.name} - ${item.price.toLocaleString()}원`; 

        listItem.appendChild(img); 
        listItem.appendChild(text);
        purchaseList.appendChild(listItem);
    });

    totalPrice.textContent = `총 합계: ${total.toLocaleString()}원`;

    openModal(); 

    finalBuyBtn.addEventListener('click', () => {
        selectedItems.forEach(item => {
            removeItemFromCart(item.id);  
        });
        closeModal();  
        alert('구매완료'); 
    });
}
