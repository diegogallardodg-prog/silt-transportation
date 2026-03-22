import { useRef, Suspense } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import TruckScene from "./TruckScene";

export default function Hero() {
  const scrollRef = useRef(null);
  const animRef = useScrollAnimation({ start: "top 100%" });

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* 3D Truck Scene */}
      <div className="absolute inset-0 z-0">
        <TruckScene />
      </div>

      {/* Dark overlay between 3D and text */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-bg via-bg/80 to-transparent" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial gradient accent */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,255,136,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div ref={animRef} className="relative z-10 max-w-5xl mx-auto">
        <div className="animate-item">
          <p className="font-display text-accent text-sm font-semibold tracking-[0.4em] uppercase mb-6">
            Heavy Haul Specialists
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl leading-[1.05] mb-4">
            <span className="text-white">You see the load.</span>
            <br />
            <span className="text-accent">We see the solution.</span>
          </h1>
        </div>

        <p className="animate-item text-white/60 text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed">
          Heavy haul. Specialized freight. Oversized loads.
          <br />
          <span className="text-white/80 font-medium">We move what others can't.</span>
        </p>

        <div className="animate-item flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#contact"
            className="bg-accent text-black font-bold px-8 py-4 text-lg hover:scale-105 hover:bg-accent/90 transition-all duration-200 active:scale-95 pulse-glow min-w-[200px]"
          >
            GET A QUOTE
          </a>
          <a
            href="#fleet"
            className="border border-accent text-accent font-bold px-8 py-4 text-lg hover:bg-accent/10 transition-all duration-200 min-w-[200px]"
          >
            VIEW OUR FLEET
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-10"
      >
        <span className="text-white/30 text-xs tracking-[0.3em] font-medium">SCROLL</span>
        <svg
          className="w-5 h-5 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
