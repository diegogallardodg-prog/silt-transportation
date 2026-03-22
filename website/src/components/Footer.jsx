const cols = [
  {
    title: "Services",
    links: [
      "Heavy Haul Transport",
      "Oversized Loads",
      "Permit Management",
      "Escort Services",
      "Route Planning",
      "Emergency Freight",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Our Fleet",
      "Safety Record",
      "Careers",
      "News & Updates",
      "Contact",
    ],
  },
  {
    title: "Legal",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Insurance Info",
      "DOT Compliance",
      "FMCSA Registration",
    ],
  },
];

const socials = [
  { label: "LinkedIn", icon: "in" },
  { label: "Twitter", icon: "𝕏" },
  { label: "Facebook", icon: "f" },
  { label: "YouTube", icon: "▶" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl text-accent tracking-widest">
                SILT
              </span>
              <span className="font-display font-medium text-xs text-white/50 tracking-[0.3em] uppercase">
                TRANSPORTATION
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              We move what others can't. Specialized heavy haul and oversized
              freight solutions since 2001.
            </p>

            {/* DOT / MC */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-white/30 text-xs font-mono">DOT#</span>
                <span className="text-white/60 text-xs font-mono font-bold">1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/30 text-xs font-mono">MC#</span>
                <span className="text-white/60 text-xs font-mono font-bold">123456</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/40 hover:border-accent/60 hover:text-accent transition-all duration-200 text-xs font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © 2024 Silt Transportation LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted text-xs hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
