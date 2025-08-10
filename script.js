
// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.tech-card, .course-card, .advantage-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    card.style.transition = '0.5s ease-out';
    observer.observe(card);
});

// Code animation in mission section
const codeLines = [
    "def binary_search(arr, target):",
    "    left, right = 0, len(arr) - 1",
    "    while left <= right:",
    "        mid = (left + right) // 2",
    "        if arr[mid] == target:",
    "            return mid",
    "        elif arr[mid] < target:",
    "            left = mid + 1",
    "        else:",
    "            right = mid - 1",
    "    return -1",
    "",
    "# Time Complexity: O(log n)"
];

const codeElement = document.getElementById('code-animation');
let lineIndex = 0;

function typeCode() {
    if (lineIndex < codeLines.length) {
        codeElement.innerHTML += codeLines[lineIndex] + '<br>';
        lineIndex++;
        setTimeout(typeCode, 300);
    } else {
        codeElement.innerHTML = '';
        lineIndex = 0;
        setTimeout(typeCode, 1000);
    }
}

typeCode();

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}
