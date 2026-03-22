import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const stats = [
  {
    raw: 2400000,
    format: (n) => (n >= 1000000 ? (n / 1000000).toFixed(1) + "M" : Math.floor(n).toLocaleString()),
    label: "Miles Delivered",
  },
  {
    raw: 847000,
    format: (n) => (n >= 1000 ? Math.floor(n / 1000) + "K" : Math.floor(n).toLocaleString()),
    label: "Tons Moved",
  },
  {
    raw: 23,
    format: (n) => Math.floor(n).toString(),
    label: "Years Experience",
  },
  {
    raw: 100,
    format: (n) => Math.floor(n) + "%",
    label: "Safety Record",
  },
];

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, started }) {
  const count = useCountUp(stat.raw, 2000, started);
  return (
    <div className="animate-item flex flex-col items-center text-center px-8 py-6 relative">
      <span className="font-display font-bold text-6xl md:text-7xl text-accent tabular-nums leading-none">
        {stat.format(count)}
      </span>
      <span className="text-muted text-sm font-medium tracking-widest uppercase mt-3">
        {stat.label}
      </span>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const animRef = useScrollAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-[#0d0d0d] border-y border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display text-accent text-sm font-semibold tracking-[0.4em] uppercase mb-4">
            By The Numbers
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            PROVEN AT SCALE
          </h2>
        </div>

        <div ref={animRef} className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border border-white/10">
          {stats.map((stat, i) => (
            <div key={stat.label} className={i > 0 ? "border-t md:border-t-0 border-white/10" : ""}>
              <StatItem stat={stat} started={started} />
            </div>
          ))}
        </div>

        {/* DOT badges */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {[
            "FMCSA Registered",
            "DOT Compliant",
            "OSHA Certified",
            "Fully Insured",
          ].map((badge) => (
            <span
              key={badge}
              className="border border-white/20 text-white/50 text-xs font-mono px-4 py-2 tracking-wide"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
