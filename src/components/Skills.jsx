import React from 'react'
import { FaGithub, FaJava, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaDocker, FaPhp, FaAndroid } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiPython, SiSpring, SiMongodb, SiPostman, SiJavascript, SiTypescript, SiFigma } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { TbBrandMysql } from 'react-icons/tb'
import { MdStorage } from 'react-icons/md'
import { GiTeacher } from 'react-icons/gi'
import { motion } from 'framer-motion'

const skills = [
  { icon: <FaJava size={40} className="text-orange-500" />, label: 'Java' },
  { icon: <SiSpring size={40} className="text-green-500" />, label: 'Spring Boot' },
  { icon: <FaReact size={40} className="text-cyan-400" />, label: 'React.js' },
  { icon: <SiJavascript size={40} className="text-yellow-400" />, label: 'JavaScript ES6' },
  { icon: <SiTypescript size={40} className="text-blue-500" />, label: 'TypeScript' },
  { icon: <FaPhp size={40} className="text-indigo-600" />, label: 'PHP' },
  { icon: <FaHtml5 size={40} className="text-orange-600" />, label: 'HTML5' },
  { icon: <FaCss3Alt size={40} className="text-blue-600" />, label: 'CSS3' },
  { icon: <SiTailwindcss size={40} className="text-sky-400" />, label: 'TailwindCSS' },
  { icon: <SiMysql size={40} className="text-blue-700" />, label: 'MySQL' },
  { icon: <MdStorage size={40} className="text-blue-400" />, label: 'SQL Server' },
  { icon: <SiMongodb size={40} className="text-green-600" />, label: 'MongoDB' },
  { icon: <FaGithub size={40} className="text-gray-700" />, label: 'GitHub' },
  { icon: <FaGitAlt size={40} className="text-red-600" />, label: 'Git' },
  { icon: <SiPostman size={40} className="text-orange-400" />, label: 'Postman' },
  { icon: <FaDocker size={40} className="text-blue-500" />, label: 'Docker' },
  { icon: <SiPython size={40} className="text-yellow-500" />, label: 'Python' },
  { icon: <VscCode size={40} className="text-blue-400" />, label: 'VS Code' },
  { icon: <FaAndroid size={40} className="text-green-500" />, label: 'Android Dev' },
  { icon: <SiFigma size={40} className="text-pink-500" />, label: 'Figma UI Design' },
  { icon: <GiTeacher size={40} className="text-purple-500" />, label: 'STS4' }
]

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-2">{skill.icon}</div>
              <p className="text-sm">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
