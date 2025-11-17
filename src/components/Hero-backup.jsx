import React from "react";
import headshot from "../assets/headshot.jpg";

export default function Hero() {
    return (
        <section
            id="hero"
           className="relative w-full min-h-screen bg-black flex items-center overflow-hidden"
        >

            {/* Quantum ML Grid Background */}
            <div className="ml-grid-bg"></div>

            {/* LEFT SIDE CONTENT */}
            <div className="relative z-10 flex items-center gap-12 pl-24">
                
                {/* Headshot */}
                <img
                    src={headshot}
                    alt="Tyler Bowman"
                    className="w-48 h-48 rounded-full border-4 border-black-500 object-cover shadow-lg"
                />

                {/* Text */}
                <div>
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Hi, I'm Tyler
                    </h1>

                    <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
                        Software Engineer specializing in Machine Learning,
                        Computer Vision, and modern Web Development.
                        I build intelligent systems with real-world impact.
                    </p>

                    <a
                        href="#projects"
                        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg 
                        hover:bg-blue-700 transition"
                    >
                        View My Work
                    </a>
                </div>
            </div>
        </section>
    );
}

