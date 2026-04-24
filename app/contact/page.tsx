"use client";
import { useEffect } from "react";
import { CSS, Nav, Footer } from "../_shared";

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section style={{padding:"120px 0",minHeight:"calc(100vh - 66px)",position:"relative",overflow:"hidden"}}>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 55% 60% at 85% 25%,rgba(224,64,160,0.14) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 50% 55% at 8% 75%,rgba(91,168,245,0.13) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 30% at 50% 100%,rgba(224,64,160,0.08) 0%,transparent 55%)",pointerEvents:"none"}}/>
      <div className="wrap reveal" style={{position:"relative",zIndex:1}}>
        <div className="lbl"><span className="gt">Contact</span></div>
        <h1 className="st" style={{marginBottom:16}}>
          Work With <span className="gt">Us</span>
        </h1>
        <div aria-hidden="true" style={{width:72,height:1,background:"linear-gradient(90deg,var(--dna-pink),var(--dna-blue))",marginBottom:24,opacity:0.55}}/>
        <p style={{fontSize:"1rem",color:"var(--t2)",lineHeight:1.7,maxWidth:580,marginBottom:20}}>
          GeneUs Labz is a venture studio. We are not a services provider and we are not looking for general inquiries. If you are a serious operator, strategic partner, or someone building something that genuinely aligns with what we are doing here — this is where that conversation starts.
        </p>
        <p style={{fontSize:"1rem",color:"var(--t2)",lineHeight:1.7,maxWidth:580,marginBottom:28}}>
          We move with intention. If your work is built on ownership, long-horizon thinking, and cultural seriousness, we want to hear from you.
        </p>
        <p style={{fontFamily:"var(--ff-m)",fontSize:"0.62rem",letterSpacing:"0.07em",color:"var(--t3)",lineHeight:1.9,maxWidth:480,marginBottom:32}}>
          Strategic partnerships &nbsp;·&nbsp; IP co-development &nbsp;·&nbsp; Builder &amp; operator alignment &nbsp;·&nbsp; Cultural media &amp; distribution
        </p>
        <a href="mailto:GeneUs.Labz@outlook.com" className="bp" style={{display:"inline-flex",alignItems:"center",gap:9}}>
          <span>Send a Message</span><span className="arr" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
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
      <main id="main-content" style={{background:"radial-gradient(ellipse 85% 45% at 50% 0%,rgba(224,64,160,0.12) 0%,transparent 55%), radial-gradient(ellipse 55% 40% at 0% 100%,rgba(91,168,245,0.11) 0%,transparent 55%)"}}>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  );
}
