import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            top-0
            left-0
            h-[500px]
            w-[500px]
            bg-indigo-500/20
            blur-[140px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[500px]
            w-[500px]
            bg-cyan-500/20
            blur-[140px]
            rounded-full
          "
        />

      </div>

      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;