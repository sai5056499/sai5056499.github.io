export default function Header() {
  return (
    <header className="w-full flex justify-center py-12">
      <nav className="space-x-10 text-2xl font-bold">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#coding-profiles" className="hover:underline">Coding Profiles</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
      </nav>
    </header>
  );
} 