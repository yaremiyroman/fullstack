// // Definitions
// // DOM
// const track: HTMLElement | null = document.getElementById('slider-track');
// const slides: NodeListOf<Element> = document.querySelectorAll('.slide');
// const dotsContainer: HTMLElement | null = document.getElementById('dots');
// const prevButton: HTMLElement | null = document.getElementById('prev');
// const nextButton: HTMLElement | null = document.getElementById('next');

// // constants
// const sliderRotationInterval: number = 40000;
// let slideWidth: number = 960; // px

// // state
// let currentSlideIndex: number = 0;
// let timer: ReturnType<typeof setInterval> | null = null;

// // Functionality
// function startRotation(): void {
//     timer = setInterval(nextSlide, sliderRotationInterval);
// }

// function initDots(): void {
//     slides.forEach((_, index: number) => {
//         const dot: HTMLElement = document.createElement('div');
//         dot.classList.add('dot');

//         if (dotsContainer !== null) {
//             dotsContainer.append(dot);
//         }

//         dot.addEventListener('click', _ => {
//             if (timer) {
//                 clearInterval(timer);
//             }
//             showSlide(index);
//             updateDots(index);
//             startRotation();
//         });
//     });
// }

// function updateDots(dotIndex: number): void {
//     const dots: NodeListOf<Element> = document.querySelectorAll('.dot');
//     dots.forEach((dot: Element): void => dot.classList.remove('active'));

//     dots.forEach((dot: Element, index: number): void => {
//         if (index === dotIndex) {
//             dot.classList.add('active');
//         }
//     });
// }

// function showSlide(idx: number): void { // Number
//     if (track) {
//         track.style.transform = `translateX(-${idx * slideWidth}px)`;
//     }

//     currentSlideIndex = idx;
//     updateDots(idx);
// }

// function nextSlide(): void {
//     currentSlideIndex = currentSlideIndex >= slides.length - 1 ? 0 : ++currentSlideIndex;

//     showSlide(currentSlideIndex);
// }

// function prevSlide(): void {
//     currentSlideIndex = currentSlideIndex <= 0 ? slides.length - 1 : --currentSlideIndex;

//     showSlide(currentSlideIndex);
// }

// // Event Listeners
// // TRUE - go forward, FALSE - go backward
// function handleBackForward(direction: boolean = true): void {
//     if (timer) {
//         clearInterval(timer);
//     }

//     if (direction) nextSlide()
//     else prevSlide();

//     startRotation();
// }

// if (nextButton) {
//     nextButton.addEventListener('click', (): void => {
//         handleBackForward();
//     });
// }

// if (prevButton) {
//     prevButton.addEventListener('click', (): void => {
//         handleBackForward(false);
//     });
// }

// let startX: number = 0;
// let isMoving: boolean = false;

// if (track) {
//     track.addEventListener('touchstart', (event: TouchEvent): void => {
//         if (timer) {
//             clearInterval(timer);
//         }

//         if (event.touches.length > 1) {
//             return;
//         }

//         startX = event.touches[0].clientX;
//         isMoving = true;
//     });

//     track.addEventListener('touchmove', (event: TouchEvent): void => {
//         if (!isMoving) return;

//         let dx: number = event.touches[0].clientX - startX;

//         track.style.transform = `translateX(${-currentSlideIndex * slideWidth + dx}px)`;
//     });

//     track.addEventListener('touchend', (event: TouchEvent): void => {
//         if (!isMoving) return;

//         isMoving = false;


//         const endX: number = event.changedTouches[0].clientX;

//         const dx: number = endX - startX;

//         if (dx > 200) {
//             prevSlide();
//         } else if (dx < -200) {
//             nextSlide();
//         } else {
//             showSlide(currentSlideIndex);
//         }

//         startRotation();
//     });
// }






// // Initialization
// showSlide(currentSlideIndex);
// startRotation();
// initDots();
// updateDots(currentSlideIndex);

// alert('6');