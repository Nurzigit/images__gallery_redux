import React, { useEffect, useState } from 'react';
import LazyImage from '../getLazyImages';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiUrl = 'https://dog.ceo/api/breed/hound/images';
        const response = await fetch(apiUrl);
        const data = await response.json();

  
        setImages(data.message);
      } catch (error) {
        console.error("Failed to fetch images:", `${error}`);
      }
    };
    fetchImages();
  }, []); 

  return (
    <div>
      {images.map((image, index) => (
        <LazyImage key={index} src={image} alt={image} />
      ))}
    </div>
  );
}

export default ImageGallery;
