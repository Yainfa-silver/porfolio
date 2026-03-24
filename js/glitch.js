/**
 * glitch.js
 * Optional dynamic DOM-based manipulations for extra instability.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add brief random glitch skews to images periodically
    const glitchImgs = document.querySelectorAll('.glitch-img');
    
    if (glitchImgs.length > 0) {
        setInterval(() => {
            if (Math.random() > 0.8) {
                glitchImgs.forEach(img => {
                    const randomSkew = Math.floor(Math.random() * 10) - 5;
                    img.style.transform = `skewX(${randomSkew}deg)`;
                    
                    setTimeout(() => {
                        img.style.transform = 'skewX(0deg)';
                    }, 100);
                });
            }
        }, 2000);
    }
});
