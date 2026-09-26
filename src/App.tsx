const categories = [
  { name: 'Residential plots', count: '180+ listings', color: 'mint' },
  { name: 'Commercial plots', count: '42 sites', color: 'blue' },
  { name: 'Agricultural land', count: '64 acres', color: 'sand' },
  { name: 'Estate land', count: '18 communities', color: 'violet' },
];

const featuredPlots = [
  {
    title: 'Greenfield Estate',
    location: 'Lekki-Epe Expressway',
    type: 'Residential plot',
    price: '₦18.5M',
    detail: '1,200 sqm • Gated community • Title ready',
    accent: 'accent-green',
  },
  {
    title: 'Cedar Valley Acres',
    location: 'Ibeju-Lekki',
    type: 'Agricultural land',
    price: '₦27.8M',
    detail: '2.5 acres • Fertile land • Good road access',
    accent: 'accent-sand',
  },
  {
    title: 'City Crest Business Park',
    location: 'Ikeja',
    type: 'Commercial plot',
    price: '₦42M',
    detail: '1,500 sqm • High visibility • High ROI potential',
    accent: 'accent-blue',
  },
];

const investmentZones = [
  { name: 'Ibeju-Lekki', yield: '15% projected growth', text: 'Fast-expanding corridor with major infrastructure and luxury developments.' },
  { name: 'Epe', yield: '12% annual potential', text: 'Great for families, future homes, and strategic land investment.' },
  { name: 'Lekki Phase 1', yield: '14% luxury demand', text: 'Premium residential plots with strong resale value and lifestyle appeal.' },
];

const valuePoints = [
  { title: 'Verified land documents', text: 'We review title status, survey reports, and ownership records to reduce risk.' },
  { title: 'Growth-focused locations', text: 'Our portfolio prioritizes land in high-demand corridors with strong appreciation.' },
  { title: 'Clear buyer guidance', text: 'From visit to closure, we help you make confident, informed land decisions.' },
];

const processSteps = [
  { number: '01', title: 'Tell us your goal', text: 'Share your budget, location preference, and whether you want residential, commercial, or agricultural land.' },
  { number: '02', title: 'Select prime options', text: 'We shortlist land opportunities that match your goals and investment potential.' },
  { number: '03', title: 'Secure the deal', text: 'We support negotiations, documentation, and closing so your purchase is smooth and secure.' },
];

const faqs = [
  {
    question: 'Do you help with title verification?',
    answer: 'Yes. We guide clients through document checks so they can buy land with confidence and avoid avoidable risk.',
  },
  {
    question: 'Can I buy land for future development?',
    answer: 'Absolutely. We specialize in land that suits future building, estate development, and long-term appreciation.',
  },
  {
    question: 'What areas do you focus on?',
    answer: 'We prioritize emerging and high-growth areas such as Ibeju-Lekki, Lekki, Epe, and selected commercial hubs.',
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
            <div className="brand-tag">Land sales & investment</div>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#plots" className="nav-link">Plots</a>
          <a href="#investment" className="nav-link">Investment</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <button className="primary-button">Book a site visit</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Buy land with confidence</span>
            <h1>Find prime plots that grow in value and fit your vision.</h1>
            <p>
              Chisco Home helps buyers discover secure, high-potential land for residential, commercial, and agricultural use.
              From strategic locations to title guidance, we make land acquisition clearer and smarter.
            </p>

            <div className="cta-row">
              <button className="primary-button">Browse plots</button>
              <button className="secondary-button">Talk to an agent</button>
            </div>

            <div className="trust-row" aria-label="Highlights">
              <span className="trust-pill">500+ plots sold</span>
              <span className="trust-pill">Title-guided process</span>
              <span className="trust-pill">High-growth zones</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
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
            <h2>Opportunities that match your goals</h2>
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

        <section className="featured-section">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Featured plots</span>
              <h2>Prime land for building and investment</h2>
            </div>
            <button className="secondary-button">View all</button>
          </div>

          <div className="listing-grid">
            {featuredPlots.map((plot) => (
              <article key={plot.title} className="plot-card">
                <div className={`listing-image ${plot.accent}`}>
                  <span>{plot.type}</span>
                </div>
                <div className="listing-body">
                  <div className="listing-topline">
                    <h3>{plot.title}</h3>
                    <strong>{plot.price}</strong>
                  </div>
                  <p className="listing-location">{plot.location}</p>
                  <p>{plot.detail}</p>
                  <button className="text-button">Request details</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="zones-section" id="investment">
          <div className="section-heading">
            <span className="eyebrow">Strategic locations</span>
            <h2>High-potential areas for land buyers</h2>
          </div>

          <div className="zone-grid">
            {investmentZones.map((zone) => (
              <article key={zone.name} className="zone-card">
                <div className="zone-header">
                  <h3>{zone.name}</h3>
                  <span>{zone.yield}</span>
                </div>
                <p>{zone.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-heading">
            <span className="eyebrow">Why choose us</span>
            <h2>Smart, secure land acquisition</h2>
          </div>

          <div className="benefits-grid">
            {valuePoints.map((point) => (
              <article key={point.title} className="benefit-card">
                <div className="benefit-icon" aria-hidden="true">✓</div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="section-heading">
            <span className="eyebrow">How it works</span>
            <h2>Buy land in three simple steps</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.number} className="process-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lead-section">
          <div className="lead-copy">
            <span className="eyebrow">Talk with a land specialist</span>
            <h2>Tell us what you want to buy, and we’ll help you find it.</h2>
            <ul>
              <li>Residential plots in fast-growing communities</li>
              <li>Commercial land with strong visibility and demand</li>
              <li>Agricultural acreage for long-term value</li>
            </ul>
          </div>

          <form className="lead-form" action="#">
            <label>
              Full name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Land interest
              <select defaultValue="">
                <option value="" disabled>
                  Select interest
                </option>
                <option>Residential plot</option>
                <option>Commercial plot</option>
                <option>Agricultural land</option>
                <option>Estate land</option>
              </select>
            </label>
            <button type="submit" className="primary-button">Request a callback</button>
          </form>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-heading">
            <span className="eyebrow">Land buying questions</span>
            <h2>Everything you need to know</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
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
          <a href="#investment">Investment</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2026 Chisco Home</p>
      </footer>
    </div>
  );
}
