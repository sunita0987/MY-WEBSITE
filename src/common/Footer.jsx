import React from "react";
import profileImg from "../assets/images/logo.jpg";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10  ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src={profileImg}
            alt="Sunita"
            className="w-20 h-20 object-cover rounded-full shadow-lg border-4 border-red-600"
          />

          <p className="text-sm text-white">
            Hello! I'm Developer Sunita Verma — a passionate front-end developer
            with a Bachelor's degree in Computer Applications (BCA) from DN
            College, Hisar (2024).
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-sm text-white">
            Email:
            <a href="mailto:SunitaVerma@gmail.com" className="hover:text-white">
              SunitaVerma@gmail.com
            </a>
          </p>
          <p className="text-sm text-white mt-2">
            Phone:
            <a href="tel:+91 89293-40064" className="hover:text-gray-600">
              +91 89293-40064
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/sunita0987"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-600"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sunita"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-600"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Sunitaverm69161"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-700"
            >
              twitter
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8 cursor-pointer hover:text-white">
        &copy; Sunita | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
