import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white py-24 px-6 md:px-20 text-center shadow-inner"
    >
      <h4 className="text-2xl font-bold mb-4">Get in Touch</h4>
      <p className="mb-6">Email: tylerjackb32@gmail.com | Phone: (715) 928-1532</p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-500">GitHub</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">LinkedIn</a>
        <a href="#" className="text-gray-600 hover:text-blue-500">Twitter</a>
      </div>
      <p className="mt-6 text-gray-400">&copy; 2025 Tyler Bowman</p>
    </footer>
  );
}

