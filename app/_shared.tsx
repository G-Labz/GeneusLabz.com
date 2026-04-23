"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const LOGO_SRC = "/logo.png";
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;800;900&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&family=Fira+Code:wght@300;400;500&display=swap');
  :root {
    --gold:     #C98B0A; --gold-lt: #EBA820;
    --gold-dim: rgba(201,139,10,0.07); --gold-glow: rgba(201,139,10,0.22);
    --dna-blue: #5BA8F5; --dna-pink: #E040A0;
    --bg:       #f8f9fd; --bg-deep: #eef0f9; --bg-card: #ffffff; --bg-hi: #f3f5fc;
    --border:   rgba(0,0,0,0.07); --border-hi: rgba(0,0,0,0.11);
    --t1:#0e1117; --t2:#404f6a; --t3:#5e6b85;
    --ff-d:'Epilogue',sans-serif; --ff-b:'Instrument Sans',sans-serif; --ff-m:'Fira Code',monospace;
    --ease: cubic-bezier(0.16,1,0.3,1);
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{background:var(--bg);color:var(--t1);font-family:var(--ff-b);font-size:16px;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
  a{color:inherit;text-decoration:none;}
  ul{list-style:none;}
  button{font-family:inherit;}
  ::-webkit-scrollbar{width:3px;}
  ::-webkit-scrollbar-track{background:var(--bg-deep);}
  ::-webkit-scrollbar-thumb{background:var(--gold);border-radius:2px;}
  .skip{position:fixed;top:-100px;left:16px;z-index:9999;background:var(--gold);color:#000;padding:8px 16px;border-radius:6px;font-family:var(--ff-m);font-size:0.75rem;font-weight:600;transition:top 0.2s;}
  .skip:focus{top:16px;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:none;}}
  @keyframes float{
    0%  {transform:perspective(1100px) rotateY(-7deg)  rotateX(3deg)  translateY(0px)    scale(1);}
    28% {transform:perspective(1100px) rotateY(5deg)   rotateX(-4deg) translateY(-13px)  scale(1.025);}
    55% {transform:perspective(1100px) rotateY(8deg)   rotateX(2deg)  translateY(-20px)  scale(1.018);}
    80% {transform:perspective(1100px) rotateY(-2deg)  rotateX(-2deg) translateY(-8px)   scale(1.01);}
    100%{transform:perspective(1100px) rotateY(-7deg)  rotateX(3deg)  translateY(0px)    scale(1);}
  }
  @keyframes shimmer{to{background-position:200% center;}}
  @keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
  @keyframes glowPulse{0%,100%{opacity:0.5;}50%{opacity:1.0;}}
  @keyframes ringRotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
  @keyframes rimSweep{0%,100%{opacity:0.0;}45%,55%{opacity:1.0;}}
  .ani{animation:fadeUp 0.7s var(--ease) both;}
  .d1{animation-delay:0.05s;} .d2{animation-delay:0.17s;} .d3{animation-delay:0.30s;} .d4{animation-delay:0.45s;} .d5{animation-delay:0.60s;}
  .reveal{opacity:0;transform:translateY(24px);transition:opacity 0.7s var(--ease),transform 0.7s var(--ease);}
  .reveal.in{opacity:1;transform:none;}
  .gt{background:linear-gradient(118deg,#FFD055 0%,#FF3DA0 32%,#70B8FF 62%,#FFD055 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 5s linear infinite;}
  .wrap{max-width:1120px;margin:0 auto;padding:0 40px;}
  .lbl{display:inline-flex;align-items:center;gap:10px;font-family:var(--ff-m);font-size:0.62rem;letter-spacing:0.13em;text-transform:uppercase;color:var(--gold);margin-bottom:15px;}
  .lbl::before{content:'';width:18px;height:1px;background:var(--gold);}
  .st{font-family:var(--ff-d);font-weight:900;font-size:clamp(2rem,3.8vw,3.2rem);letter-spacing:-0.035em;line-height:1.0;color:var(--t1);}
  .m{font-family:var(--ff-m);font-size:0.62rem;letter-spacing:0.08em;color:var(--t3);}
  .bp{display:inline-flex;align-items:center;gap:9px;padding:13px 24px;border-radius:9px;border:none;cursor:pointer;font-family:var(--ff-d);font-weight:700;font-size:0.88rem;color:#000;background:linear-gradient(135deg,var(--gold-lt),var(--gold));transition:box-shadow 0.18s,opacity 0.18s;}
  .bp:hover,.bp:focus-visible{box-shadow:0 8px 26px var(--gold-glow);outline:none;}
  .bp:focus-visible{outline:2px solid var(--gold-lt);outline-offset:3px;}
  @media(hover:hover){
    .bp{transition:transform 0.18s,box-shadow 0.18s;}
    .bp:hover,.bp:focus-visible{transform:translateY(-2px);}
    .bp .arr{transition:transform 0.18s;}
    .bp:hover .arr{transform:translateX(4px);}
  }
  .bg{display:inline-flex;align-items:center;gap:9px;padding:12px 20px;border-radius:9px;cursor:pointer;font-family:var(--ff-d);font-weight:600;font-size:0.88rem;color:var(--t2);border:1px solid var(--border-hi);background:rgba(0,0,0,0.02);transition:border-color 0.18s,color 0.18s,background 0.18s;}
  .bg:hover,.bg:focus-visible{border-color:rgba(201,139,10,0.35);color:var(--t1);background:var(--gold-dim);outline:none;}
  .bg:focus-visible{outline:2px solid var(--gold);outline-offset:3px;}
  .tag{font-family:var(--ff-m);font-size:0.57rem;letter-spacing:0.05em;color:var(--t3);background:rgba(0,0,0,0.04);border:1px solid var(--border);padding:2px 8px;border-radius:4px;}
  @media(max-width:768px){
    .wrap{padding:0 20px!important;}
    .nav-inner{padding:0 16px!important;gap:0!important;}
    .nav-links{gap:14px!important;margin-left:12px!important;}
    .nav-links a{font-size:0.6rem!important;letter-spacing:0.04em!important;}
    .nav-cta{margin-left:auto!important;font-size:0.68rem!important;padding:7px 12px!important;white-space:nowrap!important;}
    .hero-layout{grid-template-columns:1fr!important;padding:0 20px!important;gap:0!important;}
    .hero-copy{padding-right:0!important;text-align:center!important;}
    .hero-copy h1{margin-bottom:32px!important;}
    .hero-copy p{max-width:100%!important;}
    .hero-logo{height:300px!important;margin-right:0!important;}
    .hero-logo img,.hero-logo-img{width:280px!important;height:280px!important;}
    .flagship-grid{grid-template-columns:1fr!important;gap:36px!important;}
    .flagship-wrap{padding:72px 0 60px!important;}
    .metrics-section{display:none!important;}
    .tracks-header{flex-direction:column!important;align-items:flex-start!important;gap:16px!important;}
    .track-row{grid-template-columns:1fr!important;gap:20px!important;padding:24px 20px!important;}
    .track-viz{display:none!important;}
    .pillars-grid{grid-template-columns:1fr 1fr!important;}
    .founders-grid{grid-template-columns:1fr!important;}
    .footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important;}
    .footer-bottom{flex-direction:column!important;gap:12px!important;align-items:flex-start!important;}
    .st{font-size:clamp(1.8rem,6vw,2.6rem)!important;}
  }
`;

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav role="navigation" aria-label="Main navigation" style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      transition:"background 0.3s,border-color 0.3s,backdrop-filter 0.3s",
      background: scrolled ? "rgba(250,250,255,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    }}>
      <div className="nav-inner" style={{maxWidth:1120,margin:"0 auto",padding:"0 40px",height:66,display:"flex",alignItems:"center",gap:36}}>
        <Link href="/" aria-label="GeneUs Labz — Home" style={{display:"flex",alignItems:"center",gap:9,flexShrink:0}}>
          <img src={LOGO_SRC} alt="" aria-hidden="true" width={34} height={34} style={{objectFit:"contain",display:"block"}}/>
          <span style={{fontFamily:"var(--ff-d)",fontWeight:800,fontSize:"0.97rem",letterSpacing:"-0.02em",color:"var(--t1)"}}>
            Gene<span style={{color:"var(--gold)"}}>Us</span> Labz
          </span>
        </Link>
        <div className="nav-links" role="menubar" style={{display:"flex",gap:26,alignItems:"center"}}>
          {["About","Work","Blog","Contact"].map(lnk=>(
            <Link key={lnk} href={`/${lnk.toLowerCase()}`} role="menuitem"
              style={{fontFamily:"var(--ff-m)",fontSize:"0.68rem",letterSpacing:"0.07em",color:"var(--t2)",transition:"color 0.15s"}}
              onMouseEnter={e=>e.currentTarget.style.color="var(--t1)"}
              onMouseLeave={e=>e.currentTarget.style.color="var(--t2)"}
            >{lnk}</Link>
          ))}
        </div>
        <Link href="/work" className="bp nav-cta" style={{marginLeft:"auto",fontSize:"0.76rem",padding:"9px 18px"}}>
          <span>View Work</span><span className="arr" aria-hidden="true">→</span>
        </Link>
      </div>
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const cols=[
    {h:"Company",     links:[["About","/about"],["Work","/work"],["Pillars","/about"],["Blog","/blog"],["Contact","/contact"]]},
    {h:"Build Tracks",links:[["Gaming & Interactive","/work"],["Entertainment & IP","/work"],["Software & Tech","/work"],["View All Work","/work"]]},
    {h:"Connect",     links:[["Contact Us","/contact"]]},
  ];
  return (
    <footer role="contentinfo" style={{borderTop:"1px solid var(--border)",paddingTop:52,paddingBottom:32}}>
      <div className="wrap">
        <div className="footer-grid" style={{display:"grid",gridTemplateColumns:"1.6fr 1fr 1fr 1fr",gap:44,marginBottom:48}}>
          <div>
            <Link href="/" aria-label="GeneUs Labz home" style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
              <img src={LOGO_SRC} alt="" aria-hidden="true" width={28} height={28} style={{objectFit:"contain"}}/>
              <span style={{fontFamily:"var(--ff-d)",fontWeight:800,fontSize:"0.93rem",letterSpacing:"-0.02em",color:"var(--t1)"}}>
                Gene<span style={{color:"var(--gold)"}}>Us</span> Labz
              </span>
            </Link>
            <p style={{fontSize:"0.82rem",color:"var(--t3)",lineHeight:1.7,maxWidth:230,marginBottom:20}}>
              GeneUs Labz builds original systems, worlds, and platforms across culture, technology, and media.
            </p>
            <div style={{display:"flex",gap:7}}>
              {([["in","LinkedIn","https://www.linkedin.com/company/geneuslabz/"],["◎","Instagram","https://www.instagram.com/geneuslabz/"]] as [string,string,string][]).map(([icon,lbl,href])=>(
                <a key={lbl} href={href} target="_blank" rel="noopener noreferrer" aria-label={lbl}
                  style={{width:30,height:30,borderRadius:7,background:"rgba(0,0,0,0.04)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"var(--t3)",transition:"all 0.16s",textDecoration:"none"}}
                  onMouseEnter={e=>{e.currentTarget.style.background="var(--gold-dim)";e.currentTarget.style.borderColor="rgba(201,139,10,0.25)";e.currentTarget.style.color="var(--gold)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(0,0,0,0.04)";e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--t3)";}}
                >{icon}</a>
              ))}
            </div>
          </div>
          {cols.map(col=>(
            <nav key={col.h} aria-label={`${col.h} links`}>
              <h3 style={{fontFamily:"var(--ff-m)",fontSize:"0.57rem",letterSpacing:"0.12em",color:"var(--t3)",textTransform:"uppercase",marginBottom:16}}>{col.h}</h3>
              <ul style={{display:"flex",flexDirection:"column",gap:10}}>
                {col.links.map(([lbl,href])=>(
                  <li key={lbl}><Link href={href} style={{fontSize:"0.82rem",color:"var(--t2)",transition:"color 0.14s"}}
                    onMouseEnter={e=>e.currentTarget.style.color="var(--t1)"}
                    onMouseLeave={e=>e.currentTarget.style.color="var(--t2)"}
                  >{lbl}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-bottom" style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:24,borderTop:"1px solid var(--border)"}}>
          <span style={{fontFamily:"var(--ff-m)",fontSize:"0.57rem",letterSpacing:"0.06em",color:"var(--t3)"}}>© 2024–2026 GeneUs Labz. All rights reserved.</span>
          <div style={{display:"flex",gap:16}}>
            <a href="https://www.linkedin.com/company/geneuslabz/" target="_blank" rel="noopener noreferrer" style={{fontFamily:"var(--ff-m)",fontSize:"0.57rem",letterSpacing:"0.06em",color:"var(--t3)",transition:"color 0.14s",textDecoration:"none"}}
              onMouseEnter={e=>e.currentTarget.style.color="var(--t2)"}
              onMouseLeave={e=>e.currentTarget.style.color="var(--t3)"}
            >LinkedIn</a>
            <a href="https://www.instagram.com/geneuslabz/" target="_blank" rel="noopener noreferrer" style={{fontFamily:"var(--ff-m)",fontSize:"0.57rem",letterSpacing:"0.06em",color:"var(--t3)",transition:"color 0.14s",textDecoration:"none"}}
              onMouseEnter={e=>e.currentTarget.style.color="var(--t2)"}
              onMouseLeave={e=>e.currentTarget.style.color="var(--t3)"}
            >Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Nav, Footer, CSS, LOGO_SRC };
