// Get references to the button and menu
const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const isMenuOpen = false;

menuButton.addEventListener('click', () => { menuButtonChange(); menuButtonTransition(); }); 

document.addEventListener('DOMContentLoaded', function () {
    const animationContainer = document.querySelector('.animation-container');

    // Add a class to trigger the animation when the page loads
    animationContainer.classList.add('show');
    
    // Define a function for smooth and slow scrolling
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
    
    // Fade away the container after a certain duration
    setTimeout(() => {
        animationContainer.classList.remove('show');
        
        // Scroll down to a specific element or position with slower scrolling
        scrollTo(window, window.innerHeight, 2000); // Adjust the duration (e.g., 3000 milliseconds) for slower scrolling
        setTimeout(() => {animationContainer.style.maxHeight = 0}, 3000);
    }, 3000);
});



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
