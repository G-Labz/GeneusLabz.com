"use client";
import { useEffect } from "react";
import { CSS, Nav, Footer } from "../_shared";

// ─── Blog ─────────────────────────────────────────────────────────────────────
function BlogIndex() {
  return (
    <section style={{padding:"120px 0",minHeight:"calc(100vh - 66px)",position:"relative",overflow:"hidden"}}>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 65% at 10% 35%,rgba(0,170,255,0.08) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 45% 55% at 90% 70%,rgba(255,0,128,0.07) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 30% at 50% 100%,rgba(91,168,245,0.04) 0%,transparent 55%)",pointerEvents:"none"}}/>
      <div className="wrap reveal" style={{position:"relative",zIndex:1}}>
        <div className="lbl"><span className="gt">Blog</span></div>
        <h1 className="st" style={{marginBottom:16}}>
          Lab <span className="gt">Notes</span>
        </h1>
        <div aria-hidden="true" style={{width:72,height:1,background:"linear-gradient(90deg,var(--dna-pink),var(--dna-blue))",marginBottom:24,opacity:0.55}}/>
        <p style={{fontSize:"1rem",color:"var(--t2)",lineHeight:1.7,maxWidth:580}}>
          Insights, builds, and dispatches from the GeneUs Labz team. Updates coming soon.
        </p>
      </div>
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function BlogPage() {
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
      <main id="main-content" style={{background:"radial-gradient(ellipse 85% 45% at 50% 0%,rgba(0,170,255,0.05) 0%,transparent 55%), radial-gradient(ellipse 55% 40% at 100% 100%,rgba(255,0,128,0.05) 0%,transparent 55%)"}}>
        <BlogIndex/>
      </main>
      <Footer/>
    </>
  );
}
