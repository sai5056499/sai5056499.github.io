import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Work';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 flex flex-col items-center justify-center font-sans">
      <Navbar />
      <ThemeToggle />
      <main className="w-full flex flex-col items-center justify-center">
        <About />
        <Projects />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 