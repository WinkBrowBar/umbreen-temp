import { Link } from "@tanstack/react-router";
import { BOOKING_URL } from "@/lib/links";
import { homeImages } from "./images";
import { Img } from "./Placeholder";

const outlets = ["Vogue", "Allure", "Harper's Bazaar", "W Magazine", "The Hollywood Reporter"];

export function HomeHero() {
  return <section className="v2-hero">
    <div className="v2-hero-text">
      <span className="v2-kicker">Founder · Entrepreneur · Eye-Zone Expert</span>
      <p className="v2-hero-name" aria-hidden="true">Umbreen</p>
      <h1>Umbreen Sheikh, Brow Artist in New York City</h1>
      <p className="v2-lead">Eyebrow specialist in NYC, founder of Wink Brow Bar and creator of the Embrowerment® Method. Umbreen’s work as a brow artist is rooted in precision, facial anatomy, and a personalized approach to brow design.</p>
      <div className="v2-hero-ctas">
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="v2-btn v2-btn--light">Book with Umbreen <span aria-hidden="true">→</span></a>
        <Link to="/about" className="v2-hero-link">Explore her expertise <span aria-hidden="true">→</span></Link>
      </div>
    </div>
    <div className="v2-hero-photo"><Img src={homeImages.heroFull} alt="Umbreen Sheikh, New York City brow artist" label="Full-length editorial image of Umbreen" /></div>
    <div className="v2-hero-featured">
      {/* <span>As featured in</span>
      <ul>{outlets.map(o => <li key={o}>{o}</li>)}</ul> */}
         <p className="v2-hero-claim">The Authority in Modern Brow Threading</p>
    </div>
    
  </section>;
}