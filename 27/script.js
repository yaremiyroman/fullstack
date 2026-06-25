class Slider {
    #slideWidth = null;
    #sliderRotationInterval = null;

    #track = null;
    #slides = null;
    #prevButton = null;
    #nextButton = null;
    #dotsContainer = null;

    constructor(options = {}) {
        this.#sliderRotationInterval = options.sliderRotationInterval;
        this.#slideWidth = options.slideWidth;

        this.#track = document.getElementById(options.track);
        this.#slides = document.querySelectorAll(options.slides);
        this.#prevButton = document.getElementById(options.prevButton);
        this.#nextButton = document.getElementById(options.nextButton);
        this.#dotsContainer = document.getElementById(options.dotsContainer);
    }
}



const slider = new Slider({
    slideWidth: 960,
    sliderRotationInterval: 40000,
    track: 'slider-track',
    slides: '.slide',
    prevButton: 'prev',
    nextButton: 'next',
    dotsContainer: 'dots',
});



