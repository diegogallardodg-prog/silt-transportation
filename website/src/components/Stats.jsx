import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 2.4, suffix: 'M', label: 'Miles Hauled', decimals: 1 },
  { value: 847, suffix: 'K', label: 'Tons Transported', decimals: 0 },
  { value: 23, suffix: '', label: 'Years in Business', decimals: 0 },
  { value: 100, suffix: '%', label: 'Safety Record', decimals: 0 },
];

export default function Stats() {
  const numbersRef = useRef([]);

  useGSAP(() => {
    stats.forEach((stat, i) => {
      const el = numbersRef.current[i];
      if (!el) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.value,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stats-wrapper',
          start: 'top 80%',
          once: true,
        },
        onUpdate() {
          el.textContent =
            stat.decimals > 0
              ? obj.val.toFixed(stat.decimals) + stat.suffix
              : Math.floor(obj.val) + stat.suffix;
        },
      });
    });

    gsap.from('.stat-item', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: '.stats-wrapper',
        start: 'top 80%',
      },
    });
  });

  return (
    <section
      className="stats-wrapper py-24 px-6"
      style={{ background: '#111111', borderTop: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e' }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <div key={stat.label} className="stat-item">
            <div
              className="text-5xl md:text-6xl font-bold mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00ff88' }}
              ref={(el) => (numbersRef.current[i] = el)}
            >
              0{stat.suffix}
            </div>
            <p style={{ color: '#888888', fontSize: '0.95rem' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
