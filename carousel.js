const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from("dotsNav.children");

const slideWidth = slides[0].getBoundingClientRect().width;


// arrnage the slide next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentslide, targetSlide) => {
    track.style.transform = "transLateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");

}
const updatesDots = (currentDot, targetDot) => {
    currentDot.classList.remove("currnet-slide");
    targetDot.classList.add("current-slide");
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        if (!targetIndex === 0) {
            prevButton.classList.add("is-hidden");
            nextButton.classList.remove("is-hidden");
        } else if (targetIndex === slide.length - 1) {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.add("is-hidden");
        } else {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.remove("is-hidden");
        }


        //when i click left, move slide to the left
        prevButton.addEventListener("click", e => {
            const currentSlide = track.querySelector(".current-slide");
            const prevSlide = currentSlide.previousElementSibling;
            const currentDot = dotsNav.querySelector(".current-slide");
            const prevDot = currentDot.previousElementSibling;
            const prevIndex = slides.findIndex(slide => slide === prevSlide);

            moveToSlide(track, currentSlide, prevSlide);
            updatesDots(currentDot, prevDot);
            hideShowArrows(slides, prevButton, nextButton, prevIndex);
        })

        // when i click right, move slide to the right
        nextButton.addEventListener("click", e => {
            const currentSlide = track.querySelector(".current-slide");
            const nextSlide = currentSlide.nextElementSibling;
            const currentDot = dotsNav.querySelector(".current-slide");
            const nextDot = currentDot.nextElementSibling;
            const nextIndex = slides.findIndex(slide => slide === nextSlide);

            moveToSlide(track, currentSlide, nextSlide);
            updatesDots(currentDot, nextDot);
            hideShowArrows(slides, prevButton, nextButton, nextIndex);
        });

        // when I click the nav indicators, mmove to that slide

        dotsNav.addEventListener ("click", e => {
            //what idicator was click on?
            const targetDot = e.target.closet("button");

            if (!targetDot) {return}

            const currentSlide = track.querySelector(".current-slide");
            const currentDot = dotsNav.querySelector(".current-slide");
            const targetIndex = dots.findIndex(dot => dot === targetDot);
            const targetSlide = slides[targetIndex];

            moveToSlide(track, currentSlide, targetSlide);

            moveToSlide(track, currentSlide, targetSlide);
            updatesDots(currentDot, targetDot);
            hideShowArrows(slides, prevButton, nextButton, targetIndex);
        }) }

