import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FarmIntel',
    description: 'A smart agriculture platform for crop monitoring and analytics.',
    tech: 'React, Node.js, Python, TensorFlow',
    github: '#',
    live: '#',
    gradient: 'from-green-500 to-lime-400',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22c4.418 0 8-4.03 8-9 0-4.97-3.582-9-8-9S4 8.03 4 13c0 4.97 3.582 9 8 9z" /></svg>
    ),
  },
  {
    title: 'News Summariser',
    description: 'An app that summarizes news articles using NLP.',
    tech: 'React, Flask, HuggingFace Transformers',
    github: '#',
    live: '#',
    gradient: 'from-yellow-400 to-orange-500',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 8h10M7 12h6" /></svg>
    ),
  },
  {
    title: 'To-Do List',
    description: 'An application that lets you add, delete, and search notes.',
    tech: 'HTML, CSS, JavaScript',
    github: 'https://github.com/Sai5056499/To-Do-List',
    live: 'https://sai5056499.github.io/To-Do-List/',
    gradient: 'from-blue-400 to-purple-500',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
  },
  {
    title: 'Image Slider',
    description: 'A sleek, interactive image slider with smooth transitions.',
    tech: 'HTML, CSS, JavaScript',
    github: 'https://github.com/Sai5056499/Image-Slider',
    live: 'https://sai5056499.github.io/Image-Slider/',
    gradient: 'from-pink-400 to-yellow-500',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 17l6-6 4 4 8-8" /></svg>
    ),
  },
  {
    title: 'Text Converter Website',
    description: 'Convert text to uppercase, lowercase, and clear it. Built with React.',
    tech: 'HTML, CSS, JavaScript, Bootstrap, React JS',
    github: 'https://github.com/Sai5056499/Text-Converter',
    live: 'https://sai5056499.github.io/Text-Converter/',
    gradient: 'from-green-400 to-blue-500',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0M12 3v4m0 0a4 4 0 01-4 4m4-4a4 4 0 004 4" /></svg>
    ),
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my projects, resume, and coding profiles.',
    tech: 'HTML, CSS, JavaScript',
    github: 'https://github.com/Sai5056499/Portfolio-Website',
    live: 'https://sai5056499.github.io/Portfolio-Website/',
    gradient: 'from-purple-400 to-pink-500',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
    ),
  },
];

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-transparent" id="projects">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2 w-full max-w-5xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className={`relative bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 shadow-lg border-2 border-transparent hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[300px] group`}
            style={{ borderImage: `linear-gradient(135deg, var(--tw-gradient-stops)) 1` }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
          >
            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full shadow-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center z-10`}> 
              {project.icon}
            </div>
            <div className="pt-16">
              <h3 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-400 group-hover:text-purple-500 transition-colors">{project.title}</h3>
              <p className="mb-3 text-gray-800 dark:text-gray-200">{project.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.tech}</p>
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition transform hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" /></svg>
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition transform hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8 8a1 1 0 01-.707.293H5a1 1 0 01-1-1v-4a1 1 0 01.293-.707l8-8zM5 13v2h2l7.293-7.293-2-2L5 13z" /></svg>
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 