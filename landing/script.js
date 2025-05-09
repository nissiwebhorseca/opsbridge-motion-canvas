
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const scrollIndicator = document.getElementById('scroll-indicator');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      if (scrollIndicator) scrollIndicator.style.opacity = '0';
    } else {
      navbar.classList.remove('scrolled');
      if (scrollIndicator) scrollIndicator.style.opacity = '1';
    }
    
    // Track active section for nav highlighting
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  
  // Mobile menu functionality
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const closeMenuButton = document.querySelector('.close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Scroll to section functionality
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Scroll to top button
  const scrollTopButton = document.querySelector('.scroll-top');
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
      
      // In a real app, you would send this to a server
      console.log('Form submitted:', formDataObj);
      
      // Show success message
      contactForm.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--blue); margin: 0 auto 1rem;">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3 style="margin-bottom: 1rem;">Message Sent!</h3>
          <p>Thank you for reaching out. We'll get back to you shortly.</p>
        </div>
      `;
    });
  }
  
  // Custom cursor
  const cursor = document.getElementById('cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
    
    // Change cursor state on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.backgroundColor = 'rgba(45, 156, 219, 0.2)';
        cursor.style.mixBlendMode = 'normal';
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        cursor.style.mixBlendMode = 'difference';
      });
    });
    
    // Change cursor on text elements
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');
    textElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(0.75)';
        cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      });
    });
  }
  
  // Initialize particles animation
  initParticles();
});

// Simple particles animation
function initParticles() {
  const particlesContainer = document.getElementById('particles-js');
  if (!particlesContainer) return;
  
  // Create particles
  for (let i = 0; i < 30; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  
  // Random size between 2px and 6px
  const size = 2 + Math.random() * 4;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  
  // Random position
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  
  // Styling
  particle.style.borderRadius = '50%';
  particle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  
  // Random animation duration between 10s and 30s
  const duration = 10 + Math.random() * 20;
  
  // Animation
  particle.style.animation = `float ${duration}s ease-in-out infinite`;
  particle.style.animationDelay = `${Math.random() * 5}s`;
  
  // Add to container
  container.appendChild(particle);
}
