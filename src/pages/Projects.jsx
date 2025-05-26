import React from "react";
function Projects() {
  return (
    <div className="bg-red-700">
      <h1 className="text-4xl font-bold text-center mt-20 text-teal-700">My Projects</h1>
      <p className="text-center mt-4 text-lg text-blue-700">
        Here are some of the projects I have worked on:
      </p>
      <ul className="list-disc list-inside mt-8 mx-auto max-w-2xl text-white">
        <li className="mt-2">
          Project 1: A web application for managing tasks.
        </li>
        <li className="mt-2">
          Project 2: A mobile app for tracking fitness goals.
        </li>
        <li className="mt-2">
          Project 3: A game built with React and Three.js.
        </li>
      </ul>
    </div>
  );
}

export default Projects;
