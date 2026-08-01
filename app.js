// JavaScript functionality for form handling and user feedback

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      
      alert(`Thank you for reaching out, ${name}! Your message has been successfully recorded.`);
      
      this.reset();
    });
  }
});
