document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');
    const text = textElement.textContent;
    textElement.textContent = '';
  
    for (let i = 0; i < text.length; i++) {
      setTimeout(function() {
        textElement.textContent += text[i];
        textElement.style.opacity = 1;
      }, 100 * i);
    }
  });
  