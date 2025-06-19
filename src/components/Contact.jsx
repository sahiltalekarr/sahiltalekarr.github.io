// src/components/Contact.jsx
import React from 'react'

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    link: "https://github.com/sahiltalekarr",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    link: "https://instagram.com/sahiltalekarr",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    link: "https://linkedin.com/in/sahil-talekar-6166b5275",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in <span className="text-orange-500">Touch</span>
      </motion.h2>

      <motion.div
        className="flex justify-center gap-10 mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-orange-500 transition"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </motion.div>

      <motion.p
        className="text-lg text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Email me:{" "}
        <a
          href="mailto:sahiltalekar66@gmail.com"
          className="text-orange-500 hover:underline"
        >
          sahiltalekar66@gmail.com
        </a>
      </motion.p>

      <p className="text-sm text-gray-600 mt-12">
        &copy; {new Date().getFullYear()} Sahil Talekar. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
