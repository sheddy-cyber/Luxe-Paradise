document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
    });

  // Smooth scrolling for internal links only
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;            // ignore plain "#" or empty
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (navLinks) navLinks.classList.remove('active');
        if (menuToggle) {
          const icon = menuToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const internalNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && internalNavLinks.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      internalNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });
  }

  // Create floating particles
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  // Parallax effect for CTA section
  window.addEventListener('scroll', () => {
    const cta = document.querySelector('.cta-bg');
    const ctaSection = document.querySelector('.cta');
    if (cta && ctaSection) {
      const scrolled = window.pageYOffset;
      const ctaOffset = ctaSection.offsetTop;
      const parallax = (scrolled - ctaOffset) * 0.5;
      cta.style.transform = `translateY(${parallax}px)`;
    }
  });

  // Card entrance animation (observer1)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const cardEntranceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.room-card, .feature, .gallery-item, .pricing-card, .consultant-card, .contact-info, .contact-form, .stat-card').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    cardEntranceObserver.observe(el);
  });

  // Gradient animation for hero background
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    let hue = 0;
    setInterval(() => {
      hue = (hue + 1) % 360;
      heroBg.style.filter = `brightness(0.4) hue-rotate(${hue}deg)`;
    }, 100);
  }
});