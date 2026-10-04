// --- Smooth Scrolling for Internal Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// --- Dynamic Typewriter Effect ---
const roles = [
    "IT Support Engineer",
    "Network Infrastructure Specialist",
    "Cybersecurity & PenTest Enthusiast",
    "CCNA Certified"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const waitTime = 2000;
const typewriterEl = document.getElementById("typewriter");

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, waitTime);
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? deleteSpeed : typeSpeed);
}

// --- Back to Top Button ---
window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// --- Visitor Counter (Preserving your original feature) ---
function initCounter() {
    let count = parseInt(localStorage.getItem('visitCount')) || 0;
    if (!sessionStorage.getItem('sessionCounted')) {
        count++;
        localStorage.setItem('visitCount', count);
        sessionStorage.setItem('sessionCounted', 'true');
    }
    const counterDisplay = document.getElementById('local-counter');
    if (counterDisplay) {
        counterDisplay.textContent = `[Session telemetry: ${count} local visits logged]`;
    }
}

// --- Initialize On Load ---
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    initCounter();
});
