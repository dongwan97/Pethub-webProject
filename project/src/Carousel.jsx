import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transitionRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [children]);

  useEffect(() => {
    if (transitionRef.current) {
      transitionRef.current.style.transition = "transform 0.5s ease-in-out";
      transitionRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="carousel-inner" ref={transitionRef}>
        {children.map((child, index) => (
          <div key={index} className="carousel-slide">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
