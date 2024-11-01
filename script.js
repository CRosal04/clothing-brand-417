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

///Contact-us

//form messages
function validateForm(event) {
    event.preventDefault(); // Prevent form submission to validate first

    // Retrieve input elements
    let uName = document.getElementById("name");
    let Lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let phonE = document.getElementById("phonenum");
    let Phone = document.getElementById("Phone");
    let Email = document.getElementById("Email");
    let Text = document.getElementById("text");

    // Container to display the chosen contact method
    let contact = document.getElementById("contact");

    // Reset visibility for contact output and clear any previous errors
    contact.classList.add("hidden");
    contact.innerHTML = "";

    // Regular expressions for validation
    let uNameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    let LnameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    let phonERegex = /^(1[ -]?)?\d{3}[ -]?\d{3}[ -]?\d{4}$/;

    // Reset error states on inputs
    uName.classList.remove("error");
    Lname.classList.remove("error");
    email.classList.remove("error");
    phonE.classList.remove("error");

    // Hide previous error messages
    uName.nextElementSibling.classList.add("hidden");
    Lname.nextElementSibling.classList.add("hidden");
    email.nextElementSibling.classList.add("hidden");
    phonE.nextElementSibling.classList.add("hidden");

    let isValid = true;

    // Validation for each field with feedback if invalid
    if (!uNameRegex.test(uName.value)) {
        isValid = false;
        uName.classList.add("error");
        uName.nextElementSibling.classList.remove("hidden");
    }
    if (!LnameRegex.test(Lname.value)) {
        isValid = false;
        Lname.classList.add("error");
        Lname.nextElementSibling.classList.remove("hidden");
    }
    if (!emailRegex.test(email.value)) {
        isValid = false;
        email.classList.add("error");
        email.nextElementSibling.classList.remove("hidden");
    }
    if (!phonERegex.test(phonE.value)) {
        isValid = false;
        phonE.classList.add("error");
        phonE.nextElementSibling.classList.remove("hidden");
    }

    // Determine selected contact method

    if (Phone.checked) {
        Contact= "Phone";
        contact.classList.remove("hidden");
        contact.innerHTML = "We will contact you via Phone";
    } else if (Email.checked) {
        Contact = "Email";
        contact.classList.remove("hidden");
        contact.innerHTML = "We will contact you via Email";
    } else if (Text.checked) {
        Contact= "Text";
        contact.classList.remove("hidden");
        contact.innerHTML = "We will contact you via Text";
    } else {
        // If no contact method is selected, mark the form as invalid
        isValid = false;
        contact.classList.remove("hidden");
        contact.innerHTML = "Please select a preferred contact method";
    }

    // If the form is valid, submit and reset fields
    if (isValid) {
        alert("Form submitted successfully!"); // For demonstration only
        document.getElementById("newAcct").submit();

        // Clear input fields and reset form
        uName.value = "";
        Lname.value = "";
        email.value = "";
        phonE.value = "";
        Phone.checked = false;
        Email.checked = false;
        Text.checked = false;
    }
}
  // event listeners
  document.getElementById("newAcct").addEventListener("submit", validateForm);