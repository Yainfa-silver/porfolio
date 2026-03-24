// Quick Navigation Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const fsMenu = document.getElementById('fs-menu');

    if (menuToggle && fsMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            fsMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!fsMenu.contains(e.target) && e.target !== menuToggle) {
                fsMenu.classList.add('hidden');
            }
        });
    }
});
