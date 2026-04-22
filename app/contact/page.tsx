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
          Get in <span className="gt">Touch</span>
        </h1>
        <div aria-hidden="true" style={{width:72,height:1,background:"linear-gradient(90deg,var(--dna-pink),var(--dna-blue))",marginBottom:24,opacity:0.55}}/>
        <p style={{fontSize:"1rem",color:"var(--t2)",lineHeight:1.7,maxWidth:580}}>
          Reach out to the GeneUs Labz team. We build what others won&apos;t dare — let&apos;s connect.
        </p>
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
