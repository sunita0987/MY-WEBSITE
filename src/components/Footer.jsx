// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} Sunita | All rights reserved
//         </p>
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <a
//             href="https://github.com/sunita"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-gray-300"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://linkedin.com/in/sunita"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-gray-300"
//           >
//             LinkedIn
//           </a>
//           <a href="mailto:sunita@example.com" className="hover:text-gray-300">
//             Email
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10  ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="../assets/images/logo.jpg" alt="sunita verma" className=" w-20 h-20 rounded-full shadow-lg object-cover border-4 border-white"></img>
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
          <p className="text-sm text-gray-400">
            Email:
            <a href="mailto:sunitaVerma@gmail.com" className="hover:text-white">
              sunitaVerma@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Phone:
            <a href="tel:+91 89293-40064" className="hover:text-white">
              +91 89293-40064
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/sunita"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sunita"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
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
