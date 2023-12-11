// Get the search input element
const searchInput = document.querySelector(".searchInput");

const outerContainer = document.querySelector(".outerContainer");
const innerContainer = document.querySelector(".innerContainer");
const btn = document.querySelector(".btn");

const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const itemWidth = 33.33;
const itemMobileWidth = 99.99;

nextBtn.addEventListener('click', () => {
  if (counter < 3) { 
    counter++;
    moveCarousel();
  } else {
    counter = 0;
    moveCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    moveCarousel();
  } else {
    counter = 3; 
    moveCarousel();
  }
});

prevBtn.addEventListener('touchstart', () => {
  if (counter > 0) {
    counter--;
    moveCarouselMobile();
  } else {
    counter = 3; 
    moveCarouselMobile();
  }
});

nextBtn.addEventListener('touchstart', () => {
  if (counter < 3) { 
    counter++;
    moveCarouselMobile();
  } else {
    counter = 0;
    moveCarouselMobile();
  }
});

function moveCarousel() {
  const offset = -counter * itemWidth;
  carousel.style.transform = `translateX(${offset}%)`;
}

function moveCarouselMobile(e) {
  //make this work
  const offset = -counter * itemMobileWidth;
  carousel.style.transform = `translateX(${offset}%)`;
}

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("warning") === null) {
    localStorage.setItem("warning", JSON.stringify(true));
  } else {
    outerContainer.style.display = "none";
    innerContainer.style.display = "none";
    btn.style.display = "none";
  }
});

btn.addEventListener("click", function () {
  outerContainer.style.display = "none";
  innerContainer.style.display = "none";
  btn.style.display = "none";
});

// Add event listener for input changes
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  // Perform search logic here
  const products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    const title = products[i]
      .getElementsByClassName("title")[0]
      .innerText.toLowerCase();
    const description = products[i]
      .getElementsByClassName("description")[0]
      .innerText.toLowerCase();
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
});
