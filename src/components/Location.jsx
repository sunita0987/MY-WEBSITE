import React from "react";

const Location = () => {
  return (
    <section className="mt-12 px-4 max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold text-center text-fuchsia-700 mb-4">
        📍 My Location
      </h3>
      <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden shadow-lg border">
        <iframe
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13815.652569013532!2d75.7147388!3d29.1491876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123279b0990b03%3A0xc3a42c7fd18a7aa2!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1620214403530!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
        
      </div>
    </section>
  );
};

export default Location;
