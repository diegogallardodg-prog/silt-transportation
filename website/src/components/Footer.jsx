export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '#' },
    { label: 'Fleet', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #222' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Left: brand */}
          <div>
            <span
              className="text-xl font-bold tracking-widest"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#ffffff' }}
            >
              SILT TRANSPORTATION
            </span>
          </div>

          {/* Center: nav */}
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#888888',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#00ff88'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888888'; }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: DOT */}
          <div>
            <span
              style={{
                color: '#555555',
                fontSize: '0.85rem',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              DOT #1234567
            </span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          className="text-center pt-6"
          style={{ borderTop: '1px solid #1a1a1a', color: '#555555', fontSize: '0.8rem' }}
        >
          © {new Date().getFullYear()} Silt Transportation. All rights reserved. Licensed &amp; Insured.
        </div>
      </div>
    </footer>
  );
}
