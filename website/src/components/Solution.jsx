import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Solution() {
  useGSAP(() => {
    gsap.from('.solution-content', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.solution-wrapper',
        start: 'top 80%',
      },
    });
  });

  return (
    <section
      className="solution-wrapper py-24 px-6"
      style={{ background: '#111111' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <h2
            className="solution-content text-4xl md:text-5xl font-bold mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.15 }}
          >
            Precision Routing.{' '}
            <span style={{ color: '#00ff88' }}>On-Time Delivery.</span>
          </h2>
          <ul className="space-y-5">
            {[
              {
                icon: '📋',
                text: 'Full permit acquisition in all 48 contiguous states — we handle every state, county, and municipal clearance.',
              },
              {
                icon: '🚔',
                text: 'Certified escort vehicles and pilot car coordination for every oversized movement.',
              },
              {
                icon: '🗺️',
                text: 'Advanced route surveys identify bridge weights, overhead clearances, and road restrictions before departure.',
              },
              {
                icon: '📡',
                text: 'Real-time GPS tracking and dedicated dispatch for load visibility from pickup to delivery.',
              },
            ].map((point, i) => (
              <li
                key={i}
                className="solution-content flex items-start gap-4"
              >
                <span className="text-2xl mt-0.5">{point.icon}</span>
                <p style={{ color: '#cccccc', lineHeight: 1.6 }}>{point.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: animated map placeholder */}
        <div
          className="solution-content rounded-xl overflow-hidden"
          style={{
            background: '#1a1a1a',
            border: '1px solid #333',
            minHeight: '360px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            viewBox="0 0 400 300"
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          >
            {/* Grid lines */}
            {[50, 100, 150, 200, 250, 300, 350].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" stroke="#222" strokeWidth="1" />
            ))}
            {[50, 100, 150, 200, 250].map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#222" strokeWidth="1" />
            ))}

            {/* Animated route */}
            <polyline
              points="40,240 100,200 160,210 220,150 280,130 340,80 380,60"
              fill="none"
              stroke="#00ff88"
              strokeWidth="3"
              strokeDasharray="10 6"
              className="draw-route"
              style={{ strokeDashoffset: 600 }}
            />

            {/* Endpoint dots */}
            <circle cx="40" cy="240" r="6" fill="#00ff88" />
            <circle cx="380" cy="60" r="6" fill="#00ff88" opacity="0.6" />
          </svg>

          <div
            style={{
              position: 'relative',
              zIndex: 10,
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            <p
              style={{
                color: '#555',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Live Route Simulation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
