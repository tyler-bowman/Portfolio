import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Tyler</h2>
      <p className="text-xl md:text-2xl text-gray-700 mb-6">
        Software Engineer | AI & Machine Learning | Web Development
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        View My Work
      </a>
    </section>
  );
}

