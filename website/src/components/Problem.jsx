import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const loads = [
  {
    emoji: '🏗️',
    title: 'Heavy Industrial Equipment',
    desc: 'Cranes, excavators, and processing units that exceed standard limits.',
  },
  {
    emoji: '💨',
    title: 'Wind Turbine Components',
    desc: 'Oversized blades and nacelles requiring specialized routing and escorts.',
  },
  {
    emoji: '🌉',
    title: 'Bridge Beams & Steel',
    desc: 'Long structural steel and precast concrete beams up to 200 ft.',
  },
  {
    emoji: '⛏️',
    title: 'Mining Machinery',
    desc: 'Haul trucks, draglines, and mining equipment in full assemblies.',
  },
  {
    emoji: '⚡',
    title: 'Power Generation Units',
    desc: 'Transformers, generators, and turbine components for energy projects.',
  },
  {
    emoji: '🏢',
    title: 'Modular Buildings',
    desc: 'Factory-built structures and prefab modules moved intact to site.',
  },
];

export default function Problem() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.problem-card', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.problem-wrapper',
        start: 'top 80%',
      },
    });
  });

  return (
    <section className="problem-wrapper py-24 px-6" style={{ background: '#0a0a0a' }} ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          The Loads Nobody Else Will Touch
        </h2>
        <p className="text-center mb-16" style={{ color: '#888888' }}>
          We specialize in freight that standard carriers turn away.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loads.map((item) => (
            <div
              key={item.title}
              className="problem-card p-6 rounded-lg"
              style={{
                background: '#1a1a1a',
                border: '1px solid #333',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00ff88'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#333'; }}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {item.title}
              </h3>
              <p style={{ color: '#888888', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
