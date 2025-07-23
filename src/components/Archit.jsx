import React from "react";
import architImg from "../assets/images/sunitaverma.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Archit = () => {
  return (
    <section className="py-12 bg-gray-100" id="archit">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Meet Archit</h2>
        <div className="bg-teal-400 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <img src={architImg} alt="Archit" className="w-40 h-40" />
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-red-700">
              SUNITA VERMA
            </h3>
            <p className="text-gray-600 mt-2">
              front-end Developer | JavaScript | React | Node.js
            </p>
            <p className="mt-4 text-indigo-600">
              Archit is passionate about building scalable web apps and writing
              clean, maintainable code. With strong experience in modern
              frontend frameworks and backend APIs, he brings great value to
              every project.
            </p>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-2xl text-gray-800 hover:text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-2xl text-gray-800 hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archit;
