// pega o botao e o menu
const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const isMenuOpen = false;

menuButton.addEventListener('click', () => { menuButtonChange(); menuButtonTransition(); }); 

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