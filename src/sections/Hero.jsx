import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg"; // Make sure this path is correct

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-6"
    >
      <div className="max-w-4xl w-full text-center">
        {/* Profile with hover popup */}
        <div className="relative inline-block mb-6 group">
          <div className="absolute inset-0 rounded-full bg-orange-400 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none z-0" />
          <img
            src={profile}
            alt="Sahil Talekar"
            className="w-32 h-32 mx-auto rounded-full shadow-lg object-cover border-4 border-orange-500 hover:scale-105 transition duration-300"
          />

          {/* Apple-style popup on image hover */}
          <div
  className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-max px-4 py-2 text-sm font-medium text-white 
             bg-black/30 backdrop-blur-md border border-white/10 shadow-xl 
             rounded-xl opacity-0 group-hover:opacity-90 transition duration-500 z-10"
>
            👋 Hey there!<br />
            Hope you're doing great today!
          </div>
          {/* <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full blur-md bg-orange-300 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" /> */}
        </div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I'm <span className="text-orange-600">Sahil Talekar</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A passionate Full Stack Developer turning ideas into digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex justify-center flex-wrap gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition duration-300"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
