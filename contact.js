document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    
    // Display alert message
    alert('Your message has been sent successfully!');
    
    // Optionally reset the form
    this.reset();
  });