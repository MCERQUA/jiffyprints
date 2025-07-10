// Jiffyprints - Main JavaScript

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    // Remove any existing event listeners
    const newToggle = mobileMenuToggle.cloneNode(true);
    mobileMenuToggle.parentNode.replaceChild(newToggle, mobileMenuToggle);
    
    // Add click event listener
    newToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Mobile menu toggle clicked'); // Debug log
      
      mobileMenu.classList.toggle('active');
      newToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!newToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        newToggle.classList.remove('active');
      }
    });
  }
  
  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      const mobileMenu = document.querySelector('.mobile-menu');
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      
      if (mobileMenu && mobileMenuToggle) {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
  });
});

// Form enhancements
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form[data-netlify="true"]');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
      }
    });
  });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add loading states to buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Add a subtle loading effect
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
});

// Enhanced card hover effects
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card-light, .card-dark');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
});

// File upload preview for quote form
document.addEventListener('DOMContentLoaded', function() {
  const fileInput = document.getElementById('design');
  
  if (fileInput) {
    fileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      const helpText = this.nextElementSibling;
      
      if (file) {
        helpText.textContent = `Selected: ${file.name}`;
        helpText.style.color = 'var(--red-accent)';
      } else {
        helpText.textContent = 'Upload your logo or design (JPG, PNG, PDF, AI, EPS)';
        helpText.style.color = '';
      }
    });
  }
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.card-light, .card-dark, .feature-item');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
});