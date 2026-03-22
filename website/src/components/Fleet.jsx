import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trucks = [
  {
    name: "FLATBED",
    tagline: "The workhorse",
    icon: "🚛",
    specs: [
      { label: "Max Weight", value: "48,000 lbs" },
      { label: "Length", value: "48 ft" },
      { label: "Width", value: "8.5 ft" },
      { label: "Height", value: "Unlimited" },
    ],
    desc: "Standard flatbed for machinery, steel, lumber, and general oversized freight.",
    color: "from-white/5 to-transparent",
  },
  {
    name: "LOWBOY",
    tagline: "Low clearance master",
    icon: "🚚",
    specs: [
      { label: "Max Weight", value: "80,000 lbs" },
      { label: "Length", value: "53 ft" },
      { label: "Width", value: "8.5 ft" },
      { label: "Height", value: "Low clearance" },
    ],
    desc: "Ideal for construction equipment, excavators, and loads requiring low deck height.",
    color: "from-accent/5 to-transparent",
  },
  {
    name: "EXTENDABLE",
    tagline: "No length limit",
    icon: "🚜",
    specs: [
      { label: "Max Weight", value: "120,000 lbs" },
      { label: "Length", value: "80 ft+" },
      { label: "Width", value: "8.5 ft" },
      { label: "Height", value: "Modular" },
    ],
    desc: "Telescoping deck for wind turbine blades, bridge beams, and ultra-long loads.",
    color: "from-white/5 to-transparent",
  },
  {
    name: "MULTI-AXLE",
    tagline: "No weight limit",
    icon: "🏗️",
    specs: [
      { label: "Max Weight", value: "200,000 lbs+" },
      { label: "Length", value: "Custom" },
      { label: "Width", value: "Custom" },
      { label: "Height", value: "Custom" },
    ],
    desc: "Specialized multi-axle configurations for industrial equipment and extreme heavy haul.",
    color: "from-accent/5 to-transparent",
  },
];

export default function Fleet() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="fleet" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-accent text-sm font-semibold tracking-[0.4em] uppercase mb-4">
            Equipment
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            THE <span className="text-accent">FLEET</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto text-base">
            Purpose-built for every oversized challenge. Maintained to the highest standard.
          </p>
        </div>

        {/* Truck Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {trucks.map((truck, i) => (
            <div
              key={truck.name}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ opacity: 0 }}
              className={`bg-card border border-white/10 hover:border-accent/50 transition-all duration-300 group flex flex-col overflow-hidden`}
            >
              {/* Image area */}
              <div className={`h-48 bg-gradient-to-br ${truck.color} border-b border-white/10 flex flex-col items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl mb-2">{truck.icon}</div>
                <span className="font-display font-bold text-2xl text-white/20 absolute bottom-3 right-4 tracking-widest">
                  {truck.name}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-accent transition-colors">
                    {truck.name}
                  </h3>
                  <p className="text-muted text-xs font-medium tracking-wide uppercase mt-0.5">
                    {truck.tagline}
                  </p>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">{truck.desc}</p>

                {/* Specs Table */}
                <div className="border border-white/10 divide-y divide-white/10 mb-4 flex-1">
                  {truck.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between px-3 py-2">
                      <span className="text-muted text-xs">{spec.label}</span>
                      <span className="text-white text-xs font-semibold font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full border border-accent/50 text-accent text-sm font-bold py-2.5 hover:bg-accent hover:text-black transition-all duration-200 mt-auto">
                  VIEW SPECS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
