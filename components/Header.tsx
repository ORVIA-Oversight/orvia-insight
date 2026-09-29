import Link from "next/link";
const groups=[
  {label:"Perspective Room",items:[["Overview","/perspective-room"],["Recruitment","/recruitment"],["Development","/development"],["Leadership","/leadership"]]},
  {label:"For organisations",items:[["Organisations","/organisations"],["Pricing","/pricing"],["Book discovery","/contact"]]},
  {label:"Evidence",items:[["Method","/method"],["Trust & boundaries","/trust"],["FAQ","/perspective-room#faq"]]}
] as const;
export function Header(){return <>
  <div className="utility"><div className="shell utility-inner"><span>ORVIA Oversight Ltd</span><div><a href="tel:+443300433703">0330 043 3703</a><a href="mailto:hello@orvia.org.uk">hello@orvia.org.uk</a></div></div></div>
  <header className="header"><div className="shell nav">
    <Link href="/" className="brand"><img src="https://raw.githubusercontent.com/ORVIA-Oversight/Branding-and-Website/main/public/brand/ORVIA-Oversight-master.png" alt="ORVIA Oversight"/><span></span><strong>Insight</strong></Link>
    <nav>{groups.map(g=><details key={g.label}><summary>{g.label}</summary><div>{g.items.map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div></details>)}</nav>
    <Link className="button small" href="/contact">Book discovery</Link>
  </div></header>
</>}
