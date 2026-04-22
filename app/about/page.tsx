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
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 65% 55% at 50% 50%,rgba(91,168,245,0.12) 0%,transparent 70%)",pointerEvents:"none"}}/>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 40% 35% at 92% 15%,rgba(224,64,160,0.13) 0%,transparent 55%)",pointerEvents:"none"}}/>
      <div aria-hidden="true" style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 35% 30% at 5% 85%,rgba(91,168,245,0.11) 0%,transparent 55%)",pointerEvents:"none"}}/>
      <div className="wrap reveal" style={{position:"relative",zIndex:1}}>
        <div style={{maxWidth:820,margin:"0 auto",textAlign:"center"}}>
          <p style={{fontFamily:"var(--ff-m)",fontSize:"0.6rem",letterSpacing:"0.13em",textTransform:"uppercase",marginBottom:32,background:"linear-gradient(90deg,var(--dna-blue),var(--dna-pink))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"inline-block"}}>Our Philosophy</p>
          <blockquote style={{fontFamily:"var(--ff-d)",fontWeight:900,fontSize:"clamp(2.1rem,5vw,3.9rem)",letterSpacing:"-0.04em",lineHeight:1.0,color:"var(--t1)",marginBottom:26}}>
            &ldquo;We don&apos;t follow roads.<br/>
            <span className="gt">We build them.&rdquo;</span>
          </blockquote>
          <p style={{fontSize:"1.25rem",fontWeight:500,color:"var(--t2)",maxWidth:500,margin:"0 auto",lineHeight:1.78}}>
            GeneUs Labz exists to build what others hesitate to start: original systems, worlds, and platforms designed to last.
          </p>
          <div className="pillars-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:1,marginTop:60,background:"var(--border)",border:"1px solid transparent",borderRadius:12,overflow:"hidden",textAlign:"left",backgroundImage:"linear-gradient(var(--bg),var(--bg)),linear-gradient(90deg,rgba(91,168,245,0.3),rgba(224,64,160,0.3))",backgroundOrigin:"border-box",backgroundClip:"padding-box,border-box"}}>
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



// ─── Founders ─────────────────────────────────────────────────────────────────
function Founders() {
  const team=[
    {
      num:"01",
      name:"Marlon",
      role:"Co-Founder · Creative Director",
      desc:"Leads product vision, IP development, and creative strategy across all GeneUs Labz build tracks. The reason the studio exists is the work he couldn\u2019t find anywhere else, so he built the place to make it.",
    },
    {
      num:"02",
      name:"Kisha",
      role:"Co-Founder · Operating Partner",
      desc:"Leads operations, talent systems, and the business infrastructure that keeps the studio building at pace. She makes sure the vision has a structure worthy of it.",
    },
  ];
  return (
    <section aria-label="Studio founders" style={{padding:"0 0 120px",position:"relative"}}>
      <div className="wrap reveal">
        <div style={{maxWidth:820,margin:"0 auto"}}>
          <div className="lbl">The Operators</div>
          <h2 className="st" style={{marginBottom:20}}>Real people.<br/>Real stakes.</h2>
          <p style={{fontSize:"1rem",color:"var(--t2)",lineHeight:1.74,maxWidth:540,marginBottom:44}}>
            GeneUs Labz was founded by two operators who couldn&apos;t find a studio building the kind of cultural IP they believed in. So they built the studio instead. This is not a concept. It is an operating company.
          </p>
          <div className="founders-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2,background:"var(--border)",border:"1px solid transparent",borderRadius:12,overflow:"hidden",backgroundImage:"linear-gradient(var(--bg),var(--bg)),linear-gradient(135deg,rgba(201,139,10,0.25),rgba(91,168,245,0.2))",backgroundOrigin:"border-box",backgroundClip:"padding-box,border-box"}}>
            {team.map((f,i)=>(
              <div key={i} style={{background:"var(--bg-deep)",padding:"28px 24px",transition:"background 0.18s"}}
                onMouseEnter={e=>e.currentTarget.style.background="var(--bg-card)"}
                onMouseLeave={e=>e.currentTarget.style.background="var(--bg-deep)"}
              >
                <div style={{fontFamily:"var(--ff-m)",fontSize:"0.52rem",letterSpacing:"0.1em",color:"var(--gold)",marginBottom:9}}>{f.num}</div>
                <div style={{fontFamily:"var(--ff-d)",fontWeight:800,fontSize:"1.1rem",letterSpacing:"-0.025em",color:"var(--t1)",lineHeight:1.2,marginBottom:6}}>{f.name}</div>
                <div style={{fontFamily:"var(--ff-m)",fontSize:"0.57rem",letterSpacing:"0.07em",color:"var(--gold)",marginBottom:14}}>{f.role}</div>
                <div style={{fontSize:"0.82rem",color:"var(--t2)",lineHeight:1.68}}>{f.desc}</div>
              </div>
            ))}
          </div>
          <p style={{fontFamily:"var(--ff-m)",fontSize:"0.6rem",letterSpacing:"0.07em",color:"var(--t3)",lineHeight:1.7,marginTop:28}}>
            Independent. Founder-operated. No outside agenda. No borrowed vision.
          </p>
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
      <Nav/>
      <main id="main-content" style={{background:"radial-gradient(ellipse 80% 50% at 50% 0%,rgba(91,168,245,0.13) 0%,transparent 55%), radial-gradient(ellipse 50% 35% at 100% 100%,rgba(224,64,160,0.11) 0%,transparent 55%)"}}>
        <Manifesto/>
        <Founders/>
      </main>
      <Footer/>
    </>
  );
}
