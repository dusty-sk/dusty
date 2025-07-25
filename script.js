const revealElements = document.querySelectorAll('.about, .videos');

const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add('reveal');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);






if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "style-mobile.css";
    document.head.appendChild(link);
}



document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-image';

    overlay.appendChild(lightbox);
    document.body.appendChild(overlay);

    document.querySelectorAll('.screenshot').forEach(screenshot => {
        screenshot.addEventListener('click', () => {
            const bg = window.getComputedStyle(screenshot).backgroundImage;
            lightbox.style.backgroundImage = bg;
            overlay.classList.add('active');
        });
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        lightbox.style.backgroundImage = '';
    });
});
