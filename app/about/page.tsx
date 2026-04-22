"use client";
import { useEffect } from "react";
import { CSS, Nav, Footer } from "../_shared";

// ─── Manifesto ────────────────────────────────────────────────────────────────
function Manifesto() {
  const pillars=[
    {num:"01",name:"Rule-Breaking Innovation",sub:"Convention is a ceiling we ignore."},
    {num:"02",name:"Radical Authenticity",    sub:"What we build is exactly who we are."},
    {num:"03",name:"Talent Empowerment",      sub:"Real ownership. Real results."},
    {num:"04",name:"Legacy-Driven IP",        sub:"Built for 10 years, not 10 weeks."},
  ];
  return (
    <section aria-label="Brand manifesto" style={{padding:"120px 0",position:"relative",overflow:"hidden"}}>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 55% 50% at 50% 50%,rgba(91,168,245,0.03) 0%,transparent 70%)",pointerEvents:"none"}}/>
      <div className="wrap reveal" style={{position:"relative",zIndex:1}}>
        <div style={{maxWidth:820,margin:"0 auto",textAlign:"center"}}>
          <p style={{fontFamily:"var(--ff-m)",fontSize:"0.6rem",letterSpacing:"0.13em",color:"var(--t3)",textTransform:"uppercase",marginBottom:32}}>Our Philosophy</p>
          <blockquote style={{fontFamily:"var(--ff-d)",fontWeight:900,fontSize:"clamp(2.1rem,5vw,3.9rem)",letterSpacing:"-0.04em",lineHeight:1.0,color:"var(--t1)",marginBottom:26}}>
            &ldquo;We don&apos;t follow roads.<br/>
            <span className="gt">We build them.&rdquo;</span>
          </blockquote>
          <p style={{fontSize:"1.25rem",fontWeight:500,color:"rgba(215,222,240,0.94)",maxWidth:500,margin:"0 auto",lineHeight:1.78}}>
            GeneUs Labz exists to build what others hesitate to start — original systems, worlds, and platforms designed to last.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:2,marginTop:60,background:"var(--border)",border:"1px solid var(--border)",borderRadius:12,overflow:"hidden",textAlign:"left"}}>
            {pillars.map((p,i)=>(
              <div key={i} style={{background:"var(--bg-deep)",padding:"24px 20px",transition:"background 0.18s"}}
                onMouseEnter={e=>e.currentTarget.style.background="var(--bg-card)"}
                onMouseLeave={e=>e.currentTarget.style.background="var(--bg-deep)"}
              >
                <div style={{fontFamily:"var(--ff-m)",fontSize:"0.52rem",letterSpacing:"0.1em",color:"var(--gold)",marginBottom:9}}>{p.num}</div>
                <div style={{fontFamily:"var(--ff-d)",fontWeight:800,fontSize:"0.86rem",letterSpacing:"-0.02em",color:"var(--t1)",lineHeight:1.25,marginBottom:6}}>{p.name}</div>
                <div style={{fontSize:"0.73rem",color:"var(--t3)",lineHeight:1.55}}>{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



// ─── Root ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
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
        <Manifesto/>
      </main>
      <Footer/>
    </>
  );
}
