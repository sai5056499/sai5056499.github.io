import { motion } from 'framer-motion';

const descriptionLines = [
  "I'm C. Sai Pavan, a passionate web developer and competitive programmer based in India.",
  "Currently, I'm pursuing my Computer Science Engineering degree at Maulana Azad National Institute of Technology.",
  "I specialize in building modern, responsive web applications using the latest technologies. My interests span full stack development, UI/UX design, and solving challenging algorithmic problems.",
  "I enjoy learning new frameworks, contributing to open-source projects, and collaborating with other developers.",
  "When I'm not coding, you'll find me exploring new tech trends, participating in coding contests, or enjoying nature.",
  "Let's build something amazing together!"
];

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/Sai5056499',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sai-pavan-270b84257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBCc54gXES1KKD%2F1Xvmfctw%3D%3D',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center px-2 py-24 bg-gradient-to-br from-[#18132a] to-[#0a0815] overflow-hidden"
      id="about"
    >
      {/* Abstract SVG background shape */}
      <svg className="absolute -top-32 -left-32 w-[60vw] h-[60vw] opacity-30 blur-2xl z-0" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7F9CF5" />
            <stop offset="1" stopColor="#A78BFA" stopOpacity="0.7" />
          </radialGradient>
        </defs>
      </svg>
      {/* Glassmorphism card */}
      <motion.div
        className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between rounded-3xl bg-white/20 dark:bg-black/30 backdrop-blur-lg shadow-2xl p-8 md:p-24 border border-white/20 dark:border-black/30"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Profile Image on the left */}
        <motion.div
          className="flex-1 flex justify-center items-center mb-12 md:mb-0 md:mr-12"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="C. Sai Pavan"
              className="rounded-full border-4 border-blue-500 shadow-2xl w-56 h-56 md:w-72 md:h-72 object-cover bg-white"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-tr from-blue-400 to-purple-500 opacity-30 pointer-events-none"></div>
          </div>
        </motion.div>
        {/* Text Content on the right */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-start max-w-2xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="mb-8 w-full">
            <svg
              viewBox="0 0 700 120"
              width="100%"
              height="120"
              className="w-[80vw] max-w-3xl h-[18vw] min-h-[60px]"
              style={{ display: 'block' }}
            >
              <motion.text
                x="0"
                y="90"
                fontFamily="Montserrat, sans-serif"
                fontWeight="100"
                fontSize="100"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeDasharray="900"
                strokeDashoffset="900"
                initial={{ strokeDashoffset: 900 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                Welcome.
              </motion.text>
              <motion.text
                x="0"
                y="90"
                fontFamily="Montserrat, sans-serif"
                fontWeight="100"
                fontSize="100"
                fill="#fff"
                stroke="none"
                initial={{
                  clipPath: 'inset(0 0 0 100%)',
                  WebkitClipPath: 'inset(0 0 0 100%)',
                }}
                animate={{
                  clipPath: 'inset(0 0 0 0%)',
                  WebkitClipPath: 'inset(0 0 0 0%)',
                }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 1.1 }}
              >
                Welcome.
              </motion.text>
            </svg>
          </div>
          <div className="text-lg md:text-xl text-white/90 max-w-xl space-y-2 mt-2 w-full">
            {descriptionLines.map((line, idx) => (
              <motion.p
                key={idx}
                className={
                  idx === 0
                    ? 'font-bold text-2xl md:text-3xl text-blue-300 font-mono'
                    : idx === descriptionLines.length - 1
                    ? 'italic text-xl text-purple-300 font-serif'
                    : 'font-normal'
                }
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 + idx * 0.25 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
          <div className="flex gap-6 mt-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 