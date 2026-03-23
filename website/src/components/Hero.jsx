import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.from('.hero-content', {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });
  });

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center"
      style={{ height: '100vh', background: '#0a0a0a', overflow: 'hidden' }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <p
          className="hero-content text-sm uppercase tracking-widest mb-4"
          style={{ color: '#00ff88', fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Heavy Haul Specialists
        </p>
        <h1
          className="hero-content text-6xl md:text-8xl font-bold mb-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.05 }}
        >
          Silt Transportation
        </h1>
        <p
          className="hero-content text-xl md:text-2xl mb-10"
          style={{ color: '#888888' }}
        >
          You see the load. We see the solution.
        </p>
        <a
          href="#contact"
          className="hero-content inline-block px-10 py-4 text-lg font-semibold rounded-md pulse-glow"
          style={{
            background: '#00ff88',
            color: '#0a0a0a',
            fontFamily: 'Space Grotesk, sans-serif',
            transition: 'box-shadow 0.3s ease, transform 0.2s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,136,0.6)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '';
            e.currentTarget.style.transform = '';
          }}
        >
          Get a Quote
        </a>
      </div>

      {/* Bouncing scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 animate-bounce-slow"
        style={{ transform: 'translateX(-50%)' }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00ff88"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
