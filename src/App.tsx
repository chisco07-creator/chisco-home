const categories = [
  { name: 'Residential plots', count: '180 plots', color: 'mint' },
  { name: 'Agricultural land', count: '64 acres', color: 'sand' },
  { name: 'Commercial plots', count: '42 plots', color: 'sky' },
  { name: 'Estate land', count: '18 estates', color: 'violet' },
];

const listings = [
  {
    title: 'Greenfield Estate',
    location: 'Lekki-Epe Expressway',
    type: 'Prime residential plot',
    price: '₦18.5M',
    details: '1,200 sqm • Dry land • Title documents • Gated estate',
    accent: 'accent-green',
  },
  {
    title: 'Cedar Valley Acres',
    location: 'Ibeju-Lekki',
    type: 'Agricultural land',
    price: '₦27.8M',
    details: '2.5 acres • Fertile land • Good road access • Survey ready',
    accent: 'accent-sand',
  },
  {
    title: 'City Crest Business Park',
    location: 'Ikeja',
    type: 'Commercial plot',
    price: '₦42M',
    details: '1,500 sqm • High-visibility frontage • High ROI potential',
    accent: 'accent-blue',
  },
];

const reasons = [
  {
    title: 'Verified title & documentation',
    text: 'We help you buy with confidence by checking land status, title validity, and locational clarity before you pay.',
  },
  {
    title: 'Prime locations',
    text: 'Our portfolio focuses on high-demand growth corridors where value appreciation is strongest for land buyers.',
  },
  {
    title: 'End-to-end guidance',
    text: 'From site visit to final documentation, our team helps you make a secure and informed land purchase.',
  },
];

const steps = [
  { number: '01', title: 'Tell us your goal', text: 'Share your preferred location, budget, and whether you want residential, commercial, or agricultural land.' },
  { number: '02', title: 'Shortlist the right plots', text: 'We curate available options based on demand, title clarity, and investment potential.' },
  { number: '03', title: 'Secure your purchase', text: 'We support you through inspections, negotiations, payment, and legal documentation.' },
];

const faqs = [
  {
    question: 'Do you help with land title verification?',
    answer: 'Yes. We guide buyers through title checks, survey verification, and documentation review before purchase.',
  },
  {
    question: 'Can I buy land for future development?',
    answer: 'Absolutely. We focus on plots suited for residential estate development, commercial use, and future appreciation.',
  },
  {
    question: 'Do you offer land in fast-growing areas?',
    answer: 'Yes. We prioritize growth corridors such as Ibeju-Lekki, Epe, Lekki, and emerging commercial hubs.',
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">C</div>
          <div>
            <div className="brand-name">Chisco Home</div>
            <div className="brand-tag">Land sales & property investment</div>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#plots" className="nav-link">Plots</a>
          <a href="#land" className="nav-link">Land</a>
          <a href="#invest" className="nav-link">Invest</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <button className="primary-button">Book a site visit</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Buy land with confidence</span>
            <h1>Secure the right plot for your dream home or next investment.</h1>
            <p>
              Chisco Home helps buyers discover high-potential land in the most promising locations across Lagos and beyond.
              Whether you want residential plots, commercial land, or agricultural property, we make the process clear and secure.
            </p>

            <div className="cta-row">
              <button className="primary-button">Browse plots</button>
              <button className="secondary-button">Speak to an agent</button>
            </div>

            <div className="trust-row" aria-label="Company highlights">
              <span className="trust-pill">500+ plots sold</span>
              <span className="trust-pill">Trusted land experts</span>
              <span className="trust-pill">Title-guided process</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="showcase-card">
              <div className="showcase-head">
                <span>Featured land</span>
                <span className="status-badge">Hot</span>
              </div>

              <div className="property-visual" aria-hidden="true">
                <div className="land-shape" />
              </div>

              <div className="showcase-meta">
                <div>
                  <h3>Greenfield Estate</h3>
                  <p>Residential & lifestyle development</p>
                </div>
                <strong>₦18.5M</strong>
              </div>

              <div className="mini-stats">
                <div>
                  <span>Location</span>
                  <strong>Lekki-Epe</strong>
                </div>
                <div>
                  <span>Size</span>
                  <strong>1,200 sqm</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="category-section" id="plots">
          <div className="section-heading">
            <span className="eyebrow">Explore by land type</span>
            <h2>Best opportunities for buyers</h2>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.name} className={`category-card ${category.color}`}>
                <div className="category-icon" aria-hidden="true">▣</div>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="listing-section" id="land">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Featured plots</span>
              <h2>Prime land for building and investment</h2>
            </div>
            <button className="secondary-button">View all lands</button>
          </div>

          <div className="listing-grid">
            {listings.map((listing) => (
              <article key={listing.title} className="listing-card">
                <div className={`listing-image ${listing.accent}`}>
                  <span>{listing.type}</span>
                </div>
                <div className="listing-body">
                  <div className="listing-topline">
                    <h3>{listing.title}</h3>
                    <strong>{listing.price}</strong>
                  </div>
                  <p className="listing-location">{listing.location}</p>
                  <p>{listing.details}</p>
                  <button className="text-button">Request details</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="why-us" id="invest">
          <div className="section-heading">
            <span className="eyebrow">Why land buyers choose us</span>
            <h2>Smart, secure land acquisition</h2>
          </div>

          <div className="reason-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="reason-card">
                <div className="reason-icon" aria-hidden="true">✓</div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-heading">
            <span className="eyebrow">How it works</span>
            <h2>Buy land in three simple steps</h2>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <article key={step.number} className="process-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <div className="section-heading">
            <span className="eyebrow">Land buying questions</span>
            <h2>Everything you need to know</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-banner" id="contact">
          <div>
            <span className="eyebrow alt">Ready to invest?</span>
            <h2>Let’s help you find the perfect plot.</h2>
          </div>
          <button className="primary-button">Book a consultation</button>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <div className="brand-wrap">
            <div className="brand-mark small">C</div>
            <div>
              <div className="brand-name">Chisco Home</div>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <a href="#plots">Plots</a>
          <a href="#land">Land</a>
          <a href="#invest">Invest</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2026 Chisco Home</p>
      </footer>
    </div>
  );
}
