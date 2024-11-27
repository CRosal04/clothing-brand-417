//Dark mode

        const toggleBtn = document.getElementById('toggle-btn');
        const body = document.body;
        const currentMode = localStorage.getItem('theme');
        if (currentMode === 'dark') {
            body.classList.add('dark-mode');
            toggleBtn.textContent = 'Switch to Light Mode';
        }

     
        toggleBtn.addEventListener('click', function () {
            body.classList.toggle('dark-mode');

            // Update the button text
            if (body.classList.contains('dark-mode')) {
                toggleBtn.textContent = 'Switch to Light Mode';
                
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
    showProduct('nopalera shirt', 'images/la nopals2.jpeg', 'Our Loteria-Inspired Shirt is an iconic tribute to a beloved Mexican culture.');
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

///Contact-us(need help here )

//form messages
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form elements
    const uName = document.getElementById("name");
    const Lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phonE = document.getElementById("phonenum");
    const Phone = document.getElementById("Phone");
    const Email = document.getElementById("Email");
    const Text = document.getElementById("text");

    // Error messages
    const nameError = document.getElementById("name-error");
    const lnameError = document.getElementById("lname-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phonenum-error");
    const contactError = document.getElementById("contact-error");
    const contactMessage = document.getElementById("contact");

    // Regex patterns
    const nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    const phoneRegex = /^(1[ -]?)?\d{3}[ -]?\d{3}[ -]?\d{4}$/;

    // Reset error states
    let isValid = true;
    nameError.classList.add("hidden");
    lnameError.classList.add("hidden");
    emailError.classList.add("hidden");
    phoneError.classList.add("hidden");
    contactError.classList.add("hidden");
    contactMessage.classList.add("hidden");
    uName.classList.remove("error");
    Lname.classList.remove("error");
    email.classList.remove("error");
    phonE.classList.remove("error");

    // Validation in each field
    if (!nameRegex.test(uName.value)) {
        isValid = false;
        uName.classList.add("error");
        nameError.classList.remove("hidden");
    }

    if (!nameRegex.test(Lname.value)) {
        isValid = false;
        Lname.classList.add("error");
        lnameError.classList.remove("hidden");
    }

    if (!emailRegex.test(email.value)) {
        isValid = false;
        email.classList.add("error");
        emailError.classList.remove("hidden");
    }

    if (!phoneRegex.test(phonE.value)) {
        isValid = false;
        phonE.classList.add("error");
        phoneError.classList.remove("hidden");
    }

    // Validate contact method selection
    if (Phone.checked) {
        contactMessage.classList.remove("hidden");
        contactMessage.style.color = "green";
        contactMessage.innerHTML = "We will contact you via Phone";
    } else if (Email.checked) {
        contactMessage.classList.remove("hidden");
        contactMessage.style.color = "green";
        contactMessage.innerHTML = "We will contact you via Email";
    } else if (Text.checked) {
        contactMessage.classList.remove("hidden");
        contactMessage.style.color = "green";
        contactMessage.innerHTML = "We will contact you via Text";
    } else {
        isValid = false;
        contactError.classList.remove("hidden");
        contactError.innerHTML = "Please select a preferred contact method";
    }

    // Final check
   if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("newAcct").submit();
    }
}


// Attach event listener to the form
document.getElementById("newAcct").addEventListener("submit", validateForm);
