'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './CityLink.module.css';

const CityLink = ({ city }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCityUrl = (city) => {
    return `/destinations/${city.toLowerCase()}`;
  };

  return (
    <Link 
      href={getCityUrl(city)} 
      className={`${styles.cityLink} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {city}
    </Link>
  );
};

export default CityLink;