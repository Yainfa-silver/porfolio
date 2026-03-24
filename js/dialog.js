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

    const isAboutPage = document.body.getAttribute('data-page') === 'about';
    const phrases = typeof PORTFOLIO_CONFIG !== 'undefined' 
        ? (isAboutPage ? PORTFOLIO_CONFIG.dialogPhrasesAbout : PORTFOLIO_CONFIG.dialogPhrasesIndex)
        : ["..."];

    const updateDialog = () => {
        if (isTyping) {
            // Finish current phrase immediately
            clearTimeout(currentTimeout);
            dialogText.innerHTML = phrases[phraseIndex];
            isTyping = false;
            // Advance for next click
            phraseIndex = (phraseIndex + 1) % phrases.length;
            return;
        }

        // Setup next phrase
        isTyping = true;
        dialogText.innerHTML = '';
        const text = phrases[phraseIndex];
        
        const typeWriter = (t, i) => {
            if (i < t.length) {
                dialogText.innerHTML += t.charAt(i);
                currentTimeout = setTimeout(() => typeWriter(t, i + 1), 30);
            } else {
                isTyping = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        };
        
        typeWriter(text, 0);
    };

    // Make both the avatar and the dialog box clickable
    characterImg.addEventListener('click', updateDialog);
    dialogBox.addEventListener('click', updateDialog);
    
    // Initial dialog (optional, but requested phrases are 3)
    // We start with the first phrase automatically or on first click

});
