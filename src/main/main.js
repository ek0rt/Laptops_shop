// JavaScript for Laptop Store

// Slider functionality
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
showSlide(currentSlide);

// Add to cart functionality
const cart = [];
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.dataset.product;
        const item = cart.find(p => p.name === product);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name: product, quantity: 1 });
        }
        updateCartDisplay();
    });
});

function updateCartDisplay() {
    console.log('Cart:', cart);
}

// Order form validation
const orderForm = document.querySelector('form');
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(orderForm);
    const order = {
        name: formData.get('name'),
        email: formData.get('email'),
        product: formData.get('product'),
        quantity: parseInt(formData.get('quantity'), 10),
    };
    console.log('Order submitted:', order);
    alert(`Thank you, ${order.name}! Your order for ${order.quantity} ${order.product}(s) has been received.`);
});

// Account functionality
const loginButton = document.getElementById('login');
const logoutButton = document.getElementById('logout');
const usernameDisplay = document.getElementById('username');
let isLoggedIn = false;

logoutButton.addEventListener('click', () => {
    isLoggedIn = false;
    usernameDisplay.textContent = 'Guest';
});

// Contact interaction
const contactInfo = document.querySelector('.contacts');
contactInfo.addEventListener('click', () => {
    alert('Feel free to contact us anytime!');
});
