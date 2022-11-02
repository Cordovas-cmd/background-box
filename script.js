const body = document.body;
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0;

setBgImage()

function setBgImage() {
    // grabs the first background image url from the node list.
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide =>
        slide.classList.remove('active'))

        slides[activeSlide].classList.add('active')
}
