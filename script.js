//Dark mode

        const toggleBtn = document.getElementById('toggle-btn');
        const body = document.body;

        // Check if the user already has a preferred mode from localStorage
        const currentMode = localStorage.getItem('theme');
        if (currentMode === 'dark') {
            body.classList.add('dark-mode');
            toggleBtn.textContent = 'Switch to Light Mode';
        }

        // Add an event listener to the button to toggle the dark mode
        toggleBtn.addEventListener('click', function () {
            body.classList.toggle('dark-mode');

            // Update the button text
            if (body.classList.contains('dark-mode')) {
                toggleBtn.textContent = 'Switch to Light Mode';
                // Save the user preference to localStorage
                localStorage.setItem('theme', 'dark');
            } else {
                toggleBtn.textContent = 'Switch to Dark Mode';
                localStorage.setItem('theme', 'light');
            }
        });


///Product display
function showProduct(name, image, description) {
    // Update the displayed product information
    document.getElementById('product-name').textContent = name;
    document.getElementById('product-image').src = image;
    document.getElementById('product-description').textContent = description;
}

// Show the default product on page load
window.onload = function() {
    showProduct('Default Product', 'https://via.placeholder.com/250', 'This is the default product description. Choose a product to view its details.');
};

////Shopping cart
let productTotal = 0;
const taxRate = 0.10;
const shippingCost = 10.00;

function addToCart(price) {
    productTotal += price;
    updateCart();
}

function updateCart() {
    const taxAmount = productTotal * taxRate;
    const totalPrice = productTotal + taxAmount + shippingCost;

    document.getElementById("productTotal").textContent = productTotal.toFixed(2);
    document.getElementById("taxAmount").textContent = taxAmount.toFixed(2);
    document.getElementById("shippingAmount").textContent = shippingCost.toFixed(2);
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}

function checkout() {
    if (productTotal === 0) {
        document.getElementById("message").textContent = "Your cart is empty! Please add something to the cart before you check out.";
    } else {
        const finalPrice = document.getElementById("totalPrice").textContent;
        document.getElementById("message").textContent = `Thank you for your order! Your total cost is $${finalPrice}.`;
        clearCart();
    }
}

function clearCart() {
    productTotal = 0;
    updateCart();
}

///Contact-us