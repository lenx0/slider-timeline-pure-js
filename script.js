let slideIndex = 0;
const slides = document.querySelectorAll('.slide-container');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    const newTranslateValue = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${newTranslateValue}%)`;
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

showSlide(slideIndex);
