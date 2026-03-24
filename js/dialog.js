/**
 * dialog.js
 * Handles the interactive character dialog box with a typewriter effect.
 */

document.addEventListener('DOMContentLoaded', () => {
    const characterImg = document.getElementById('anime-character');
    const dialogBox = document.getElementById('dialog-box');
    const dialogText = document.getElementById('dialog-text');
    
    if (!characterImg || !dialogBox || !dialogText) return;

    let phraseIndex = 0;
    let isTyping = false;
    let currentTimeout = null;

    const phrases = typeof PORTFOLIO_CONFIG !== 'undefined' ? PORTFOLIO_CONFIG.dialogPhrases : ["No data available."];

    const typeWriter = (text, i) => {
        if (i < text.length) {
            dialogText.innerHTML += text.charAt(i);
            currentTimeout = setTimeout(() => typeWriter(text, i + 1), 30); // Typing speed
        } else {
            isTyping = false;
        }
    };

    characterImg.addEventListener('click', () => {
        if (isTyping) {
            // Speed up if clicked while typing
            clearTimeout(currentTimeout);
            dialogText.innerHTML = phrases[phraseIndex];
            isTyping = false;
            return;
        }

        // Show dialog box if hidden
        dialogBox.classList.remove('hidden');
        
        // Start typing next phrase
        isTyping = true;
        dialogText.innerHTML = '';
        const text = phrases[phraseIndex];
        
        typeWriter(text, 0);

        // Advance phrase index
        phraseIndex = (phraseIndex + 1) % phrases.length;
    });
});
