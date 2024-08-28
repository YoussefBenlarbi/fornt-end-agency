import React from 'react';
import './InfiniteSlider.css';

const InfiniteSlider = () => {
  const images = [
    'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-1.png',
    'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-1.png',
    'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-1.png',
    'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-1.png',
    'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-1.png',
    'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-1.png',
    'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-1.png',
    'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-1.png',
  ];

  return (
    <div className="infinite-slider">
      <div className="slider-track">
        {images.concat(images).map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;