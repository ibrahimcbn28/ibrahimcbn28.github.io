document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let counter = 0;
    const size = images[0].clientWidth;

    function moveCarousel() {
        carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) return;
        counter++;
        moveCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        moveCarousel();
    });

    // Otomatik kaydırma
    setInterval(() => {
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        moveCarousel();
    }, 3000); // 3 saniyede bir geçiş yapar
});
