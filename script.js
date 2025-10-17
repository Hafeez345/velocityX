/**
 * VelocityX Website JavaScript Code (script.js)
 * Enhances user experience with smooth scrolling.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll Animation for Navigation Links
    // This targets internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Scroll smoothly to the target element
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // Aligns the top of the element to the top of the viewport
                    });

                    // Optional: Update URL hash without jumping
                    history.pushState(null, null, targetId);
                }
            }
        });
    });

    // 2. Console Log for Buy Now Click Confirmation (Optional debugging)
    const buyButtons = document.querySelectorAll('.Buy-Button');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.Listing-Card');
            if (card) {
                const carName = card.querySelector('h3').textContent;
                console.log(Buy Now clicked for: ${carName}. WhatsApp link opened to 03033744977.);
            } else {
                console.log(Buy Now clicked. WhatsApp link opened to 03033744977.);
            }
        });
    });

    console.log("VelocityX website JavaScript is active. Enjoy the ride!");
});