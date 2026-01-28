// Quick View Modal Functions
function quickView(button) {
    const productCard = button.closest('.product-card');
    const title = productCard.querySelector('.product-info h3').textContent;
    const price = productCard.querySelector('.price').textContent;
    const description = productCard.querySelector('.description').textContent;
    const rating = productCard.querySelector('.rating').innerHTML;
    const image = productCard.querySelector('.product-image img').src;

    // Populate modal with product data
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalRating').innerHTML = rating;
    document.getElementById('modalImage').src = image;

    // Show modal
    const modal = document.getElementById('quickViewModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('quickViewModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.addEventListener('click', function (event) {
    const modal = document.getElementById('quickViewModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
        }
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        this.reset();
    }
});

// Add to cart functionality
document.querySelectorAll('.modal-info .btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        const quantity = document.querySelector('.modal-options input[type="number"]').value;
        const title = document.getElementById('modalTitle').textContent;
        alert(`Added ${quantity} x ${title} to cart!`);
        closeModal();
    });
});

// Customize button
document.querySelectorAll('.modal-info .btn-outline').forEach(button => {
    button.addEventListener('click', function () {
        alert('Redirecting to customization page...');
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card, .feature-card, .review-card, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active nav link indicator
window.addEventListener('scroll', function () {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Search functionality
document.querySelector('.fa-search').addEventListener('click', function () {
    const searchQuery = prompt('What are you looking for?');
    if (searchQuery) {
        alert(`Searching for: ${searchQuery}`);
    }
});

// Wishlist functionality
document.querySelector('.fa-heart').addEventListener('click', function () {
    this.style.color = '#e74c3c';
    alert('Added to wishlist!');
});

// Cart functionality
document.querySelector('.fa-shopping-cart').addEventListener('click', function () {
    alert('Opening shopping cart...');
});

// Lazy load images (optional enhancement)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// Mobile menu toggle (for future mobile menu implementation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

// Log initial page load
console.log('Homora - Premium Home Décor & Furniture Website');
console.log('Website loaded successfully!');
