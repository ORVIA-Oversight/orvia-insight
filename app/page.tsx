import Link from "next/link";
import { Method } from "@/components/Method";

const markets=[
  ["Recruitment","Understand how candidates reason before asking them to care for others.","/recruitment"],
  ["Development","Use structured challenge to strengthen judgement, reflection and decision quality.","/development"],
  ["Leadership","Explore how managers and senior practitioners respond to ambiguity, pressure and incomplete evidence.","/leadership"],
  ["Organisations","Run repeatable assessment programmes with human review, reporting and governed evidence.","/organisations"]
] as const;

export default function Home(){return <>
<section className="insight-hero"><div className="shell insight-hero-grid">
  <div><div className="eyebrow">ORVIA INSIGHT</div><h1>See how people think when the answer is not obvious.</h1><p className="hero-lead">ORVIA Insight is a commercial human reasoning, perspective and decision-quality assessment platform. Its flagship product, Perspective Room™, progressively reveals evidence so organisations can see how people interpret uncertainty, challenge assumptions and adapt when the picture changes.</p><div className="actions"><Link className="button" href="/perspective-room">Explore Perspective Room</Link><Link className="button secondary" href="/contact">Book discovery</Link></div><div className="trust-pills"><span>Human review</span><span>Evidence-led</span><span>Health & social care first</span><span>No automated hiring decision</span></div></div>
  <div className="insight-visual"><div className="lens-card"><span className="lens-label">ONE SITUATION</span><div className="lens-orbit a"></div><div className="lens-orbit b"></div><div className="lens-core">PERSPECTIVE</div><span className="lens-chip c1">Evidence</span><span className="lens-chip c2">Context</span><span className="lens-chip c3">Challenge</span><span className="lens-chip c4">Human review</span></div></div>
</div></section>

<section className="statement"><div className="shell"><p>Most assessment captures <strong>the answer.</strong> ORVIA Insight is designed to preserve <strong>the reasoning journey behind it.</strong></p></div></section>

<section className="section"><div className="shell"><div className="section-head"><div><div className="eyebrow">FLAGSHIP PRODUCT</div><h2>Perspective Room™</h2></div><p>Not an escape room. Not a psychometric toy. A structured environment for observation, evidence, perspective, safeguarding judgement, reflection and human review.</p></div><div className="feature-split"><div className="feature-panel dark-panel"><span>THE QUESTION</span><h3>What changes when the evidence changes?</h3><p>The candidate’s first view is preserved. New evidence, another human perspective, contradiction and organisational pressure arrive progressively. The point is not to reward changing your mind. It is to understand why you did — or did not.</p><Link href="/perspective-room">See how it works →</Link></div><div className="feature-panel"><span>WHAT BECOMES VISIBLE</span><ul><li>Evidence use</li><li>Perspective-taking</li><li>Uncertainty management</li><li>Adaptability</li><li>Safeguarding reasoning</li><li>Integrity under pressure</li><li>Confidence calibration</li><li>Recovery after error</li></ul></div></div></div></section>

<section className="section section-soft"><div className="shell"><div className="section-head"><div><div className="eyebrow">COMMERCIAL USE</div><h2>Built for more than recruitment.</h2></div><p>The first commercial vertical is health and social care, while the platform architecture remains reusable for other regulated and high-consequence environments.</p></div><div className="market-grid">{markets.map(([t,c,h],i)=><article key={t}><span>{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{c}</p><Link href={h}>Explore →</Link></article>)}</div></div></section>

<Method/>

<section className="section"><div className="shell commercial-flow"><div><div className="eyebrow">COMMERCIAL MODEL</div><h2>A real operating journey, not a brochure site.</h2><p>ORVIA Insight is being built around a complete customer path from discovery through assessment, review, reporting and repeat use.</p></div><div className="flow-line">{["Market","Buy / quote","Onboard","Assess","Review","Report","Retain","Expand"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div></div></section>

<section className="section section-ink"><div className="shell human-grid"><div><div className="eyebrow light">HUMAN AUTHORITY</div><h2>Technology can organise the evidence. A human remains accountable.</h2></div><div><p>AI may administer, structure, compare, summarise and surface contradictions. It must not autonomously hire, reject, diagnose, determine safeguarding findings, decide culpability or make other high-consequence decisions.</p><Link className="button light-button" href="/trust">Read the boundaries</Link></div></div></section>

<section className="final-cta"><div className="shell"><div><div className="eyebrow light">ORVIA INSIGHT</div><h2>Bring us the role, risk or decision you need to understand better.</h2></div><Link className="button light-button" href="/contact">Book discovery</Link></div></section>
</>}