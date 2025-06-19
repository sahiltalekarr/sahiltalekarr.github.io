import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [fall, setFall] = useState(false)
  const name = "Sahil Talekar"

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50 backdrop-blur-sm bg-opacity-90">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Name with falling animation and hover message */}
        <div
          className="relative group cursor-pointer"
          onClick={() => setFall(true)}
        >
          <div className="flex space-x-1">
            {name.split('').map((char, index) => (
              <motion.span
  key={index}
  initial={{ y: 0, rotate: 0, opacity: 1 }}
  animate={
    fall
      ? {
          y: 900,
          rotate: Math.floor(Math.random() * 720 - 360),
          opacity: 0,
        }
      : {
          y: [1, 0.4, 1], // fade in and out loop
          rotate: 0,
          opacity: [1, 0.4, 1],
        }
  }
  transition={{
    duration: fall ? 1.6 : 2,
    delay: index * 0.05,
    ease: 'easeInOut',
    repeat: fall ? 0 : Infinity, // repeat forever when not falling
  }}
  className="inline-block text-xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow"
>
  {char}
</motion.span>

            ))}
          </div>

          <span className="absolute -bottom-6 left-0 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium text-gray-800 text-base">
          {["Home", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-600 transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
