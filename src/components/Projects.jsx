// src/components/Projects.jsx
import React from 'react'
import { motion } from "framer-motion";

const projects = [
  {
    title: "BookAShow Microservices",
    description: "A movie ticket booking platform built using Spring Boot, Spring Cloud, Eureka, Kafka, and microservices.",
    tech: ["Spring Boot", "Eureka", "Kafka", "JWT", "SQL Server"],
    link: "#",
  },
  {
    title: "Driver Drowsiness Alertness",
    description: "An Arduino-based system to detect driver drowsiness using blink sensor and alerts with buzzer & motor.",
    tech: ["Arduino", "C++", "Embedded"],
    link: "#",
  },
  {
    title: "Email Spam Detection",
    description: "ML-based web app that detects spam emails using NLP, sklearn, and Python.",
    tech: ["Python", "NLP", "Sklearn"],
    link: "#",
  },
  {
    title: "Women’s Safety App",
    description: "A mobile app for emergency SOS alerts, location tracking, and contacts for women's safety.",
    tech: ["Android", "Java", "Firebase"],
    link: "#",
  },
  {
    title: "Earsooth",
    description: "A personalized calming sound player web app for better focus and sleep.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Student Portal",
    description: "A web platform for students to view attendance, assignments, and grades.",
    tech: ["React", "Spring Boot", "MySQL"],
    link: "#",
  },
  {
    title: "Hotel Booking System",
    description: "Full-stack hotel reservation platform with login, room selection, and payment.",
    tech: ["Java", "Spring Boot", "SQL Server"],
    link: "#",
  },
  {
    title: "Library Management System",
    description: "Desktop application to manage books, members, and issue-return process.",
    tech: ["Java", "MySQL", "SQL Server"],
    link: "#",
  },
  {
    title: "Farmer Market Platform",
    description: "A digital marketplace connecting farmers with buyers directly.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-orange-600">Projects</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
