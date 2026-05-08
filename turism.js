// Get the send button and form
const sendBtn = document.getElementById('sendBtn');
const contactForm = document.getElementById('contactForm');

// Add click event listener to the button
sendBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Change button text to "Thank You!"
    sendBtn.textContent = 'Sent!';
    
    // Change button color to green
    sendBtn.style.backgroundColor = '#27ae60';
    
    // Disable the button so it can't be clicked again
    sendBtn.disabled = true;
    
    // Clear all form fields
    contactForm.reset();
    
    // Optional: Revert back to "Send Message" after 3 seconds
    setTimeout(function() {
        sendBtn.textContent = 'Send Message';
        sendBtn.style.backgroundColor = '';
        sendBtn.disabled = false;
    }, 3000);
});
