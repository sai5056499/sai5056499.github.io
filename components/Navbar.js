import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Coding Profiles', href: '#coding-profiles' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.querySelector(link.href);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const idx = offsets.findIndex(offset => offset > 0) - 1;
      setActive(navLinks[Math.max(idx, 0)].href.slice(1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 dark:border-black/20 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-center items-center py-3 gap-8">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className={`px-4 py-1 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-blue-100/40 dark:hover:bg-blue-900/40 ${active === link.href.slice(1) ? 'text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-900/30' : 'text-gray-800 dark:text-gray-200'}`}
            style={{backdropFilter: 'blur(8px)'}}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
} 