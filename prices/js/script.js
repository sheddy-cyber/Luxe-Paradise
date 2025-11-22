// Parallax effect for background images
window.addEventListener('scroll', () => {
    const consultantsBg = document.querySelector('.consultants-bg');
    const featureBg = document.querySelector('.feature-banner-bg');
    const scrolled = window.pageYOffset;

    if (consultantsBg) {
        const consultantsSection = consultantsBg.parentElement;
        const consultantsOffset = consultantsSection.offsetTop;
        const parallax1 = (scrolled - consultantsOffset) * 0.5;
        consultantsBg.style.transform = `translateY(${parallax1}px)`;
    }

    if (featureBg) {
        const featureSection = featureBg.parentElement;
        const featureOffset = featureSection.offsetTop;
        const parallax2 = (scrolled - featureOffset) * 0.5;
        featureBg.style.transform = `translateY(${parallax2}px)`;
    }
});