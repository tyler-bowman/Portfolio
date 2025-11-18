import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white py-10 px-6 md:px-20 text-center shadow-inner"
    >
      <h4 className="text-4xl font-bold mb-6">Get in Touch</h4>

      <p className="mb-10 text-3xl">
        Email: <span className="font-semibold">tylerjackb32@gmail.com</span> | Phone:{" "}
        <span className="font-semibold">(715) 928-1532</span>
      </p>

      <div className="flex justify-center space-x-10 text-3xl">
        <a
          href="https://github.com/tyler-bowman"
          target="_blank"
          className="text-blue-500 hover:text-blue-800 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-bowman-4a4557330/"
          target="_blank"
          className="text-blue-500 hover:text-blue-800 transition"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-10 text-gray-400 text-xl">&copy; 2025 Tyler Bowman</p>
    </footer>
  );
}

