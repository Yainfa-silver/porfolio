// Quick Navigation Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const fsMenu = document.getElementById('fs-menu');

    if (menuToggle && fsMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            fsMenu.classList.toggle('hidden');
            menuToggle.classList.toggle('open');
        });

        // Se elimina el cierre al click fuera para mantener abierto hasta nuevo click en el botón
        // document.addEventListener('click', (e) => {
        //     if (!fsMenu.contains(e.target) && e.target !== menuToggle) {
        //         fsMenu.classList.add('hidden');
        //     }
        // });
    }
});
