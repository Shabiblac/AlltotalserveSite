window.addEventListener('load', () => {
    const counterElement = document.getElementById('counter');
    const targetNumber = 1000; // The number to count up to
  
    let count = 0;
  
    const interval = setInterval(() => {
      if (count <= targetNumber) {
        counterElement.innerText = count;
        count++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Interval in milliseconds
  });
  