document.addEventListener('DOMContentLoaded', function() {
    let homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.sidebar button');
    const sections = document.querySelectorAll('.section');

    console.log(buttons);
    console.log(sections);

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.classList[0]; 
            console.log(filterType)
            
            sections.forEach(section => {
                if (filterType === 'section-all') {
                    section.style.display = 'grid';
                } else if (section.id === filterType) {
                    section.style.display = 'grid';
                } else {
                    section.style.display = 'none';
                }
            });
            
        });
    });
});
