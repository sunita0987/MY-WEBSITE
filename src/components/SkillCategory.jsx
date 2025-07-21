import React from "react";
import { SKILLS } from "../utils/Faq";
const SkillCategory = () => {
  return (
    <section className="py-12 px-6 bg-fuchsia-700 rounded-2xl mt-10" id="skills">
      <h2 className="text-5xl font-extrabold text-center text-orange-500 mb-8">
        My Skills
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {SKILLS.map((SKILLS, index) => (
          <div
            key={index}
            className="bg-white text-center p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <p className="text-lg font-medium text-gray-800">{SKILLS.name}</p>
            <p className="text-sm text-gray-500">{SKILLS.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCategory;
