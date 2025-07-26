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








document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(
        ".about, .videos, .good-video-row-green, .good-video-row-red, .texture-pack-full"
    );

    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;

        items.forEach((item, index) => {
            const boxTop = item.getBoundingClientRect().top;
            if (boxTop < triggerBottom && !item.classList.contains("animated")) {
                const classes = ["animate-fade", "animate-left", "animate-right", "animate-zoom"];
                const chosenClass = classes[index % classes.length];
                item.classList.add(chosenClass, "animated");
            }
        });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});

item.classList.add("animate-left", "animated");













function copyCode(id) {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(() => {
        const msg = document.getElementById("copied-msg" + id.replace("code-block", ""));
        msg.style.display = "inline";
        setTimeout(() => (msg.style.display = "none"), 2000);
    });
}

