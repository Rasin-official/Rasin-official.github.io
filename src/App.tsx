import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Social from "./components/Social";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Tools />
        <Experience />
        <Social />
        <Hobbies />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
