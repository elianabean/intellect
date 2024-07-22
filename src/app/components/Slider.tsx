import React, { useState } from 'react';

interface SliderProps {
  components: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevIndex = (currentIndex - 1 + components.length) % components.length;
  const nextIndex = (currentIndex + 1) % components.length;

  return (
    <div className="relative w-full h-80 flex items-center">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 cursor-pointer z-10"
        onClick={handlePrev}
      >
        ◀
      </button>
      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <div
          className={`absolute w-1/3 h-full transition-opacity duration-500 ease-in-out ${
            currentIndex === (prevIndex + 1) % components.length ? 'opacity-50 blur-sm' : 'opacity-100'
          }`}
          style={{ transform: 'translateX(-100%)' }}
        >
          {components[prevIndex]}
        </div>
        <div
          className="relative w-1/3 h-full"
          style={{ zIndex: 1 }}
        >
          {components[currentIndex]}
        </div>
        <div
          className={`absolute w-1/3 h-full transition-opacity duration-500 ease-in-out ${
            currentIndex === (nextIndex - 1 + components.length) % components.length ? 'opacity-50 blur-sm' : 'opacity-100'
          }`}
          style={{ transform: 'translateX(100%)' }}
        >
          {components[nextIndex]}
        </div>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 cursor-pointer z-10"
        onClick={handleNext}
      >
        ▶
      </button>
    </div>
  );
};

export default Slider;
