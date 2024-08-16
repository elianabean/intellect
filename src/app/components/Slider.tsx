import React, { useState } from 'react';

interface SliderProps {
  components: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setDirection] = useState(0);

  const handlePrev = () => {
    if (animationDirection === 0) {
      setDirection(-1);
    }
  };

  const handleNext = () => {
    if (animationDirection === 0) {
      setDirection(1);
    }
  };

  const endAnimation = () => {
    if (animationDirection === 1) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? components.length - 1 : prevIndex - 1
      );
    } else if (animationDirection === -1) {
      setCurrentIndex((prevIndex) =>
        prevIndex === components.length - 1 ? 0 : prevIndex + 1
      );
    }
    setDirection(0);
  };

  const prevIndex = (currentIndex - 1 + components.length) % components.length;
  const nextIndex = (currentIndex + 1) % components.length;

  return (
    <div className="relative flex flex-col gap-5 items-center z-50">
        <div
          className="absolute flex 100vh items-center pointer-events-none cursor-default"
          style={{ top: '-50%', transform: 'translateY(50%) scale(0.6)', animation: animationDirection == -1 ? 'slideDownFromOut 0.5s ease 0s 1 normal forwards' : '', filter: "blur(4px)", opacity: "0"
          }}
        >
          {components[prevIndex == 0 ? components.length - 1 : prevIndex - 1]}
        </div>
        
        <div
          className="absolute flex 100vh items-center"
          onAnimationEnd={() => endAnimation()}
          style={{ top: '0%', transform: 'translateY(0%) scale(0.6)', animation: animationDirection == 1 ? 'slideUpFromTop 0.5s ease 0s 1 normal forwards' : (animationDirection == -1 ? 'slideDownFromTop 0.5s ease 0s 1 normal forwards' : ''), filter: "blur(4px)", opacity: "0.5"
          }}
        >
          {components[prevIndex]}
        </div>

        <button
          className="absolute text-white p-2 cursor-pointer z-10"
          style={{ top: 'calc(50% - 120px)' }}
          onClick={() => handlePrev()}
        >
          <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1901_3041)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5873 25.024C37.9569 25.6489 37.1021 26 36.2108 26C35.3195 26 34.4647 25.6489 33.8343 25.024L22.7654 14.0465L11.6965 25.024C11.0626 25.6312 10.2135 25.9672 9.33214 25.9596C8.4508 25.952 7.60774 25.6014 6.98452 24.9834C6.3613 24.3653 6.00779 23.5292 6.00013 22.6551C5.99247 21.7811 6.33127 20.939 6.94357 20.3103L20.389 6.97602C21.0193 6.35108 21.8741 6 22.7654 6C23.6567 6 24.5115 6.35108 25.1419 6.97602L38.5873 20.3103C39.2174 20.9354 39.5714 21.7832 39.5714 22.6671C39.5714 23.5511 39.2174 24.3988 38.5873 25.024Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_1901_3041" x="0" y="0" width="53.5713" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="4" dy="4"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1901_3041"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1901_3041" result="shape"/>
            </filter>
            </defs>
          </svg>

        </button>

        <div
          className="absolute flex 100vh items-center"
          style={{ top: '50%', transform: 'translateY(-50%) scale(0.7)', animation: animationDirection == 1 ? 'slideUpFromMid 0.5s ease 0s 1 normal forwards' : (animationDirection == -1 ? 'slideDownFromMid 0.5s ease 0s 1 normal forwards' : '') }}
          onAnimationEnd={() => endAnimation()}
        >
          {components[currentIndex]}
        </div>

        <button
          className="absolute text-white p-2 cursor-pointer z-10"
          style={{ top: 'calc(50% + 73px)' }}
          onClick={() => handleNext()}
        >
          <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1901_3039)">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M6.98402 6.97602C7.61436 6.35108 8.46918 6 9.36049 6C10.2518 6 11.1066 6.35108 11.737 6.97602L22.8059 17.9535L33.8748 6.97602C34.5087 6.36879 35.3578 6.03278 36.2392 6.04038C37.1205 6.04797 37.9636 6.39856 38.5868 7.01663C39.21 7.6347 39.5635 8.47081 39.5712 9.34486C39.5788 10.2189 39.24 11.061 38.6277 11.6897L25.1823 25.024C24.552 25.6489 23.6972 26 22.8059 26C21.9146 26 21.0597 25.6489 20.4294 25.024L6.98402 11.6897C6.35386 11.0646 5.99986 10.2168 5.99986 9.33286C5.99986 8.44892 6.35386 7.60116 6.98402 6.97602Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_1901_3039" x="0" y="0" width="53.5713" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1901_3039"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1901_3039" result="shape"/>
              </filter>
            </defs>
          </svg>
      	</button>

        <div
          className="absolute flex 100vh items-center"
          onAnimationEnd={() => endAnimation()}
          style={{ top: '100%', transform: 'translateY(-100%) scale(0.6)', animation: animationDirection == 1 ? 'slideUpFromBottom 0.5s ease 0s 1 normal forwards' : (animationDirection == -1 ? 'slideDownFromBottom 0.5s ease 0s 1 normal forwards' : ''), filter: "blur(4px)", opacity: "0.5"}}
        >
          {components[nextIndex]}
        </div>

        <div
          className="absolute flex 100vh items-center pointer-events-none cursor-default"
          style={{ top: '150%', transform: 'translateY(-150%) scale(0.6)', animation: animationDirection == 1 ? 'slideUpFromOut 0.5s ease 0s 1 normal forwards' : '', filter: "blur(4px)", opacity: "0"
          }}
        >
          {components[nextIndex == components.length - 1 ? 0 : nextIndex + 1]}
        </div>
    </div>
  );
};

export default Slider;
