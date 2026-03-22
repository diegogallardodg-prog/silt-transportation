import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Fleet", "Safety", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/50" : "bg-black/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-2xl text-accent tracking-widest group-hover:opacity-90 transition">
            SILT
          </span>
          <span className="font-display font-medium text-sm text-white/70 tracking-[0.3em] uppercase hidden sm:block">
            TRANSPORTATION
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent text-black font-bold text-sm px-5 py-2.5 hover:bg-accent/90 transition-all duration-200 hover:scale-105 active:scale-95 pulse-glow"
          >
            GET A QUOTE
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/95 backdrop-blur-md`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-accent text-base font-medium tracking-wide transition-colors py-1 border-b border-white/5"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-accent text-black font-bold text-sm px-5 py-3 text-center mt-2 hover:bg-accent/90 transition"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </nav>
  );
}
