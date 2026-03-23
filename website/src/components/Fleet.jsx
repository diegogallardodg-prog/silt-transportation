import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trucks = [
  {
    label: 'FLATBED',
    name: 'Flatbed',
    specs: ["48' standard deck", 'Up to 48,000 lbs', '8.5\' max width', 'Standard height clearance'],
    color: '#00ff88',
  },
  {
    label: 'LOWBOY',
    name: 'Lowboy',
    specs: ['Drop-deck design', 'Up to 80,000 lbs', '18" deck height', 'Ideal for tall machinery'],
    color: '#00ff88',
  },
  {
    label: 'EXTENDABLE',
    name: 'Extendable Flatbed',
    specs: ["Extends to 80'", 'Up to 50,000 lbs', 'Adjustable length', 'Long structural loads'],
    color: '#00ff88',
  },
  {
    label: 'MULTI-AXLE',
    name: 'Multi-Axle',
    specs: ['Custom configurations', '200,000+ lbs capacity', 'Variable axle spread', 'Superloads & oversize'],
    color: '#00ff88',
  },
];

export default function Fleet() {
  useGSAP(() => {
    gsap.from('.fleet-card', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.fleet-wrapper',
        start: 'top 80%',
      },
    });
  });

  return (
    <section className="fleet-wrapper py-24 px-6" style={{ background: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Our Fleet
        </h2>
        <p className="text-center mb-16" style={{ color: '#888888' }}>
          Matched to your load, every time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trucks.map((truck) => (
            <div
              key={truck.name}
              className="fleet-card rounded-lg overflow-hidden"
              style={{ background: '#1a1a1a', border: '1px solid #333' }}
            >
              {/* Placeholder image */}
              <div
                style={{
                  height: '160px',
                  background: '#242424',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #333',
                }}
              >
                <span
                  style={{
                    color: '#444',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {truck.label}
                </span>
              </div>
              <div className="p-5">
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00ff88' }}
                >
                  {truck.name}
                </h3>
                <ul className="space-y-1">
                  {truck.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: '#aaaaaa' }}
                    >
                      <span style={{ color: '#00ff88', fontSize: '0.6rem' }}>▶</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
