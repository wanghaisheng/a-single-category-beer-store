import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Image {
  src: string;
  duration: number;
}

interface HeroSliderProps {
  images: Image[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const duration = images[currentIndex]?.duration || 3000;

    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setKey((prevKey) => prevKey + 1);
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentIndex, images]);

  return (
    <div className="slideshow-container relative w-full h-auto">
      {images.map((image, index) => (
        <motion.img
          key={`${image.src}?key=${key}-${index}`}
          src={`${image.src}?key=${key}-${index}`}
          className="w-full h-screen max-h-[600px] object-cover opacity-0 rounded-[30px] absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          alt={`Slideshow image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroSlider;