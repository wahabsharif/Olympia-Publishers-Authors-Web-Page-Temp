document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slidebox = document.querySelectorAll(".box");
    const dots = document.querySelectorAll(".dot");

    function isMobile() {
        return window.innerWidth <= 450;
    }

    function showSlide(index) {
        if (!isMobile()) return; // Do nothing if screen is larger than 450px

        slidebox.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;

            if (i === index) {
                slide.style.opacity = "1"; // Full opacity for active slide
                slide.style.filter = "none"; // No blur effect
            } else {
                slide.style.opacity = "0.5"; // Lower opacity for inactive slides
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    function currentSlide(index) {
        if (isMobile()) {
            currentIndex = index;
            showSlide(currentIndex);
        }
    }

    // Attach click event to dots (only in mobile mode)
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => currentSlide(index));
    });

    // Function to enable or disable slider based on screen size
    function toggleView() {
        if (!isMobile()) {
            // Reset styles for larger screens
            slidebox.forEach(slide => {
                slide.style.transform = "none"; // Remove transform for full visibility
                slide.style.opacity = "1"; // Restore original opacity
                slide.style.filter = "none"; // Remove blur effect
            });
        } else {
            showSlide(currentIndex);
        }
    }

    // Initialize and listen for screen resize
    toggleView();
    window.addEventListener("resize", toggleView);
});
