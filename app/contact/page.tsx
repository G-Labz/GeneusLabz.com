"use client";
import { useEffect } from "react";
import { CSS, Nav, Footer } from "../_shared";

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section style={{padding:"120px 0",minHeight:"calc(100vh - 66px)",position:"relative",overflow:"hidden"}}>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 50% 55% at 80% 30%,rgba(224,64,160,0.06) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 45% 50% at 10% 70%,rgba(91,168,245,0.05) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div className="wrap reveal" style={{position:"relative",zIndex:1}}>
        <div className="lbl">Contact</div>
        <h1 className="st" style={{marginBottom:20}}>
          Get in <span className="gt">Touch</span>
        </h1>
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
      <Nav/>
      <main id="main-content">
        <ContactSection/>
      </main>
      <Footer/>
    </>
  );
}
