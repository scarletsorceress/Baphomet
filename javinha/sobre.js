const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let slideIndex = 0;

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  carousel.style.transform = `translateX(${-slideIndex * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  carousel.style.transform = `translateX(${-slideIndex * 100}%)`;
});