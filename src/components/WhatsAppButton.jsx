import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '+18622675752';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappUrl} className="whatsapp-button" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;