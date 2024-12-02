document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const leftArrow = document.querySelector(".scrollers .left");
    const rightArrow = document.querySelector(".scrollers .right");

    const scrollAmount = ; // Adjust scroll distance per click

    // Scroll left when the left arrow is clicked
    leftArrow.addEventListener("click", () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    });

    // Scroll right when the right arrow is clicked
    rightArrow.addEventListener("click", () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    });
});
