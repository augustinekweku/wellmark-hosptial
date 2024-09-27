import React, { useState, useEffect } from "react";
import styles from "./ImageChanger.module.css";

type ImageChangerProps = {
  images: string[];
  interval: number; // time interval in milliseconds
};

const ImageChanger: React.FC<ImageChangerProps> = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Half of the transition duration
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className={"d-flex align-items-center justify-content-center"}>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        className={`hero-image ${styles.image} ${
          fade ? styles.fadeIn : styles.fadeOut
        }`}
      />
    </div>
  );
};

export default ImageChanger;
