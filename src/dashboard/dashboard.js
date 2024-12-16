// Dashboard logic

document.addEventListener('DOMContentLoaded', () => {
    // Mock data
    const cartItems = [
        { name: 'Laptop 1', price: '$1000' },
        { name: 'Laptop 2', price: '$1200' }
    ];

    const purchaseHistory = [
        { name: 'Laptop 3', price: '$1500', date: '2024-04-10' },
        { name: 'Laptop 1', price: '$1000', date: '2024-03-15' }
    ];

    const profileInfo = {
        name: 'John Doe',
        email: 'johndoe@example.com'
    };

    // Load Cart Items
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    if (cartItems.length === 0) {
        cartList.innerHTML = '<li>No items in the cart</li>';
    } else {
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            cartList.appendChild(li);
        });
    }

    // Load Purchase History
    const historyList = document.getElementById('purchase-history');
    historyList.innerHTML = '';
    if (purchaseHistory.length === 0) {
        historyList.innerHTML = '<li>No past purchases</li>';
    } else {
        purchaseHistory.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} (Purchased on ${item.date})`;
            historyList.appendChild(li);
        });
    }

    // Load Profile Info
    const profileSection = document.getElementById('profile-info');
    profileSection.innerHTML = `
        <p><strong>Name:</strong> ${profileInfo.name}</p>
        <p><strong>Email:</strong> ${profileInfo.email}</p>
    `;
});
