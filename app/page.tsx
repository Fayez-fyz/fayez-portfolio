import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { AIExpertise } from '@/sections/AIExpertise';
import { Education } from '@/sections/Education';
import { Certifications } from '@/sections/Certifications';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AIExpertise />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
