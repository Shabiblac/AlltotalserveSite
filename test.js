// window.addEventListener('load', () => {
//     const counterElement = document.getElementById('counter');
//     const targetNumber = 1000; // The number to count up to
  
//     let count = 0;
  
//     const interval = setInterval(() => {
//       if (count <= targetNumber) {
//         counterElement.innerText = count;
//         count++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 50); // Interval in milliseconds
//   });


let slideIndex = 0;
const slides = document.querySelectorAll('.review-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

showSlide(slideIndex);

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

  