"use client";
import { useEffect } from "react";
import { CSS, Nav, Footer } from "../_shared";

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section style={{padding:"120px 0",minHeight:"calc(100vh - 66px)"}}>
      <div className="wrap reveal">
        <div className="lbl">Contact</div>
        <h1 className="st" style={{marginBottom:20}}>Get in Touch</h1>
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
