/**
 * channels.js
 * Handles the "TV Channel" switching system inside sobre-mi.html
 */

document.addEventListener('DOMContentLoaded', () => {
    const channelBtns = document.querySelectorAll('.channel-btn');
    const channelContents = document.querySelectorAll('.channel-content');
    const staticNoise = document.getElementById('channel-static');
    const currentChannelDisplay = document.getElementById('current-channel-display');

    if (channelBtns.length === 0) return;

    channelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetChannel = btn.getAttribute('data-channel');

            // Do nothing if already active
            if (btn.classList.contains('active')) return;

            // Trigger static transition effect
            if (staticNoise) {
                staticNoise.classList.remove('hidden');
                
                // You can add an audio effect here if PORTFOLIO_CONFIG had it
            }

            // Update Active button state
            channelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Hide all content immediately
            channelContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active');
            });

            // Update HUD Tracker text
            if (currentChannelDisplay) {
                currentChannelDisplay.innerText = `CH: 0${targetChannel}`;
            }

            // After static finishes (e.g. 400ms), show new content
            setTimeout(() => {
                const targetContent = document.getElementById(`channel-${targetChannel}`);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                    targetContent.classList.add('active');
                }
                
                if (staticNoise) {
                    staticNoise.classList.add('hidden');
                }
            }, 300); // 300ms static transition duration
        });
    });
});
