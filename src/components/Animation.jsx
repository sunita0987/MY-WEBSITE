import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Animation = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate text from left
    gsap.fromTo(
      textRef.current,
      { x: 500, opacity: 10 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-fuchsia-700">
      <div
        ref={textRef}
        className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Hi, I'm Developer Sunita Verma
        </h1>
        <p className="text-lg text-green-400 mb-6 ">
          I'm a passionate frontend developer who loves building clean UI and
          fun animations! I specialize in creating responsive and interactive
          web applications using modern technologies like React, Next.js, and
          Tailwind CSS. With a keen eye for design and a love for coding, I
          strive to create seamless user experiences that are both functional
          and visually appealing. Let's connect and create something amazing
          together!
        </p>
      </div>

      {/* Image */}
      <div ref={imageRef} className="md:w-1/2 flex justify-center">
        <img
          src="src/assets/images/sunitaverma.jpg"
          alt="Developer Illustration"
          className="w-64 h-64  object-contain rounded-full shadow-lg shadow-red-700"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Animation;
