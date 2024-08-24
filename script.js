// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the fade-in class
    const fadeInElements = document.querySelectorAll('.fade-in');
  
    // Add a delay to each element so they fade in one after the other
    fadeInElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 500); // Delay increases by 500ms for each element
    });
  });
  