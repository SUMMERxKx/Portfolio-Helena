import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Community from './components/Community';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Volunteering />
        <Community />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;