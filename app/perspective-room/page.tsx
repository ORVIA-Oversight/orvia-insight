import type { Metadata } from "next";
import Link from "next/link";
import { AssessmentJourney } from "@/components/AssessmentJourney";
import { HumanReviewPanel } from "@/components/HumanReviewPanel";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Method } from "@/components/Method";

export const metadata:Metadata={
  title:"Perspective Room | Human reasoning assessment",
  description:"A staged human reasoning, safeguarding judgement and perspective assessment environment with accountable human review.",
  alternates:{canonical:"/perspective-room"},
  openGraph:{title:"ORVIA Perspective Room™",description:"Understanding how people think before asking them to care for others.",type:"website",url:"/perspective-room"}
};

const assessed=[
["Observation discipline","Separate what happened from what was written, inferred or assumed."],
["Evidence use","Notice inconsistencies, missing information and the limits of what can be concluded."],
["360° perspective","Understand what different people can see, fear, miss or misunderstand."],
["Safeguarding judgement","Protect people without turning precaution into a finding of fault."],
["Reasoned updating","Change when the evidence warrants it — and hold when it does not."],
["Confidence calibration","Match certainty to the quality and completeness of the evidence."],
["Integrity under pressure","Maintain boundaries when hierarchy or loyalty pushes the other way."],
["Adaptability","Change communication style without abandoning values."],
["Grace","Explain complexity honestly enough for someone to understand on a difficult day."],
["Recovery after error","Recognise, own, correct, learn and reduce the chance of repeating a mistake."],
["Accountability","Make proportionate action visible, owned and capable of being checked."],
["Humanity","Never reduce a person to a referral, allegation, incident or worst moment."]
] as const;
const faqs=[
["Is this a psychometric test?","No. Perspective Room is a staged reasoning environment. It explores how people use evidence, perspective and judgement as new information arrives."],
["Does ORVIA use a behavioural profile?","ORVIA has a broader Character Assessment and communication-style heritage. Profile information may provide context, but it must never diagnose a candidate or independently decide employment."],
["Does AI score candidates?","No. Technology may organise responses, preserve versions, route workflow and surface inconsistencies. It must not independently hire, reject, diagnose or make safeguarding findings."],
["Why does information arrive in rounds?","Real decisions are rarely made with a complete picture. The model observes how reasoning changes when evidence, another human perspective or uncomfortable information arrives."],
["Can somebody disagree with ORVIA?","Yes. Respectful, evidence-led disagreement can be a strength. The assessment is not designed to reward conformity."],
["Is it validated?","Not yet. The design is in build and pilot preparation and should not be described as validated or proven until legal, fairness, accessibility and pilot verification are complete."]
] as const;

export default function PerspectiveRoom(){return <>
<section className="pr-hero"><div className="shell pr-hero-grid"><div><div className="eyebrow">ORVIA PERSPECTIVE ROOM™</div><h1>Understanding how people think before asking them to care for others.</h1><p className="hero-lead">A premium, evidence-led assessment environment for health and social care recruitment, safeguarding judgement and professional development. Not a puzzle. Not a personality verdict. Not an algorithmic hiring gate.</p><div className="actions"><a className="button" href="#discovery">Book discovery</a><a className="button secondary" href="#journey">See the journey</a></div><div className="trust-pills"><span>Human first. Human last.</span><span>Evidence before assumption.</span><span>No automated hiring decision.</span></div></div><div className="room-visual"><div className="room-grid"></div><div className="room-orbit one"></div><div className="room-orbit two"></div><div className="room-core"><small>THE QUESTION</small><strong>What changes when you move around it?</strong></div><span className="chip ch1">EVIDENCE</span><span className="chip ch2">PERSPECTIVE</span><span className="chip ch3">HUMAN REVIEW</span></div></div></section>

<section className="statement"><div className="shell"><p>Most recruitment asks people to <strong>present their best answer.</strong> Perspective Room asks something harder: <strong>how they got there, what they missed and what changes their mind.</strong></p></div></section>

<section id="journey" className="section"><div className="shell"><div className="section-head"><div><div className="eyebrow">ASSESSMENT JOURNEY</div><h2>The world changes around the candidate.</h2></div><p>These are evidence rounds, not repeated failures. Earlier answers remain visible so the reasoning trajectory itself becomes evidence.</p></div><AssessmentJourney/></div></section>

<section className="section section-ink"><div className="shell split-wide"><div><div className="eyebrow light">THE 360° PRINCIPLE</div><h2>An apple. A banana. A person.</h2></div><div><p className="lead light-copy">Move around any object and the view changes. A human situation changes even more: history, fear, communication, power, environment and evidence alter what each person can see.</p><p className="light-copy">Perspective Room asks whether someone can deliberately change viewpoint <strong>without changing the evidence.</strong></p></div></div></section>

<section className="section section-soft"><div className="shell"><div className="section-head"><div><div className="eyebrow">WHAT IS ASSESSED</div><h2>Capability, not conformity.</h2></div><p>The model separates the quality of reasoning from whether somebody lands on the same first conclusion as the assessor.</p></div><div className="domain-grid">{assessed.map(([t,c],i)=><article key={t}><span>{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>

<section className="section"><div className="shell character-grid"><div><div className="eyebrow">ORVIA CHARACTER ASSESSMENT</div><h2>What they say. How they profile. What they actually do.</h2><p className="lead">The wider ORVIA Character Assessment can provide context, while Perspective Room focuses on observable reasoning and response behaviour under changing evidence.</p><div className="character-flow">{["Human Behind the Application","ORVIA Character Assessment","Perspective Room","Integrity Gap Review","Human Review"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div></div><div className="integrity-card"><span>INTEGRITY GAP</span><blockquote>“I always challenge unsafe practice.”</blockquote><p><strong>Observed:</strong> hesitated when a senior manager asked for a concern to remain internal.</p><p><strong>Review question:</strong> “Help me understand the difference.”</p><small>Contradiction becomes a human-review question, not an automatic fail.</small></div></div></section>

<section className="section"><div className="shell"><div className="section-head"><div><div className="eyebrow">EVIDENCE & HUMAN REVIEW</div><h2>No black-box suitability score.</h2></div><p>The reviewer sees the candidate’s own words, version history, confidence shifts, assessor evidence and areas of disagreement.</p></div><HumanReviewPanel/></div></section>

<section className="section section-soft"><div className="shell grace-grid"><div><div className="eyebrow">THE GRACE PRINCIPLE</div><h2>If it cannot be understood at the worst moment, it is not finished.</h2></div><div><p>Candidates may be asked to make a complex professional explanation understandable to a person receiving care or a family member — honestly, simply and without false reassurance.</p><strong>Clarity is not simplification of truth. It is respect for the person who needs it.</strong></div></div></section>

<Method/>

<section className="section section-ink"><div className="shell boundary-grid"><div><div className="eyebrow light">TRUST & BOUNDARIES</div><h2>Human authority remains explicit.</h2></div><div className="boundary-cards"><article><strong>AI may</strong><p>administer, structure, preserve versions, compare evidence and surface inconsistencies.</p></article><article><strong>AI must not</strong><p>hire, reject, diagnose, score safeguarding risk or make a high-consequence finding.</p></article><article><strong>Assessors must</strong><p>rate from the candidate’s own responses and preserve disagreement.</p></article><article><strong>Decision panels must</strong><p>remain human, record reasons and keep challenge visible.</p></article></div></div></section>

<section id="discovery" className="section"><div className="shell discovery-grid"><div><div className="eyebrow">FOR PROVIDERS & EMPLOYERS</div><h2>Scope the problem before pricing the solution.</h2><p className="lead">Until controlled pricing is approved, Perspective Room uses a discovery / proposal route rather than fake Buy buttons.</p><div className="flow-pills">{["Understand","Trust","Scope","IRIS","Owner","Onboard"].map(x=><span key={x}>{x}</span>)}</div></div><LeadCaptureForm/></div></section>

<section className="section section-soft" id="faq"><div className="shell"><div className="section-head"><div><div className="eyebrow">FAQ</div><h2>Questions worth asking before you use it.</h2></div></div><div className="faq-grid">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

<section className="final-cta"><div className="shell"><div><div className="eyebrow light">ORVIA PERSPECTIVE ROOM™</div><h2>Don’t ask only whether they got the answer right.</h2><p>Ask whether you can defend how they got there.</p></div><Link className="button light-button" href="/contact">Book discovery</Link></div></section>
</>}