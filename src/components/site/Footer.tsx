import { ContactDrawer } from "./ContactDrawer";
import { Link } from "@tanstack/react-router";
import { ADDRESS } from "@/lib/links";
import { SocialIcon, socials } from "./SocialIcons";

const logo = { url: "/images/umbreen-00.png" };

const explore = [
  { label: "About Umbreen", to: "/about" },
  { label: "Brow Services", to: "/services" },
  { label: "Embrowerment® Method", href: "/#method" },
  { label: "The Eye Zone Journal", to: "/blog" },
  { label: "Contact", href: "mailto:hello@umbreen.com" },
] as const;


export function Footer() {
  return <><ContactDrawer /><footer><img src={logo.url} alt="" className="foot-sig" />
    <div className="foot-grid foot-grid--v2">
      <div>
        <h4>UMBREEN SHEIKH</h4>
        <p className="foot-note">A New York City brow artist, founder of Wink Brow Bar, and creator of the Embrowerment® Method, an approach to personalized brow artistry and eye zone design.</p>
      </div>
      <div>
        <h4>EXPLORE</h4>
        <ul className="foot-links">
          {explore.map(l => <li key={l.label}>{"to" in l ? <Link to={l.to}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}</li>)}
        </ul>
      </div>
      <div>
        <h4>CONCIERGE</h4>
        <a href="tel:+16468465041">646.846.5041</a>
        <p className="foot-note">Monday–Sunday · 2:00 PM–7:00 PM EST</p>
        <p className="foot-note">Messages received outside concierge hours will be responded to promptly during the next available hours.</p>
        <p className="foot-note foot-address">{ADDRESS.map((l, i) => <span key={l}>{i > 0 && <br />}{l}</span>)}</p>
      </div>
      <div>
        <h4>PRESS &amp; INQUIRIES</h4>
        <p className="foot-note">For Press / Media &amp; General and appointment-related inquiries, please contact:</p>
        <a href="mailto:hello@umbreen.com">hello@umbreen.com</a>
        <div className="foot-social">
          {socials.filter(s => s.key !== "linkedin").map(s => <a key={s.key} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}><SocialIcon name={s.key} /></a>)}
        </div>
      </div>
    </div>
    <div className="foot-bottom"><span>© 2026 Umbreen. All Rights Reserved.</span><span className="foot-legal"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-of-service">Terms of Service</Link><Link to="/service-policies">Service Policies</Link></span></div>
  </footer></>;
}