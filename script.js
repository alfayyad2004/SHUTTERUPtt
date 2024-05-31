document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');

    // Click event for gallery images
    gallery.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            alert('You clicked on an image: ' + event.target.alt);
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gallery slider setup
    const galleryContainer = document.querySelector('.gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    // Check if gallery items exist to prevent errors
    if (galleryItems.length > 0) {
        const itemWidth = galleryItems[0].offsetWidth;

        function updateGallery() {
            const translateX = -currentIndex * itemWidth;
            galleryContainer.style.transition = 'transform 0.3s ease-in-out';
            galleryContainer.style.transform = `translateX(${translateX}px)`;
        }

        function previousSlide() {
            if (currentIndex > 0) {
                currentIndex--;
                updateGallery();
            }
        }

        function nextSlide() {
            if (currentIndex < galleryItems.length - 1) {
                currentIndex++;
                updateGallery();
            }
        }

        // Reset transition after it's completed
        galleryContainer.addEventListener('transitionend', () => {
            galleryContainer.style.transition = 'none';
        });

        // Event listeners for previous and next buttons
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');

        if (prevButton) {
            prevButton.addEventListener('click', previousSlide);
        }
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }

        // Initial gallery setup
        updateGallery();
    }
});

// Function to open the popup
function openPopup() {
    document.getElementById("youtube-popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("youtube-popup").style.display = "none";
}

// Trigger to open the popup, for example, when the page loads
window.onload = openPopup;

