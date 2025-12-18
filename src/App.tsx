import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CircuitFlow from './components/CircuitFlow';
import './App.css';

function App() {
  return (
    <>
      <CircuitFlow />
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App