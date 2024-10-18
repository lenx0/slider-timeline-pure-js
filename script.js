let slideIndex = 0;
const slides = document.querySelectorAll('.slide-container');
const totalSlides = slides.length;
const years = document.querySelectorAll('.year');
const separators = document.querySelectorAll('.separator');

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    const newTranslateValue = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${newTranslateValue}%)`;
    
    // Atualiza a timeline
    updateTimeline();
}

function updateTimeline() {
    years.forEach((year, index) => {
        if (index === slideIndex) {
            year.classList.remove('gray-text');
            year.classList.add('green-text');
            separators[index].classList.remove('gray-text');
            separators[index].classList.add('green-text');
        } else if (index < slideIndex) {
            year.classList.remove('gray-text');
            year.classList.add('green-text');
            separators[index].classList.remove('gray-text');
            separators[index].classList.add('green-text');
        } else {
            year.classList.remove('green-text');
            year.classList.add('gray-text');
            separators[index].classList.remove('green-text');
            separators[index].classList.add('gray-text');
        }
    });
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

showSlide(slideIndex);
