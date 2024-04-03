// src/components/LazyImage.js
import React, { useRef } from 'react';
import useIntersectionObserver from '../../hook/useIntersectionObserver';

const LazyImage = ({ src, alt }) => {
  const imgRef = useRef();
  const isVisible = useIntersectionObserver(imgRef, {});

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ''}
      alt={alt}
      style={{ width: '400px', height: '500px' }}
      loading="lazy"
    />
  );
};

export default LazyImage;
