"use client";
import React, { useState } from "react";

const images = [
  "https://ar.oneclickstore.com/wp-content/uploads/2021/05/ipad-pro-5-12-inch-space-gray-0-8829999-1-1.jpg",
  "https://ar.oneclickstore.com/wp-content/uploads/2021/04/Watch6_40_SG-G001.jpg",
  "https://ar.oneclickstore.com/wp-content/uploads/2024/04/airpods-pro-2da-gen-con-estuche-magsafe-usb-c.jpg",
  "https://outtec.com.ar/wp-content/uploads/2023/09/1602674429_1598684.jpg",
  "https://www.sagitariodigital.com.ar/wp-content/uploads/2024/04/AIR-M3-9.jpg",
  "https://m.media-amazon.com/images/I/51cPOOgzp0L.jpg",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex justify-center py-10">
      <div className="relative w-4/12 mx-auto">
        <button
          onClick={prevImage}
          aria-label="Previous Image"
          className="absolute left-0 z-10 text-white bg-gray-800 rounded-full p-2 w-10 h-10 transform -translate-y-1/2 hover:bg-orange-500 transition duration-300" // Estilos para el botón
          style={{ top: "50%" }}
        >
          ❮
        </button>

        {images.length > 0 && (
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-auto transition-opacity duration-500 rounded-md shadow-lg hover:scale-105" // Añadidos sombra y efecto de escala
          />
        )}

        <button
          onClick={nextImage}
          aria-label="Next Image"
          className="absolute right-0 z-10 text-white bg-gray-800 rounded-full p-2 w-10 h-10 transform -translate-y-1/2 hover:bg-orange-500 transition duration-300" // Estilos para el botón
          style={{ top: "50%" }}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
