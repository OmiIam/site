// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY");

// Add form submit handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
        }, function(error) {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
});
