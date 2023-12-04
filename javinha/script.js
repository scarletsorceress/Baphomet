// Get references to the button and menu
const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const mainSection = document.getElementById('main-section');

const isMenuOpen = false;

menuButton.addEventListener('click', () => { menuButtonChange(); menuButtonTransition(); }); 

document.addEventListener('DOMContentLoaded', function () {
    const animationContainer = document.querySelector('.animation-container');

    // evento que aciona a animaçao quando a pagina carrega
    animationContainer.classList.add('show');
    
    // definindo funçao pra rolar a pagina de forma lenta e suave
    function scrollTo(element, to, duration) {
        if (duration <= 0) return;
        const difference = to - window.scrollY;
        const perTick = difference / duration * 10;

        setTimeout(function () {
            window.scroll(0, window.scrollY + perTick);
            if (window.scrollY === to) return;
            scrollTo(element, to, duration - 10);
        }, 1);
    }
    
    // da um fade no container depois de um certo tempo
    setTimeout(() => {
        animationContainer.classList.remove('show');
        
        // rola pra baixo da tela em um elemento especifico, mas rola lentamente
        scrollTo(mainSection, window.innerHeight, 2000); // Adjust the duration (e.g., 3000 milliseconds) for slower scrolling
        setTimeout(() => {animationContainer.style.maxHeight = 0}, 3000);
    }, 3000);
});



function menuButtonTransition() {
    if (menu.style.maxHeight === '0px' || menu.style.maxHeight === '') {
        // abre o menu
        menu.style.display = 'block';
        menu.style.maxHeight = menu.scrollHeight + 'px';
    } else {
        // fecha o menu
        menu.style.display = 'none';
        menu.style.maxHeight = '0';
    }
};


function menuButtonChange() {
    menuButton.classList.toggle('change');
};

// fecha o menu quando um item do menu é clicado
const menuItems = menu.querySelectorAll('li');
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        menu.style.display = 'none';
    });
});


// fecha o menu quando clica em qualquer lugar da tela
window.onclick = function(event) {
    if (event.target !== menuButton) {
        menu.style.display = 'none';
        menu.style.maxHeight = '0';
        menuButton.classList.remove('change');
    }
}