const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add some lag to the outline for smooth effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Generate Data Grid
const gridContainer = document.querySelector('.data-grid');
if (gridContainer) {
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
    }

    // Animate grid cells randomly
    setInterval(() => {
        const cells = document.querySelectorAll('.grid-cell');
        const randomCell = cells[Math.floor(Math.random() * cells.length)];

        randomCell.style.opacity = Math.random() * 0.5;

        setTimeout(() => {
            randomCell.style.opacity = 0;
        }, 1000);
    }, 100);
}
