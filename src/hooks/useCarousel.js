import { useState, useEffect } from 'react';

export const useCarousel = (totalSlides, autoPlayInterval = 5000) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [totalSlides, autoPlayInterval]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setActiveSlide((current) => (current - 1 + totalSlides) % totalSlides);
  };

  return {
    activeSlide,
    goToSlide,
    goToNextSlide,
    goToPrevSlide
  };
}; 