"use client"; // Necessary for client-side code execution

import React, { useState } from "react";

// Image component with error handling
const ClientSideImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  // Fallback to placeholder image if the original fails to load
  const handleError = () => {
    setImgSrc("/images/placeholderCard.jpg");
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default ClientSideImage;
