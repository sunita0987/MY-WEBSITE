import React from "react";
import profileImg from "../assets/images/logo.jpg";

const Hero = () => {
  return (
    <section className="bg-black py-16 px-4 rounded-2xl">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-fuchsia-600">
            Hi, I'm Sunita
          </h1>
          <p className="text-lg md:text-xl text-sky-700 mb-6">
            Front-End Developer 
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <img
            src={profileImg}
            alt="Sunita"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
