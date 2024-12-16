const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Cart data
let cart = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/add-to-cart', (req, res) => {
    const { product } = req.body;
    const item = cart.find(p => p.name === product);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: product, quantity: 1 });
    }
    res.json({ message: 'Product added to cart', cart });
});

app.get('/cart', (req, res) => {
    res.json(cart);
});

app.post('/submit-order', (req, res) => {
    const { name, email, product, quantity } = req.body;
    console.log('Order received:', { name, email, product, quantity });
    res.json({ message: `Thank you, ${name}! Your order for ${quantity} ${product}(s) has been received.` });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
