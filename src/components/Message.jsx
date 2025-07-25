import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section
      className="max-w-4xl mx-auto px-4 py-12 bg-yellow-500"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center text-blue-600 mt-20">
        Contact Me
      </h2>
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">
          Email:
          <a
            href="mailto:Developer-Sunita-verma@gmail.com"
            className="text-blue-950"
          >
            Developer-Sunita-verma@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-700">
          Phone:
          <a href="tel:+918929340064" className="text-blue-500">
            8929340064
          </a>
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://github.com/sunita0987"
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
          <a
            href="https://x.com/Sunitaverm69161"
            target="_blank"
            rel="noreferrer"
            className="text-green-800 hover:underline"
          >
            Twitter
          </a>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 shadow-lg rounded-lg"
      >
        {submitted && (
          <p className="text-green-600 font-semibold">
            Message sent successfully!
          </p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your message"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
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
