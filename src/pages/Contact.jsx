import React from "react";

const Contact = () => {
  return (
    <section
      className="max-w-4xl mx-auto px-4 py-12 bg-yellow-500"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center text-blue-600 mt-20 ">
        Contact Me
      </h2>
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">
          Email:
          <a href="mailto:sunita@example.com" className="text-blue-950">
            Developer-Sunita-verma@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-700">
          Phone:
          <a href="tel:+919876543210" className="text-blue-500">
            8929340064
          </a>
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <form className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Your message"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
