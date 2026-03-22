import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Real-time permit tracking across all 50 states",
  "Multi-state coordination & regulatory compliance",
  "Bridge weight & clearance analysis",
  "Escort vehicle routing & pilot car coordination",
  "Utility line raise scheduling",
  "24/7 dispatch & live load monitoring",
];

export default function Solution() {
  const sectionRef = useRef(null);
  const routeRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const animRef = useScrollAnimation();

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 65%",
      onEnter: () => setAnimated(true),
    });
    return () => trigger.kill();
  }, []);

  return (
    <section ref={sectionRef} id="safety" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-accent text-sm font-semibold tracking-[0.4em] uppercase mb-4">
            Our Process
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            ROUTE. PLANNED.{" "}
            <span className="text-accent">PERFECTED.</span>
          </h2>
        </div>

        <div ref={animRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-item">
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Every oversized move starts with our precision route planning process.
              We combine AI-powered analysis with decades of field experience to map
              every mile before a wheel turns — accounting for bridge ratings,
              clearances, permit windows, and escort requirements.
            </p>

            <ul className="space-y-3">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 font-bold text-lg leading-none">✓</span>
                  <span className="text-white/80 text-sm leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-6">
              <div className="text-center">
                <p className="font-display font-bold text-3xl text-accent">48hr</p>
                <p className="text-muted text-xs mt-1">Avg. Permit Time</p>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <p className="font-display font-bold text-3xl text-accent">50</p>
                <p className="text-muted text-xs mt-1">States Licensed</p>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <p className="font-display font-bold text-3xl text-accent">24/7</p>
                <p className="text-muted text-xs mt-1">Dispatch Support</p>
              </div>
            </div>
          </div>

          {/* Right: Animated Map */}
          <div className="animate-item bg-card border border-white/10 p-6 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-xs text-muted font-mono tracking-wide uppercase">
              Route Planner — Live View
            </div>

            {/* Map SVG */}
            <svg
              className="w-full"
              viewBox="0 0 400 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid lines */}
              {[0, 50, 100, 150, 200, 250].map((y) => (
                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}
              {[0, 80, 160, 240, 320, 400].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}

              {/* Route path */}
              <path
                ref={routeRef}
                d="M 40 180 C 80 160, 100 120, 150 130 C 200 140, 220 80, 280 90 C 320 95, 340 110, 360 100"
                stroke="#00ff88"
                strokeWidth="2.5"
                strokeDasharray="1000"
                strokeDashoffset={animated ? "0" : "1000"}
                style={{
                  transition: animated ? "stroke-dashoffset 2s ease-in-out" : "none",
                }}
                strokeLinecap="round"
              />

              {/* Start dot */}
              <circle cx="40" cy="180" r="6" fill="#00ff88" />
              <circle cx="40" cy="180" r="12" fill="rgba(0,255,136,0.2)" />
              <text x="50" y="198" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="monospace">
                ORIGIN
              </text>

              {/* End dot */}
              <circle cx="360" cy="100" r="6" fill="#00ff88" />
              <circle cx="360" cy="100" r="12" fill="rgba(0,255,136,0.2)" />
              <text x="340" y="90" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="monospace">
                DEST
              </text>

              {/* Waypoint markers */}
              <circle cx="150" cy="130" r="4" fill="rgba(255,255,255,0.3)" />
              <circle cx="280" cy="90" r="4" fill="rgba(255,255,255,0.3)" />
            </svg>

            {/* Elevation profile */}
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-xs text-muted font-mono mb-2 uppercase tracking-wide">Elevation Profile</p>
              <div className="flex items-end gap-1 h-10">
                {[20, 35, 28, 45, 60, 40, 30, 50, 55, 35, 25, 40, 30, 20, 30, 45, 35, 25, 30, 20].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-accent/30 hover:bg-accent/50 transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
              <div className="flex justify-between text-xs text-muted mt-1 font-mono">
                <span>0 mi</span>
                <span>850 mi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
