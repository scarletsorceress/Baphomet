// Get references to the button and menu
const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const isMenuOpen = false;


menuButton.addEventListener('click', () => { menuButtonChange(); menuButtonTransition(); }); 


function menuButtonTransition() {
    if (menu.style.maxHeight === '0px' || menu.style.maxHeight === '') {
        // Open the menu
        menu.style.display = 'block';
        menu.style.maxHeight = menu.scrollHeight + 'px';
    } else {
        // Close the menu
        menu.style.display = 'none';
        menu.style.maxHeight = '0';
    }
};


function menuButtonChange() {
    menuButton.classList.toggle('change');
};

// Close the menu when a menu item is clicked
const menuItems = menu.querySelectorAll('li');
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        menu.style.display = 'none';
    });
});
