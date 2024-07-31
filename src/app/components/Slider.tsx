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
    <div className="relative flex align-items-center" style={{ justifyContent: 'space-between' }}>
        <div
          className="absolute flex 100vh items-center opacity-50"
          style={{ left: '-50%', transform: 'translateX(50%) scale(0.7)', animation: animationDirection == -1 ? 'slideFromOutToRight 0.5s ease 0s 1 normal forwards' : '', filter: "blur(4px)", opacity: "0.5"
          }}
        >
          {components[prevIndex == 0 ? components.length - 1 : prevIndex - 1]}
        </div>
        
        <div
          className="relative flex 100vh items-center transition-opacity duration-500 ease-in-out opacity-50"
          onAnimationEnd={() => endAnimation()}
          style={{ transform: 'scale(0.7)', animation: animationDirection == 1 ? 'slideFromRightToOut 0.5s ease 0s 1 normal forwards' : (animationDirection == -1 ? 'slideToLeftFadeIn 0.5s ease 0s 1 normal forwards' : ''), filter: "blur(4px)", opacity: "0.5"
          }}
        >
          {components[prevIndex]}
        </div>

        <button
          className="relative top-1/2 transform text-white p-2 cursor-pointer z-10"
          onClick={() => handlePrev()}
        >
          <svg width="59" height="68" viewBox="0 0 59 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Vector" filter="url(#filter0_d_1316_506)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0968 7.38057C44.3154 8.26482 45 9.46396 45 10.7143C45 11.9646 44.3154 13.1638 43.0968 14.048L21.6907 29.5756L43.0968 45.1031C44.2809 45.9924 44.9361 47.1835 44.9213 48.4199C44.9065 49.6562 44.2228 50.8389 43.0176 51.7132C41.8123 52.5874 40.1819 53.0833 38.4775 53.0941C36.7731 53.1048 35.1311 52.6295 33.9051 51.7706L7.90325 32.9093C6.6846 32.0251 6 30.8259 6 29.5756C6 28.3252 6.6846 27.1261 7.90325 26.2418L33.9051 7.38057C35.1241 6.49658 36.7772 5.99998 38.5009 5.99998C40.2246 5.99998 41.8777 6.49658 43.0968 7.38057Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_1316_506" x="0" y="0" width="59" height="67.0942" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              l	<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1316_506"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1316_506" result="shape"/>
              </filter>
            </defs>
          </svg>

        </button>

        <div
          className="relative flex 100vh items-center h-full"
          style={{ zIndex: 1, animation: animationDirection == 1 ? 'slideToRightFadeOut 0.5s ease 0s 1 normal forwards' : (animationDirection == -1 ? 'slideToLeftFadeOut 0.5s ease 0s 1 normal forwards' : '') }}
          onAnimationEnd={() => endAnimation()}
        >
          {components[currentIndex]}
        </div>

        <button
          className="relative top-1/2 transform text-white p-2 cursor-pointer z-10"
          onClick={() => handleNext()}
        >
          <svg width="59" height="68" viewBox="0 0 59 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1316_507)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.90325 51.7137C6.6846 50.8294 6 49.6303 6 48.3799C6 47.1296 6.6846 45.9305 7.90325 45.0462L29.3093 29.5187L7.90325 13.9911C6.71914 13.1018 6.06392 11.9107 6.07873 10.6743C6.09355 9.43801 6.77719 8.25535 7.98243 7.38109C9.18767 6.50683 10.8181 6.01092 12.5225 6.00018C14.2269 5.98943 15.8689 6.46471 17.0949 7.32365L43.0968 26.1849C44.3154 27.0692 45 28.2683 45 29.5187C45 30.769 44.3154 31.9681 43.0968 32.8524L17.0949 51.7137C15.8759 52.5977 14.2228 53.0943 12.4991 53.0943C10.7754 53.0943 9.12227 52.5977 7.90325 51.7137Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_1316_507" x="0" y="0" width="59" height="67.0942" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1316_507"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1316_507" result="shape"/>
              </filter>
            </defs>
          </svg>
      	</button>

        <div
          className="relative flex 100vh items-center h-full transition-opacity duration-500 ease-in-out opacity-50 blur-sm"
          onAnimationEnd={() => endAnimation()}
          style={{ transform: 'scale(0.7)', animation: animationDirection == 1 ? 'slideToRightFadeIn 0.5s ease 0s 1 normal forwards' : (animationDirection == -1 ? 'slideFromLeftToOut 0.5s ease 0s 1 normal forwards' : ''), filter: "blur(4px)", opacity: "0.5"}}
        >
          {components[nextIndex]}
        </div>

        <div
          className="absolute flex 100vh items-center opacity-50"
          style={{ left: '150%', transform: 'translateX(-150%) scale(0.7)', animation: animationDirection == 1 ? 'slideFromOutToLeft 0.5s ease 0s 1 normal forwards' : '', filter: "blur(4px)", opacity: "0.5"
          }}
        >
          {components[nextIndex == components.length - 1 ? 0 : nextIndex + 1]}
        </div>
    </div>
  );
};

export default Slider;
