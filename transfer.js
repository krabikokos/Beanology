document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";
    setTimeout(() => document.body.style.opacity = "1", 50);

    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener("click", e => {
                e.preventDefault();
                const href = link.getAttribute("href");
                document.body.style.opacity ="0";
                setTimeout(() => window.location.href = href, 500);
            });
        }
    });
});

window.addEventListener("scroll", () => {
    const scrool = document.querySelector("header");
    if (header) {
        let scroll = window.scrollY;
        header.style.backgroundPositionY = '${scroll * 0.5}px';
    }
})