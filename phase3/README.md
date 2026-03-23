# SILT Transportation Inc. — Phase 3 Website

**AgentDeploy TX** | Client: Diego Gallardo | Built: March 2026

---

## Quick Deploy

### Netlify (Recommended)
1. Go to **netlify.com/drop**
2. Drag the `phase3/` folder onto the page
3. Done — live URL instantly

### GitHub Pages
```bash
git init
git add .
git commit -m "SILT Transportation Phase 3"
git remote add origin [YOUR_REPO_URL]
git push origin main
# Enable Pages in repo settings → main branch → / (root)
```

### Direct Hosting
Upload `index.html` to any web host's `public_html` folder. No server config needed.

---

## File Structure
```
phase3/
├── index.html     ← Entire site (self-contained, zero dependencies)
├── README.md      ← This file
└── assets/        ← Drop real photos here in future
```

---

## Color System
| Variable | Hex | Usage |
|----------|-----|-------|
| `--red` | `#E8000A` | Buttons, accents, borders |
| `--yellow` | `#FFD600` | HUD elements, tech overlays |
| `--bg` | `#05060A` | Main background |
| `--bg2` | `#090B11` | Card backgrounds |
| `--bg3` | `#0D0F16` | Elevated surfaces |
| `--white` | `#EDF0F7` | Primary text |
| `--muted` | `#4A5068` | Secondary text |

---

## Swapping in Real Assets

### Logo
Replace `.nav-logo` and `.footer-brand-logo` text with `<img>` tag:
```html
<img src="assets/silt-logo.svg" alt="SILT Transportation" height="32">
```

### Photos / Truck Images
Add to the `assets/` folder and reference in service cards:
```html
<img src="assets/truck-fleet.jpg" alt="SILT Fleet" style="width:100%;height:200px;object-fit:cover;">
```

### Hero Background (Optional)
To add a real photo behind the 3D scene, add to `#hero-canvas` CSS:
```css
#hero { background-image: url(assets/hero-bg.jpg); background-size: cover; }
```

---

## CDN Dependencies
- **Three.js r128** — 3D truck scenes
- **GSAP 3.12.2 + ScrollTrigger** — Scroll animations
- **Google Fonts** — Bebas Neue, IBM Plex Mono, Rajdhani

All loaded from CDN — no npm, no build step required.

---

## Client Info
| Field | Value |
|-------|-------|
| DOT# | 2002220 |
| MC# | 706803 |
| Address | 9525 Plaza Circle Dr, El Paso, TX 79927 |
| Phone | (915) 702-4349 |
| Email | sales.logistics@siltcorp.com |
| Fleet | 52 units, 71 CDL drivers |
| Founded | 1994 |

---

*Built by AgentDeploy TX — production-ready, single-file deployment.*
