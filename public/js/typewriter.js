const text = 'A place for sharing your coding journey.';
const speed = 100;
let index = 0;

function typeWriter() {
  if (index < text.length) {
    const typedText = document.getElementById('typing-text');
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);

    // Move the cursor with the typed text
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${typedText.clientWidth}px`;
  } else {
    setTimeout(() => {
      index = 0;
      document.getElementById('typing-text').textContent = '';
      typeWriter();
    }, 1000);
  }
}

typeWriter();