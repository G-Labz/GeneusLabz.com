"use client";
import { useEffect } from "react";
import { CSS, Nav, Footer } from "../_shared";

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
      <main id="main-content" style={{paddingTop:66,minHeight:"100vh"}}>
      </main>
      <Footer/>
    </>
  );
}
