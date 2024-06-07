import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/Gallery.css';

const Gallery = () => {
  const images = [
    { src: '/images/1.jpg', alt: 'Design 1' },
    { src: '/images/2.png', alt: 'Design 2' },
    { src: '/images/3.jpg', alt: 'Design 3' },
    { src: '/images/4.jpg', alt: 'Design 4' },
    { src: '/images/5.jpg', alt: 'Design 5' },
    { src: '/images/6.jpg', alt: 'Design 6' },
    { src: '/images/7.jpg', alt: 'Design 7' },
    { src: '/images/8.jpg', alt: 'Design 8' },
    { src: '/images/9.jpg', alt: 'Design 9' },
    { src: '/images/12.jpg', alt: 'Design 12' },
    { src: '/images/13.jpg', alt: 'Design 13' },
    { src: '/images/14.jpg', alt: 'Design 14' },
    { src: '/images/15.png', alt: 'Design 15' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <section id="gallery" {...handlers}>
      <h1>Gallery</h1>
      <div className="gallery">
        <div className="gallery-image">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
