document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.section-container'); 

    SHOPPING_LIST.forEach(section => {
        const sectionElement = document.createElement('section');
        sectionElement.className = 'section';
        sectionElement.id = section.filter;
        // console.log(section.filter);
        console.log(sectionElement.className);
        console.log('id:', sectionElement.id);

        section.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="product-img">
                <i class="fa fa-heart"></i>
                <p class="product-name">${item.name}</p>
                <p class="product-price">${item.price}원</p>
            `;

            itemElement.addEventListener('click', function() {
                handleClick(item);
            })

            sectionElement.appendChild(itemElement);
        });

        container.appendChild(sectionElement);
    });
});
