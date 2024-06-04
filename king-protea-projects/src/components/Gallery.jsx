// src/components/Gallery.jsx
import React from 'react';
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
    { src: '/images/10.jpg', alt: 'Design 10' },
    { src: '/images/11.jpg', alt: 'Design 11' },
    { src: '/images/12.jpg', alt: 'Design 12' },
    { src: '/images/13.jpg', alt: 'Design 13' },
    { src: '/images/14.jpg', alt: 'Design 14' },
    { src: '/images/15.png', alt: 'Design 15' }
    
  ];

  return (
    <section id="gallery">
      <h1>Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;