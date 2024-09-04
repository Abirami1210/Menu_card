// Initialize an empty cart
const cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        // Increase quantity if item is already in the cart
        existingItem.quantity++;
    } else {
        // Add new item to the cart
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Update the cart display and summary
    updateCartDisplay();
    updateCartSummary();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // Clear existing cart display

    // Iterate through the cart and add each item to the display
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} x ${item.quantity}`;
        cartElement.appendChild(listItem);
    });
}

// Function to update the cart summary
function updateCartSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const cartSummary = document.getElementById('cart-summary');
    cartSummary.textContent = `Total Items: ${totalItems} Total Price: $${totalPrice.toFixed(2)}`;
}
