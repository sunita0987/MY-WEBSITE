import React from "react";
function About() {
  return (
    <div className="bg-emerald-300">
      <h1 className="text-4xl font-bold text-center mt-20 text-red-700">
        About Me
      </h1>
      <p className="text-center mt-4 text-xl text-fuchsia-700">
        I am a passionate developer with a love for creating beautiful and
        functional web applications.
        <span className="font-bold">
          My journey in web development started with a curiosity to understand
          how websites work, and it has evolved into a full-fledged career.
        </span>
      </p>
      <p className="text-center mt-4 text-xl text-indigo-700">
        I enjoy working with modern technologies and frameworks, and I am always
        eager to learn new skills and improve my craft.
        <span className="font-bold">
          In my free time, I love to explore new places, read books, and
          contribute to open-source projects.
        </span>
      </p>
    </div>
  );
}
export default About;
