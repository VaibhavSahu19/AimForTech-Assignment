import React, { useState, useEffect } from 'react';
import Component1 from '../Component1';
import Component2 from '../Component2';
import Component3 from '../Component3';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the components array
  const components = [<Component1 />, <Component2 />, <Component3 />];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === components.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? components.length - 1 : prevIndex - 1));
  };

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='relative'>
      {components.map((component, index) => (
        <div className='flex transition-transform duration-800 ease-in-out' key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          {component}
        </div>
      ))}
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black rounded-[50%]" onClick={prevSlide}>
        <img src="./Hero/arrow-circle-left.svg" alt="previous" />
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black rounded-[50%]" onClick={nextSlide}>
        <img src="./Hero/arrow-circle-right.svg" alt="next" />
      </button>
    </div>
  );
};

export default Carousel;
