import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <>
      <div className="background-effects">
        <div className="blob blob-one"></div>
        <div className="blob blob-two"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;