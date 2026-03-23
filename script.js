// Enhanced landing page interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Hero CTA click handler
    document.querySelector('.hero-cta').addEventListener('click', function() {
        // Open Telegram Bot
        window.open('https://t.me/AutomaTONBot', '_blank');
    });
    
    // Parallax effect for floating orb
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const orb = document.querySelector('.floating-orb');
        if (orb) {
            orb.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add glow effect on hover for feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.3)';
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });
    });
});