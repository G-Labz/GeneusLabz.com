"use client";
import { useEffect } from "react";
import { CSS, Nav, Footer } from "../_shared";

// ─── Blog ─────────────────────────────────────────────────────────────────────
function BlogIndex() {
  return (
    <section style={{padding:"120px 0",minHeight:"calc(100vh - 66px)",position:"relative",overflow:"hidden"}}>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 55% 60% at 12% 40%,rgba(91,168,245,0.06) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 40% 50% at 88% 65%,rgba(224,64,160,0.05) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div className="wrap reveal" style={{position:"relative",zIndex:1}}>
        <div className="lbl">Blog</div>
        <h1 className="st" style={{marginBottom:20}}>
          Lab <span className="gt">Notes</span>
        </h1>
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
      <main id="main-content">
        <BlogIndex/>
      </main>
      <Footer/>
    </>
  );
}
