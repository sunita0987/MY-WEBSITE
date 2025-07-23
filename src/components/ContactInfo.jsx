import React from "react";

const ContactInfo = () => {
  return (
    <div className="max-w-xl mx-auto text-center mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-2">
        📞
        <a href="tel:+919929340064" className="text-blue-600 hover:underline">
          +91 89293 40064
        </a>
      </p>
      <p className="text-lg text-gray-700 mb-2">
        ✉️
        <a
          href="mailto:youremail@example.com"
          className="text-blue-600 hover:underline"
        >
          sunitaverma@gmail.com
        </a>
      </p>
      <p className="text-lg text-gray-700 mb-2">
        🏠
        <span className="text-gray-800">Bhiwani</span>
      </p>
      <p className="text-lg text-gray-700 mb-2">
        🌐
        <a
          href="https://my-website-iota-livid.vercel.app/"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          MyWebsite
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
