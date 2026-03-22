import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const loads = [
  {
    icon: "⚙️",
    title: "Industrial Machinery",
    desc: "Turbines, compressors, and heavy manufacturing equipment requiring precision transport.",
    spec: "Up to 500,000 lbs / 200ft+",
  },
  {
    icon: "🌉",
    title: "Bridge Beams",
    desc: "200ft steel spans and pre-stressed concrete girders for major infrastructure projects.",
    spec: "200ft spans / 150,000 lbs",
  },
  {
    icon: "💨",
    title: "Wind Turbine Blades",
    desc: "150ft+ rotor blades for wind energy installations across complex terrain.",
    spec: "150ft+ / 30,000 lbs each",
  },
  {
    icon: "⚡",
    title: "Power Transformers",
    desc: "Utility-grade high-voltage transformers for grid infrastructure and substations.",
    spec: "Up to 300,000 lbs",
  },
  {
    icon: "🏗️",
    title: "Modular Buildings",
    desc: "Full building modules, prefab structures, and oversized construction components.",
    spec: "Custom dims / 100,000 lbs+",
  },
  {
    icon: "🚀",
    title: "Aerospace Components",
    desc: "Rocket sections, fuselage assemblies, and sensitive aerospace hardware.",
    spec: "Precision handling / Any size",
  },
];

export default function Problem() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-accent text-sm font-semibold tracking-[0.4em] uppercase mb-4">
            What We Handle
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            THE IMPOSSIBLE.{" "}
            <span className="text-accent">SOLVED.</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto text-base">
            When standard carriers say no, Silt Transportation says let's find a way.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loads.map((load, i) => (
            <div
              key={load.title}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ opacity: 0 }}
              className="bg-card border border-white/10 p-6 hover:border-accent/40 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{load.icon}</div>
              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">
                {load.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{load.desc}</p>
              <div className="border-t border-white/10 pt-3">
                <span className="text-accent text-xs font-mono font-semibold tracking-wide">
                  {load.spec}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
