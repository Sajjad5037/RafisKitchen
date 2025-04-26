<<<<<<< HEAD
// src/components/ImageCarousel.js
import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
    "file:///C:/Users/Admin/Desktop/Rafis%20Kitchen%20photos/changing%20images/1.jpg",
    "file:///C:/Users/Admin/Desktop/Rafis%20Kitchen%20photos/changing%20images/2.jpg",
    "file:///C:/Users/Admin/Desktop/Rafis%20Kitchen%20photos/changing%20images/3.jpg",
    "file:///C:/Users/Admin/Desktop/Rafis%20Kitchen%20photos/changing%20images/4.jpg",
    "file:///C:/Users/Admin/Desktop/Rafis%20Kitchen%20photos/changing%20images/5.jpg"
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
=======
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
>>>>>>> 1f0e8729835fb96e9dc84d0b96c355b7c5b800cd
