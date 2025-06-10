/**
 * Hero slider with automatic sliding, navigation buttons, and smooth looping
 */

document.addEventListener('DOMContentLoaded', function() {
  const heroSlider = document.getElementById('hero-slider');
  if (!heroSlider) return;

  const heroSlides = heroSlider.querySelectorAll('.scrollbar-item');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  let currentSlide = 0;
  let slideInterval = 5000; // Change slide every 5 seconds
  let autoSlideTimer;
  let isAnimating = false;

  // Add animate class to the first slide initially
  if (heroSlides.length > 0) {
    const firstHeroCard = heroSlides[0].querySelector('.hero-card');
    if (firstHeroCard) {
      firstHeroCard.classList.add('animate');
    }
  }

  // Function to show a specific slide with animation
  function showSlide(index) {
    // Prevent multiple animations at once
    if (isAnimating) return;
    isAnimating = true;

    // Ensure proper looping - handle negative and overflow indices
    if (index < 0) {
      index = heroSlides.length - 1;
    } else if (index >= heroSlides.length) {
      index = 0;
    }

    // Remove animation class from all slides
    heroSlides.forEach(slide => {
      const heroCard = slide.querySelector('.hero-card');
      if (heroCard) {
        heroCard.classList.remove('animate');
      }
    });

    // Update current slide index
    currentSlide = index;

    // Scroll to the slide
    heroSlider.scrollTo({
      left: heroSlides[currentSlide].offsetLeft,
      behavior: 'smooth'
    });

    // Add animation class to the new current slide after a small delay
    setTimeout(() => {
      const newHeroCard = heroSlides[currentSlide].querySelector('.hero-card');
      if (newHeroCard) {
        newHeroCard.classList.add('animate');
      }

      // Reset animation flag after animation completes
      setTimeout(() => {
        isAnimating = false;
      }, 800); // Match this with the CSS animation duration
    }, 100);
  }

  // Function to go to the next slide (with proper looping)
  function goToNextSlide() {
    const nextIndex = (currentSlide + 1) % heroSlides.length;
    showSlide(nextIndex);
  }

  // Function to go to the previous slide (with proper looping)
  function goToPrevSlide() {
    const prevIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(prevIndex);
  }

  // Function to reset the auto-slide timer
  function resetAutoSlideTimer() {
    clearTimeout(autoSlideTimer);
    autoSlideTimer = setTimeout(function() {
      goToNextSlide();
      resetAutoSlideTimer();
    }, slideInterval);
  }

  // Add click event listeners to the navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      goToPrevSlide();
      resetAutoSlideTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      goToNextSlide();
      resetAutoSlideTimer();
    });
  }

  // Pause automatic sliding when user hovers over the slider
  heroSlider.addEventListener("mouseenter", () => {
    clearTimeout(autoSlideTimer);
  });

  // Resume automatic sliding when user leaves the slider
  heroSlider.addEventListener("mouseleave", () => {
    if (!isAnimating) {
      resetAutoSlideTimer();
    }
  });

  // Start the automatic sliding
  resetAutoSlideTimer();
});
