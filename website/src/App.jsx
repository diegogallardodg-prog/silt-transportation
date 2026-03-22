import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Fleet from "./components/Fleet";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Fleet />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
