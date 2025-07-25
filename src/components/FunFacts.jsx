import React from "react";

const facts = [
  "I love building beautiful UIs with Tailwind CSS 💻",
  "Big fan of Marvel movies 🦸‍♀️",
  "I enjoy solving DSA problems on weekends 🧠",
  "I maintain a daily coding streak 🔥",
  "Learning programing and loving it 💙",
];

export default function FunFacts() {
  return (
    <div className="bg-indigo-400 py-12 px-6 max-w-4xl mx-auto rounded-2xl my-10 shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-6">Fun & Personal Facts</h2>
      <ul className="list-disc list-inside text-lg text-[#000000] space-y-3">
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
