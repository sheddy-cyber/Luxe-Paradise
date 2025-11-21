document.addEventListener('DOMContentLoaded', () => {

  // Counter animation (observer3)
  const counters = document.querySelectorAll('.counter');
  const duration = 2000;

  const startCounting = (counter) => {
    const max = parseInt(counter.getAttribute('data-max')) || 0;
    const incrementTime = 20;
    const totalSteps = Math.max(1, Math.floor(duration / incrementTime));
    const step = max / totalSteps;
    let count = 0;

    const interval = setInterval(() => {
      count += step;
      if (count >= max) {
        count = max;
        clearInterval(interval);
      }
      const span = counter.querySelector('span');
      if (span) span.textContent = Math.floor(count);
    }, incrementTime);
  };

  const counterObserver = new IntersectionObserver((entries, io) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // Parallax effect for stats background
  window.addEventListener('scroll', () => {
    const statsBg = document.querySelector('.stats-bg');
    if (statsBg && statsBg.parentElement) {
      const scrolled = window.pageYOffset;
      const statsSection = statsBg.parentElement;
      const statsOffset = statsSection.offsetTop;
      const parallax = (scrolled - statsOffset) * 0.5;
      statsBg.style.transform = `translateY(${parallax}px)`;
    }
  });
});
