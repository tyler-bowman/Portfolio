import React from "react";

// Project Images
import AutomataImg from "../assets/automata.jpg";
import ShellImg from "../assets/shell.jpg";
import PortfolioImg from "../assets/website.jpg";

export default function Projects() {
    const projects = [
        {
            title: "Finite Automata Simulator",
            description:
                "A comprehensive Java tool for simulating DFAs/NFAs, generating languages, converting NFAs to DFAs, and constructing new automata through complement, union, intersection, concatenation, closure, and more.",
            link: "https://github.com/tyler-bowman/Finite-Automata-Simulator",
            image: AutomataImg
        },
        {
            title: "Custom Unix Shell (mysh)",
            description:
                "A C-based Unix shell supporting interactive and batch modes, built-in commands (jobs, history, fg, wait, exit), background job control, and basic I/O redirection.",
            link: "https://github.com/tyler-bowman/Shell",
            image: ShellImg
        },
        {
            title: "Personal Portfolio Website",
            description:
                "This site you're viewing — built with React, TailwindCSS, and custom UI components. Features smooth scrolling, PDF viewers, carousels, and branded layout.",
            link: "https://github.com/tyler-bowman/Portfolio",
            image: PortfolioImg
        }
    ];

    return (
        <section
            id="projects"
            className="relative w-full min-h-screen px-6 md:px-10 py-24 text-white"
        >
            {/* Background */}
            <div className="ml-grid-bg1"></div>

            {/* Foreground */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">

                {/* Frosted Title Box */}
                <div className="w-full flex justify-center mb-20">
                    <div className="bg-blue-500/20 backdrop-blur-md border border-white/10 px-80 py-8 rounded-2xl shadow-xl text-center">
                        <h3 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl">
                            My Projects
                        </h3>
                    </div>
                </div>

                {/* === THREE PROJECTS SIDE BY SIDE === */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full place-items-center">

                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className="w-full max-w-[600px] bg-black/60 backdrop-blur-sm border border-white/10
                                       rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl
                                       transition transform hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="w-full h-56 overflow-hidden">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Card Body */}
                            <div className="p-8">
                                <h4 className="text-3xl font-bold mb-3 text-white">
                                    {proj.title}
                                </h4>

                                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                                    {proj.description}
                                </p>

                                <a
                                    href={proj.link}
                                    target="_blank"
                                    className="text-blue-400 hover:text-blue-500 text-xl font-semibold"
                                >
                                    View on GitHub →
                                </a>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

