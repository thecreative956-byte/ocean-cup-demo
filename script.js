/**
 * OceanCup - Script.js
 * Handles fade-in animations, sticky navbar, and bubble particles
 */

// ============================================
// Sticky Navbar on Scroll
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero');

  window.addEventListener('scroll', function() {
    // Check if scrolled past hero section or just add scrolled class after a threshold
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ============================================
  // Fade-in on Scroll Animation (IntersectionObserver)
  // ============================================

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-in sections
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  fadeInSections.forEach(section => {
    observer.observe(section);
  });

  // ============================================
  // Bubble Particle Animation
  // ============================================

  const bubbleContainer = document.getElementById('bubbleContainer');

  if (bubbleContainer) {
    // Function to create a bubble
    function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      // Random size between 10px and 40px
      const size = Math.random() * 30 + 10;
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';

      // Random horizontal position
      const left = Math.random() * 100;
      bubble.style.left = left + '%';

      // Random animation duration between 6s and 12s
      const duration = Math.random() * 6 + 6;
      bubble.style.animationDuration = duration + 's';

      // Random horizontal drift (translateX in the animation)
      const drift = (Math.random() - 0.5) * 200;
      bubble.style.setProperty('--drift', drift + 'px');

      // Random delay
      const delay = Math.random() * 2;
      bubble.style.animationDelay = delay + 's';

      // Random opacity
      const opacity = Math.random() * 0.5 + 0.3;
      bubble.style.opacity = opacity;

      bubbleContainer.appendChild(bubble);

      // Remove bubble after animation completes to avoid memory issues
      setTimeout(() => {
        bubble.remove();
      }, (duration + delay) * 1000);
    }

    // Create bubbles at intervals
    setInterval(createBubble, 400);

    // Create some initial bubbles
    for (let i = 0; i < 5; i++) {
      setTimeout(createBubble, i * 200);
    }
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
