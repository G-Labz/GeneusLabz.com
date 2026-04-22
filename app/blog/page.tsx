"use client";
import { useEffect } from "react";
import { CSS, Nav, Footer } from "../_shared";

// ─── Blog ─────────────────────────────────────────────────────────────────────
function BlogIndex() {
  return (
    <section style={{padding:"120px 0",minHeight:"calc(100vh - 66px)"}}>
      <div className="wrap reveal">
        <div className="lbl">Blog</div>
        <h1 className="st" style={{marginBottom:20}}>Lab Notes</h1>
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
