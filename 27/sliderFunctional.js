// Definitions
// DOM
const track = document.getElementById('slider-track');
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dotsContainer = document.getElementById('dots');

// constants
const sliderRotationInterval = 40000;
const slideWidth = 960;

// state
let currentSlideIndex = 0;
const totalSlides = slides.length;
// console.log('totalSlides > ', totalSlides);

// Functionality
function startRotation() {
    setInterval(nextSlide, sliderRotationInterval);
}

function showSlide(idx) {
    track.style.transform = `translateX(-${idx * slideWidth}px)`;

    updateDots(idx);
}

function nextSlide() {
    currentSlideIndex = currentSlideIndex >= totalSlides - 1
        ? 0
        : ++currentSlideIndex;

    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = currentSlideIndex <= 0
        ? totalSlides - 1
        : --currentSlideIndex;

    showSlide(currentSlideIndex);
}

function initDots() {
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.append(dot);

        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
}

function updateDots(dotIndex) {
    const dots = document.querySelectorAll('.dot');

    dots.forEach(dot => dot.classList.remove('active'));

    dots[dotIndex].classList.add('active');
}

// Desktop Event listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Mobile
let startX = 0;
let isMoving = false;

track.addEventListener('touchstart', (event) => {
    if (event.touches > 1) {
        return;
    }

    startX = event.touches[0].clientX;
    isMoving = true;
});

track.addEventListener('touchmove', (event) => {
    if (!isMoving) return;

    const dx = event.touches[0].clientX - startX;

    track.style.transform = `translateX(${-currentSlideIndex * slideWidth + dx}px)`;
});


track.addEventListener('touchend', (event) => {
    if (!isMoving) return;

    isMoving = false;

    const endX = event.changedTouches[0].clientX;

    const dx = endX - startX;

    if (dx > 200) {
        prevSlide();
    } else if (dx < -200) {
        nextSlide();
    } else {
        showSlide(currentSlideIndex);
    }
});

// Init
// startRotation();
initDots();
updateDots(currentSlideIndex);
