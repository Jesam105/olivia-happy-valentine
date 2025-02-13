document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots-container");

    // Generate dots dynamically
    slides.forEach((_, i) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;

        document.querySelector(".slides").style.transform = `translateX(-${slideIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    function moveSlide(step) {
        slideIndex += step;
        showSlide(slideIndex);
    }

    function moveToSlide(index) {
        slideIndex = index;
        showSlide(slideIndex);
    }

    // Auto slide every 4 seconds
    setInterval(() => moveSlide(1), 4000);

    // Initialize first slide
    showSlide(slideIndex);

    // Autoplay fix for music
    let audio = document.getElementById("bg-music");
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.log("Autoplay blocked:", error));
        }
    });
});
