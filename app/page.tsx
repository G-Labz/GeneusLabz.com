"use client";
import { useEffect } from "react";
import { CSS, LOGO_SRC, Nav, Footer } from "./_shared";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight:"100vh", display:"flex", alignItems:"center",
        paddingTop:66, position:"relative", overflow:"hidden",
      }}
    >
      {/* ── Background atmosphere ── */}
      <div aria-hidden="true" style={{position:"absolute",inset:0,pointerEvents:"none"}}>

        {/* Warm left-side tint behind copy */}
        <div style={{position:"absolute",inset:0,background:
          "radial-gradient(ellipse 50% 60% at 5% 30%,rgba(201,139,10,0.04) 0%,transparent 55%)"}}/>

        {/* Primary logo corona — strong, right-anchored */}
        <div style={{position:"absolute",inset:0,background:
          "radial-gradient(ellipse 62% 72% at 80% 50%,rgba(201,139,10,0.09) 0%,rgba(91,168,245,0.04) 52%,transparent 70%)"}}/>

        {/* DNA blue lower right accent */}
        <div style={{position:"absolute",inset:0,background:
          "radial-gradient(ellipse 38% 28% at 90% 85%,rgba(91,168,245,0.05) 0%,transparent 60%)"}}/>

        {/* Grid — right-biased, gives logo a surface to sit on */}
        <div style={{
          position:"absolute",inset:0,
          backgroundImage:"linear-gradient(rgba(255,255,255,0.012) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.012) 1px,transparent 1px)",
          backgroundSize:"72px 72px",
          maskImage:"radial-gradient(ellipse 85% 85% at 72% 52%,black 0%,transparent 72%)",
          WebkitMaskImage:"radial-gradient(ellipse 85% 85% at 72% 52%,black 0%,transparent 72%)",
        }}/>

        {/* Subtle horizontal mid-line — adds cinematic staging weight */}
        <div style={{
          position:"absolute",left:"42%",right:0,
          top:"50%",height:1,
          background:"linear-gradient(90deg,transparent,rgba(201,139,10,0.06),rgba(91,168,245,0.04),transparent)",
          transform:"translateY(-50%)",
        }}/>
      </div>

      {/* ── Content — intentionally right-heavy ── */}
      <div style={{
        maxWidth:1240, margin:"0 auto",
        padding:"0 0 0 56px",
        display:"grid",
        gridTemplateColumns:"1fr 1.65fr",
        gap:16,
        alignItems:"center",
        width:"100%",
        position:"relative", zIndex:1,
      }}>

        {/* ── Copy column ── */}
        <div style={{paddingRight:16}}>
          <h1
            className="ani d1"
            style={{
              fontFamily:"var(--ff-d)", fontWeight:900,
              fontSize:"clamp(3rem,4.8vw,5.4rem)",
              letterSpacing:"-0.05em", lineHeight:1.0,
              color:"var(--t1)", marginBottom:72,
            }}
          >
            Legacy isn&apos;t given
            <span className="gt" style={{display:"block",marginTop:16}}>
              it&apos;s engineered.
            </span>
          </h1>

          <p className="ani d2" style={{
            fontFamily:"var(--ff-b)", fontSize:"1.05rem",
            color:"var(--t2)", lineHeight:1.74,
            maxWidth:380, marginBottom:40,
          }}>
            This is the lab where ideas are tested, broken, and rebuilt into something that lasts.
          </p>

          <p className="ani d3" style={{
            fontFamily:"var(--ff-d)", fontWeight:700,
            fontSize:"1.05rem", color:"var(--t1)",
            lineHeight:1.5, maxWidth:380,
          }}>
            We build what others won&apos;t dare.
          </p>
        </div>

        {/* ── Logo column — bleeds past right edge ── */}
        <div
          className="ani d4"
          aria-hidden="true"
          style={{
            display:"flex", alignItems:"center", justifyContent:"center",
            position:"relative",
            height:640,
            marginRight:"-56px",
          }}
        >
          {/* Stage — dark circle that anchors the logo spatially */}
          <div style={{
            position:"absolute",
            width:480, height:480,
            borderRadius:"50%",
            background:"radial-gradient(circle,rgba(4,8,16,0.55) 0%,transparent 72%)",
          }}/>

          {/* Wide outer corona — slow pulse */}
          <div style={{
            position:"absolute",
            width:640, height:640,
            borderRadius:"50%",
            background:"radial-gradient(circle at 46% 44%,rgba(201,139,10,0.16) 0%,rgba(91,168,245,0.05) 46%,transparent 66%)",
            filter:"blur(38px)",
            animation:"glowPulse 8s ease-in-out infinite",
          }}/>

          {/* Mid key-light — gold, offset high-left like a studio light */}
          <div style={{
            position:"absolute",
            width:340, height:340,
            borderRadius:"50%",
            background:"radial-gradient(circle at 36% 30%,rgba(201,139,10,0.28) 0%,rgba(255,180,30,0.06) 50%,transparent 70%)",
            filter:"blur(22px)",
            top:"50%", left:"50%",
            transform:"translate(-58%,-56%)",
            animation:"glowPulse 8s ease-in-out infinite",
            animationDelay:"3s",
          }}/>

          {/* DNA blue rim — lower edge bounce light */}
          <div style={{
            position:"absolute",
            width:340, height:100,
            borderRadius:"50%",
            background:"radial-gradient(ellipse,rgba(91,168,245,0.16) 0%,transparent 70%)",
            filter:"blur(20px)",
            bottom:"88px", left:"50%", transform:"translateX(-50%)",
          }}/>

          {/* DNA pink specular — upper-right catch light */}
          <div style={{
            position:"absolute",
            width:160, height:160,
            borderRadius:"50%",
            background:"radial-gradient(circle,rgba(224,64,160,0.12) 0%,transparent 70%)",
            filter:"blur(14px)",
            top:"72px", right:"72px",
          }}/>

          {/* Floor shadow — grounds the logo */}
          <div style={{
            position:"absolute",
            width:320, height:32,
            borderRadius:"50%",
            background:"radial-gradient(ellipse,rgba(0,0,0,0.5) 0%,transparent 70%)",
            filter:"blur(12px)",
            bottom:"72px", left:"50%", transform:"translateX(-50%)",
          }}/>

          {/* Outer dashed ring — slow rotation, actually visible */}
          <div style={{
            position:"absolute",
            width:560, height:560,
            animation:"ringRotate 90s linear infinite",
          }}>
            <svg width="100%" height="100%" viewBox="0 0 560 560" style={{opacity:0.13}}>
              <circle cx="280" cy="280" r="274" stroke="var(--gold)" strokeWidth="0.9" fill="none" strokeDasharray="8 20"/>
            </svg>
          </div>

          {/* Inner dashed ring — counter-rotate */}
          <div style={{
            position:"absolute",
            width:420, height:420,
            animation:"ringRotate 70s linear infinite reverse",
          }}>
            <svg width="100%" height="100%" viewBox="0 0 420 420" style={{opacity:0.09}}>
              <circle cx="210" cy="210" r="206" stroke="var(--dna-blue)" strokeWidth="0.7" fill="none" strokeDasharray="5 18"/>
            </svg>
          </div>

          {/* Innermost ring — static, DNA pink */}
          <svg style={{position:"absolute",width:300,height:300,opacity:0.07}} viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="146" stroke="var(--dna-pink)" strokeWidth="0.6" fill="none" strokeDasharray="3 12"/>
          </svg>

          {/* The logo — primary focal element */}
          <img
            src={LOGO_SRC}
            alt="GeneUs Labz"
            width={520}
            height={520}
            draggable={false}
            onDragStart={e=>e.preventDefault()}
            style={{
              objectFit:"contain",
              position:"relative", zIndex:2,
              animation:"float 14s ease-in-out infinite",
              transformOrigin:"center center",
              userSelect:"none",
              WebkitUserSelect:"none",
              pointerEvents:"none",
              filter:[
                "drop-shadow(0 0 60px rgba(201,139,10,0.38))",
                "drop-shadow(0 32px 80px rgba(201,139,10,0.20))",
                "drop-shadow(0 -10px 36px rgba(255,215,80,0.12))",
                "drop-shadow(0 8px 28px rgba(91,168,245,0.15))",
              ].join(" "),
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  useEffect(()=>{
    const els=document.querySelectorAll(".reveal");
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");obs.unobserve(e.target);}});
    },{threshold:0.07,rootMargin:"0px 0px -32px 0px"});
    els.forEach(el=>obs.observe(el));
    return()=>obs.disconnect();
  },[]);
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:CSS}}/>
      <a href="#main-content" className="skip">Skip to main content</a>
      <Nav/>
      <main id="main-content">
        <Hero/>
      </main>
      <Footer/>
    </>
  );
}
