// Parallax effect for banners
window.addEventListener('scroll', () => {
    document.querySelectorAll('.feature-banner-bg').forEach(bg => {
        const banner = bg.parentElement;
        const scrolled = window.pageYOffset;
        const bannerOffset = banner.offsetTop;
        const parallax = (scrolled - bannerOffset) * 0.5;
        bg.style.transform = `translateY(${parallax}px)`;
    });
});