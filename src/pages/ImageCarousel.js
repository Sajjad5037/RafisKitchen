// src/components/ImageCarousel.js
import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
  "https://i.imgur.com/emCzB1b.jpg",
  "https://i.imgur.com/iSJ62mP.jpg",
  "https://i.imgur.com/Pfrvwic.jpg",
  "https://i.imgur.com/TFe85yO.jpg"
];

  const [currentImage, setCurrentImage] = useState(0);

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[currentImage]}
        alt="Rafi Kitchen"
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />
    </div>
  );
};

export default ImageCarousel;
