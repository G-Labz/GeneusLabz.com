"use client";

import { useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Logo — simple reference. Drop GLabz_main_logo.png into /public.
// ─────────────────────────────────────────────────────────────────────────────
const LOGO_SRC = "/GLogo.png";

// ─────────────────────────────────────────────────────────────────────────────
// Tokens + global styles
// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700;800;900&family=Instrument+Sans:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap');

:root {
  --bg:        #050810;
  --bg-deep:   #03060d;
  --bg-hi:     #0a0f1c;

  --border:    rgba(255,255,255,0.06);
  --border-hi: rgba(255,255,255,0.10);

  --t1: #f0f4ff;
  --t2: #8b96b0;
  --t3: #46536a;

  --gold:      #C98B0A;
  --gold-lt:   #EBA820;
  --gold-dim:  rgba(201,139,10,0.09);
  --gold-glow: rgba(201,139,10,0.22);

  --dna-blue: #5BA8F5;
  --dna-pink: #E040A0;

  --ff-d: 'Epilogue', sans-serif;
  --ff-b: 'Instrument Sans', sans-serif;
  --ff-m: 'Fira Code', monospace;

  --ease: cubic-bezier(0.16, 1, 0.3, 1);

  --max: 1200px;
  --gutter: 40px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--t1);
  font-family: var(--ff-b);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }
button { font-family: inherit; background: none; border: none; color: inherit; cursor: pointer; }
img { display: block; max-width: 100%; }

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg-deep); }
::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

.skip {
  position: absolute; top: -100px; left: 16px; z-index: 9999;
  background: var(--gold); color: #000; padding: 10px 18px; border-radius: 6px;
  font-family: var(--ff-m); font-size: 0.72rem; letter-spacing: 0.06em;
  transition: top 0.2s;
}
.skip:focus { top: 16px; }

/* Entrance + reveal */
@keyframes fadeUp { from { opacity: 0; transform: translateY(22px);} to { opacity: 1; transform: none;} }
@keyframes float {
  0%   { transform: perspective(1000px) rotateY(-6deg) rotateX(3deg)  translateY(0px);   }
  28%  { transform: perspective(1000px) rotateY(4deg)  rotateX(-3deg) translateY(-14px); }
  55%  { transform: perspective(1000px) rotateY(7deg)  rotateX(2deg)  translateY(-22px); }
  80%  { transform: perspective(1000px) rotateY(-2deg) rotateX(-2deg) translateY(-9px);  }
  100% { transform: perspective(1000px) rotateY(-6deg) rotateX(3deg)  translateY(0px);   }
}
@keyframes glowPulse { 0%,100% { opacity: 0.45; } 50% { opacity: 1; } }
.ani  { animation: fadeUp 0.75s var(--ease) both; }
.d1   { animation-delay: 0.05s; }
.d2   { animation-delay: 0.18s; }
.d3   { animation-delay: 0.31s; }
.d4   { animation-delay: 0.44s; }
.d5   { animation-delay: 0.57s; }

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);
}
.reveal.in { opacity: 1; transform: none; }

/* Gradient text — ONLY used on permitted phrases */
.gt {
  background: linear-gradient(118deg, #FFD055 0%, #FF3DA0 34%, #70B8FF 64%, #FFD055 100%);
  background-size: 220% auto;
  -webkit-background-clip: text;
          background-clip: text;
  -webkit-text-fill-color: transparent;
          color: transparent;
}

/* Shared layout */
.wrap { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }

/* Micro label */
.lbl {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: var(--ff-m); font-size: 0.62rem;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--gold);
}
.lbl::before {
  content: '';
  width: 22px; height: 1px;
  background: var(--gold);
}

/* Section headline */
.st {
  font-family: var(--ff-d);
  font-weight: 900;
  font-size: clamp(2rem, 3.6vw, 3rem);
  letter-spacing: -0.035em;
  line-height: 1.06;
  color: var(--t1);
  margin-top: 18px;
}

/* Buttons */
.bp {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 26px;
  border-radius: 9px;
  border: 1px solid var(--gold);
  background: var(--gold);
  color: #000;
  font-family: var(--ff-m);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  transition: transform 0.22s var(--ease), box-shadow 0.22s var(--ease), background 0.22s var(--ease);
  cursor: pointer;
}
.bp:hover, .bp:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px var(--gold-glow);
  background: var(--gold-lt);
}
.bp:focus-visible { outline: 2px solid var(--gold-lt); outline-offset: 3px; }
.bp .arr { transition: transform 0.22s var(--ease); }
.bp:hover .arr { transform: translateX(4px); }

.bg {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 24px;
  border-radius: 9px;
  border: 1px solid var(--border-hi);
  background: transparent;
  color: var(--t2);
  font-family: var(--ff-m);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 0.22s, border-color 0.22s, background 0.22s;
  cursor: pointer;
}
.bg:hover, .bg:focus-visible {
  color: var(--t1);
  border-color: rgba(201,139,10,0.4);
  background: var(--gold-dim);
}
.bg:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }

/* Responsive */
@media (max-width: 880px) {
  :root { --gutter: 22px; }
  .hero-grid  { grid-template-columns: 1fr !important; }
  .hero-logo-col { display: none !important; }
  .tracks-grid { grid-template-columns: 1fr !important; }
  .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
}
`;

// ─────────────────────────────────────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(5,8,16,0.78)",
        backdropFilter: "blur(18px) saturate(1.3)",
        WebkitBackdropFilter: "blur(18px) saturate(1.3)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max)", margin: "0 auto",
          padding: "0 var(--gutter)",
          height: 68,
          display: "flex", alignItems: "center", gap: 40,
        }}
      >
        <a href="/" aria-label="GeneUs Labz — Home" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={LOGO_SRC} alt="GeneUs Labz" width={32} height={32} />
          <span
            style={{
              fontFamily: "var(--ff-d)",
              fontWeight: 800,
              fontSize: "0.98rem",
              letterSpacing: "-0.01em",
            }}
          >
            Gene<span style={{ color: "var(--gold)" }}>Us</span> Labz
          </span>
        </a>

        <div
          role="menubar"
          style={{ display: "flex", gap: 28, alignItems: "center", marginLeft: 28 }}
        >
          {[
            ["About", "/about"],
            ["Work", "/work"],
            ["Contact", "/contact"],
          ].map(([lbl, href]) => (
            <a
              key={lbl}
              href={href}
              role="menuitem"
              style={{
                fontFamily: "var(--ff-m)",
                fontSize: "0.68rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--t2)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t1)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t2)")}
            >
              {lbl}
            </a>
          ))}
        </div>

        <a
          href="/work"
          className="bp"
          style={{ marginLeft: "auto", padding: "10px 20px", fontSize: "0.68rem" }}
        >
          <span>View Work</span>
          <span className="arr" aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 68,
      }}
    >
      <div
        className="wrap"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 40,
          width: "100%",
        }}
      >
        {/* Left: copy */}
        <div>
          <div className="ani d1 lbl" style={{ marginBottom: 34 }}>
            GeneUs Labz · Studio
          </div>

          <h1
            className="ani d2"
            style={{
              fontFamily: "var(--ff-d)",
              fontWeight: 900,
              fontSize: "clamp(2.6rem, 4.8vw, 5rem)",
              letterSpacing: "-0.05em",
              lineHeight: 1.0,
              color: "var(--t1)",
              marginBottom: 36,
            }}
          >
            Legacy isn't given.
            <span className="gt" style={{ display: "block", marginTop: 10 }}>
              It's engineered.
            </span>
          </h1>

          <p
            className="ani d3"
            style={{
              fontFamily: "var(--ff-b)",
              fontSize: "1.05rem",
              color: "var(--t2)",
              lineHeight: 1.7,
              maxWidth: 440,
              marginBottom: 22,
            }}
          >
            This is the lab where ideas are tested, broken, and rebuilt into something that lasts.
          </p>

          <p
            className="ani d4"
            style={{
              fontFamily: "var(--ff-d)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "var(--t1)",
              lineHeight: 1.45,
              maxWidth: 440,
              marginBottom: 48,
            }}
          >
            We build what others won't dare.
          </p>

          <div className="ani d5" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/work" className="bp">
              <span>View Our Work</span>
              <span className="arr" aria-hidden="true">→</span>
            </a>
            <a href="/about" className="bg">
              <span>Our Story</span>
            </a>
          </div>
        </div>

        {/* Right: logo */}
        <div
          className="ani d3 hero-logo-col"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 0",
          }}
        >
          <img
            src={LOGO_SRC}
            alt="GeneUs Labz"
            width={420}
            height={420}
            style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Build Tracks
// ─────────────────────────────────────────────────────────────────────────────
function Tracks() {
  const tracks = [
    {
      num: "01",
      accent: "var(--gold)",
      title: "Gaming & Interactive Media",
      desc: "Game design, interactive IP, and world-building.",
    },
    {
      num: "02",
      accent: "var(--dna-pink)",
      title: "Entertainment & Narrative",
      desc: "Original IP, serialized content, and media development.",
    },
    {
      num: "03",
      accent: "var(--dna-blue)",
      title: "Software & Technology",
      desc: "Platforms, developer tools, and creative infrastructure.",
    },
  ];

  return (
    <section
      id="tracks"
      aria-labelledby="tracks-h"
      style={{ padding: "140px 0", borderTop: "1px solid var(--border)" }}
    >
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 760, marginBottom: 72 }}>
          <div className="lbl">Build Tracks</div>
          <h2 className="st" id="tracks-h">
            Three verticals.
            <br />
            One relentless focus.
          </h2>
        </div>

        <div
          className="reveal tracks-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          {tracks.map((t) => (
            <article
              key={t.num}
              style={{
                background: "var(--bg-deep)",
                padding: "44px 36px 52px",
                position: "relative",
                transition: "background 0.3s var(--ease)",
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hi)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-deep)")}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 2,
                  background: t.accent,
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  fontFamily: "var(--ff-m)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.14em",
                  color: t.accent,
                  marginBottom: 28,
                }}
              >
                {t.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--ff-d)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: "-0.015em",
                  color: "var(--t1)",
                  marginBottom: 14,
                  lineHeight: 1.25,
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  fontSize: "0.94rem",
                  color: "var(--t2)",
                  lineHeight: 1.6,
                }}
              >
                {t.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Philosophy
// ─────────────────────────────────────────────────────────────────────────────
function Philosophy() {
  const pillars = [
    { num: "01", name: "Rule-Breaking Innovation" },
    { num: "02", name: "Radical Authenticity" },
    { num: "03", name: "Talent Empowerment" },
    { num: "04", name: "Legacy-Driven IP" },
  ];

  return (
    <section
      aria-label="Philosophy"
      style={{
        padding: "140px 0",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,139,10,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="wrap reveal" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div className="lbl" style={{ justifyContent: "center" }}>Philosophy</div>

          <blockquote
            style={{
              fontFamily: "var(--ff-d)",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              color: "var(--t1)",
              marginTop: 28,
              marginBottom: 36,
            }}
          >
            “We don’t follow roads.
            <br />
            <span className="gt">We build them.”</span>
          </blockquote>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--t2)",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            GeneUs Labz exists to build what others hesitate to start — original systems, worlds, and platforms designed to last.
          </p>

          <div
            className="pillars-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              marginTop: 72,
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.num}
                style={{
                  background: "var(--bg-deep)",
                  padding: "28px 24px",
                  transition: "background 0.3s var(--ease)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-hi)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-deep)")}
              >
                <div
                  style={{
                    fontFamily: "var(--ff-m)",
                    fontSize: "0.56rem",
                    letterSpacing: "0.14em",
                    color: "var(--gold)",
                    marginBottom: 14,
                  }}
                >
                  {p.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--ff-d)",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    letterSpacing: "-0.01em",
                    color: "var(--t1)",
                    lineHeight: 1.35,
                  }}
                >
                  {p.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: 64,
        paddingBottom: 32,
      }}
    >
      <div className="wrap">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 60,
            marginBottom: 48,
          }}
        >
          <div>
            <a
              href="/"
              aria-label="GeneUs Labz — Home"
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}
            >
              <img src={LOGO_SRC} alt="GeneUs Labz" width={28} height={28} />
              <span
                style={{
                  fontFamily: "var(--ff-d)",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Gene<span style={{ color: "var(--gold)" }}>Us</span> Labz
              </span>
            </a>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--t3)",
                lineHeight: 1.7,
                maxWidth: 380,
              }}
            >
              GeneUs Labz builds original systems, worlds, and platforms across culture, technology, and media.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3
              style={{
                fontFamily: "var(--ff-m)",
                fontSize: "0.58rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--t3)",
                marginBottom: 18,
                fontWeight: 500,
              }}
            >
              Navigation
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["About", "/about"],
                ["Work", "/work"],
                ["Contact", "/contact"],
              ].map(([lbl, href]) => (
                <li key={lbl}>
                  <a
                    href={href}
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--t2)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t2)")}
                  >
                    {lbl}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <span
            style={{
              fontFamily: "var(--ff-m)",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: "var(--t3)",
              textTransform: "uppercase",
            }}
          >
            © {new Date().getFullYear()} GeneUs Labz. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--ff-m)",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: "var(--t3)",
              textTransform: "uppercase",
            }}
          >
            Studio 001
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Root
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <a href="#main-content" className="skip">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Tracks />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}