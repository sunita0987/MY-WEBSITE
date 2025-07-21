import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/89293-40064"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition duration-300"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
};

export default WhatsAppButton;
