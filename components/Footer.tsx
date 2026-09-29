import Link from "next/link";
export function Footer(){return <footer className="footer"><div className="shell footer-grid">
  <div><img src="https://raw.githubusercontent.com/ORVIA-Oversight/Branding-and-Website/main/public/brand/ORVIA-Oversight-master.png" alt="ORVIA Oversight"/><p><strong>ORVIA Insight</strong><br/>Human reasoning, perspective and evidence-led assessment.</p></div>
  <div><h3>INSIGHT</h3><Link href="/perspective-room">Perspective Room</Link><Link href="/recruitment">Recruitment</Link><Link href="/development">Development</Link><Link href="/leadership">Leadership</Link></div>
  <div><h3>ORGANISATIONS</h3><Link href="/organisations">For organisations</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Book discovery</Link><Link href="/trust">Trust & boundaries</Link></div>
  <div><h3>COMPANY</h3><a href="https://orvia.org.uk">ORVIA Oversight</a><a href="mailto:hello@orvia.org.uk">hello@orvia.org.uk</a><a href="tel:+443300433703">0330 043 3703</a></div>
</div><div className="shell footer-bottom"><div><span>© 2026 ORVIA Oversight Ltd</span><span>Company 16123685</span><span>ICO ZC152311</span></div><div><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/accessibility">Accessibility</Link></div></div></footer>}
