import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-lightBg text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;