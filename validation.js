document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (contactForm.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // You can send the form data to your server or perform other actions here
            alert("Form submitted successfully!");
        }

        contactForm.classList.add("was-validated");
    });

    // Optional: You can add custom validation rules using JavaScript if needed.
});
