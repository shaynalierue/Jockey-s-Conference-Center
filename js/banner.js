const slides = document.querySelectorAll(".banner-slide");
let currentSlide = 0;

function showBanner(slideIndex) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showBanner(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
