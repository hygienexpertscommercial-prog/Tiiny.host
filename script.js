// ===================================
// TIMEZONE CONFIGURATION
// ===================================

// Set timezone to Australia/Sydney (AEST/AEDT)
// This ensures all date/time operations use the correct timezone
const TIMEZONE = 'Australia/Sydney';

// Business Hours Configuration
const BUSINESS_HOURS = {
    weekday: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        open: '08:00',
        close: '21:00'
    },
    weekend: {
        days: ['Saturday', 'Sunday'],
        open: '09:00',
        close: '16:00'
    }
};

// Helper function to get current time in Australia/Sydney timezone
function getCurrentSydneyTime() {
    return new Date().toLocaleString('en-AU', { timeZone: TIMEZONE });
}

// Helper function to format date in Australia/Sydney timezone
function formatSydneyDateTime(date = new Date()) {
    return date.toLocaleString('en-AU', { 
        timeZone: TIMEZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}


// ===================================
// SMOOTH SCROLL NAVIGATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navMenu = document.querySelector('.nav-menu');
                    const mobileToggle = document.querySelector('.mobile-toggle');
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileToggle.classList.remove('active');
                    }
                }
            }
        });
    });
    
    
    // ===================================
    // STICKY HEADER ON SCROLL
    // ===================================
    
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    
    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .why-card, .testimonial-card, .ba-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    
    // ===================================
    // ACTIVE NAV LINK ON SCROLL
    // ===================================
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
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
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    
    // ===================================
    // CONTACT FORM HANDLING
    // ===================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // In a real implementation, you would send this to a server
            console.log('Form submitted:', data);
            
            // Show success message
            showFormMessage('success', 'Thank you! We\'ll get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
            
            // Redirect to main site after 2 seconds
            setTimeout(() => {
                window.location.href = 'https://hygienexperts.com.au/';
            }, 2000);
        });
    }
    
    function showFormMessage(type, message) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            font-weight: 500;
            text-align: center;
            animation: fadeInUp 0.3s ease;
            ${type === 'success' ? 
                'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
                'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;
        
        // Insert message after form
        contactForm.appendChild(messageDiv);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }
    
    
    // ===================================
    // FORM VALIDATION
    // ===================================
    
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateInput(this);
            }
        });
    });
    
    function validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (input.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation
        if (input.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\+\-\(\)]+$/;
            if (!phoneRegex.test(value) || value.length < 10) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        // Remove existing error
        const existingError = input.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        if (!isValid) {
            input.classList.add('error');
            input.style.borderColor = '#dc3545';
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errorMessage;
            errorDiv.style.cssText = `
                color: #dc3545;
                font-size: 0.875rem;
                margin-top: 0.25rem;
            `;
            input.parentElement.appendChild(errorDiv);
        } else {
            input.classList.remove('error');
            input.style.borderColor = '';
        }
        
        return isValid;
    }
    
    
    // ===================================
    // SCROLL TO TOP FUNCTIONALITY
    // ===================================
    
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #4a9fb5, #357a8f);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(74, 159, 181, 0.3);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 24px rgba(74, 159, 181, 0.4)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 16px rgba(74, 159, 181, 0.3)';
    });
    
    
    // ===================================
    // LAZY LOADING IMAGES
    // ===================================
    
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    
    // ===================================
    // PERFORMANCE: Reduce animations on low-end devices
    // ===================================
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition-fast', '0s');
        document.documentElement.style.setProperty('--transition-base', '0s');
        document.documentElement.style.setProperty('--transition-slow', '0s');
    }
    
    
    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    
    console.log('%c🧹 Hygiene Experts - Premium Cleaning Services', 'font-size: 16px; font-weight: bold; color: #4a9fb5;');
    console.log('%cWebsite developed with care and attention to detail', 'font-size: 12px; color: #7a94a1;');
    console.log('%cVisit: https://hygienexperts.com.au/', 'font-size: 12px; color: #4a9fb5;');
    
});


// ===================================
// ANALYTICS & TRACKING (Placeholder)
// ===================================

// This is where you would integrate Google Analytics, Facebook Pixel, etc.
// Example with timezone consideration:
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID', {
//     'send_page_view': true,
//     'user_properties': {
//         'timezone': 'Australia/Sydney'
//     }
// });
