class Slider {
    #sliderContainer = null;
    #sliderContainerWidth = null;
    #slideWidth = null;
    #sliderRotationInterval = null;
    #sliderImages = null;
    #slider = null;
    #track = null;
    #slides = null;
    #prevButton = null;
    #nextButton = null;
    #dotsContainer = null;
    #dots = null;

    #currentSlideIndex = null;
    #totalSlides = null;
    #timer = null;

    // State for mobile support
    #startX = 0;
    #isMoving = false;

    #sliderDelta = 240;

    #resizeTimer = null;

    #ratio = 2.66;

    constructor(options = {}) {
        this.#sliderContainer = document.getElementById(options.sliderContainer);
        this.#sliderContainerWidth = options.sliderContainerWidth;
        this.#slideWidth = options.slideWidth;
        this.#sliderRotationInterval = options.sliderRotationInterval;

        this.#slider = document.getElementById(options.slider);
        this.#track = document.getElementById(options.track);
        this.#slides = document.querySelectorAll(options.slides);
        this.#prevButton = document.getElementById(options.prevButton);
        this.#nextButton = document.getElementById(options.nextButton);
        this.#dotsContainer = document.getElementById(options.dotsContainer);
        this.#sliderImages = document.querySelectorAll(`#${options.slider} img`);

        this.#currentSlideIndex = 0;
        this.#totalSlides = this.#slides.length;

        // Init
        this.#initDots();
        this.#attachEventListeners();
        this.#updateDots(this.#currentSlideIndex);
        this.#setSliderDimensions(this.#sliderContainerWidth);

        // Mobile Init
        this.#attachTouchEventListeners();
    }

    startRotation() {
        this.#timer = setInterval(() => this.#nextSlide(), this.#sliderRotationInterval);
    }

    stopRotation() {
        if (this.#timer) {
            clearInterval(this.#timer);
            this.#timer = null;
        }
    }

    #setSliderDimensions(basicWidth) { //1200  //664
        this.stopRotation();

        this.#sliderContainer.style.width = basicWidth + 'px';
        this.#slider.style.width = basicWidth - this.#sliderDelta + 'px';
        this.#slider.style.height = (basicWidth - this.#sliderDelta) / this.#ratio + 'px';
        this.#slideWidth = basicWidth - this.#sliderDelta;

        this.#sliderImages.forEach(image => {
            image.style.width = basicWidth - this.#sliderDelta + 'px';
            image.style.height = (basicWidth - this.#sliderDelta) / this.#ratio + 'px';
        });


        this.#showSlide(this.#currentSlideIndex);

        this.startRotation();
    }

    #nextSlide() {
        this.#currentSlideIndex = this.#currentSlideIndex >= this.#totalSlides - 1
            ? 0
            : ++this.#currentSlideIndex;

        this.#showSlide(this.#currentSlideIndex);
    }

    #prevSlide() {
        this.#currentSlideIndex = this.#currentSlideIndex <= 0
            ? this.#totalSlides - 1
            : --this.#currentSlideIndex;

        this.#showSlide(this.#currentSlideIndex);
    }

    #showSlide(idx) {
        this.#track.style.transform = `translateX(-${idx * this.#slideWidth}px)`;

        this.#updateDots(idx);
    }

    #initDots() {
        this.#slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            this.#dotsContainer.append(dot);

            dot.addEventListener('click', () => {
                this.#showSlide(index);
            });
        });

        this.#dots = document.querySelectorAll('.dot');
    }

    #updateDots(dotIndex) {
        this.#dots.forEach(dot => dot.classList.remove('active'));

        this.#dots[dotIndex].classList.add('active');
    }

    #attachEventListeners() {
        // Desktop Event listeners
        this.#nextButton.addEventListener('click', () => this.#nextSlide());
        this.#prevButton.addEventListener('click', () => this.#prevSlide());

        this.#slider.addEventListener('mouseover', () => this.stopRotation());
        this.#slider.addEventListener('mouseout', () => this.startRotation());

        window.addEventListener('resize', (event) => {
            clearTimeout(this.#resizeTimer);

            this.#resizeTimer = setTimeout(() => {
                this.#setSliderDimensions(event.target.innerWidth);
            }, 500);
        });
    }

    #attachTouchEventListeners() {
        this.#track.addEventListener('touchstart', (event) => {
            if (event.touches > 1) {
                return;
            }

            this.#startX = event.touches[0].clientX;
            this.#isMoving = true;
        });

        this.#track.addEventListener('touchmove', (event) => {
            if (!this.#isMoving) return;

            const dx = event.touches[0].clientX - this.#startX;

            this.#track.style.transform = `translateX(${-this.#currentSlideIndex * this.#slideWidth + dx}px)`;
        });

        this.#track.addEventListener('touchend', (event) => {
            if (!this.#isMoving) return;

            this.#isMoving = false;

            const endX = event.changedTouches[0].clientX;

            const dx = endX - this.#startX;

            if (dx > 200) {
                this.#prevSlide();
            } else if (dx < -200) {
                this.#nextSlide();
            } else {
                this.#showSlide(this.#currentSlideIndex);
            }
        });
    }
}

const slider = new Slider({
    sliderContainer: 'slider-container',
    sliderContainerWidth: 1200,
    slideWidth: 960,
    sliderRotationInterval: 1000,
    slider: 'slider',
    track: 'slider-track',
    slides: '.slide',
    prevButton: 'prev',
    nextButton: 'next',
    dotsContainer: 'dots',
});

const play = document.getElementById('start');
const stop = document.getElementById('stop');

play.addEventListener('click', () => slider.startRotation());
stop.addEventListener('click', () => slider.stopRotation());
