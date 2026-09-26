const categories = [
  { name: 'Homes', count: '240 listings', color: 'mint' },
  { name: 'Land', count: '86 listings', color: 'sand' },
  { name: 'Office', count: '54 listings', color: 'sky' },
  { name: 'Warehouses', count: '39 listings', color: 'violet' },
];

const listings = [
  {
    title: 'Lakeside Villa',
    location: 'Lekki Phase 1',
    type: 'For Sale',
    price: '$540,000',
    details: '4 Beds • 3 Baths • 2,300 sq ft',
    accent: 'accent-green',
  },
  {
    title: 'Harbor View Condo',
    location: 'Victoria Island',
    type: 'For Rent',
    price: '$2,400/mo',
    details: '2 Beds • 2 Baths • Sea view',
    accent: 'accent-blue',
  },
  {
    title: 'Industrial Warehouse',
    location: 'Ikeja Industrial Estate',
    type: 'Rental',
    price: '$6,800/mo',
    details: '7,500 sq ft • Loading bay',
    accent: 'accent-purple',
  },
];

const reasons = [
  { title: 'Market insight', text: 'We match buyers and renters with the right opportunities using live market data and neighborhood knowledge.' },
  { title: 'Trusted guidance', text: 'Clear advice from search to closing, with a team that understands both residential and commercial needs.' },
  { title: 'Fast results', text: 'From shortlist to signed documents, our process is streamlined to save time and reduce stress.' },
];

const steps = [
  { number: '01', title: 'Tell us your goals', text: 'Share your budget, lifestyle, and investment priorities.' },
  { number: '02', title: 'Shortlist the best fits', text: 'We bring you tailored properties that match your needs.' },
  { number: '03', title: 'Close with confidence', text: 'Expert support through inspections, paperwork, and final handover.' },
];

const clientQuotes = [
  {
    quote: 'Chisco Home helped us find the perfect family home in under two weeks. The process felt smooth and transparent from start to finish.',
    name: 'Tosin A.',
    role: 'Home buyer',
  },
  {
    quote: 'Their commercial team identified the right warehouse space for our operations and negotiated a deal that fit our budget.',
    name: 'Dare O.',
    role: 'Business owner',
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
            <div className="brand-tag">Property sales & rentals</div>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#buy" className="nav-link">Buy</a>
          <a href="#rent" className="nav-link">Rent</a>
          <a href="#sell" className="nav-link">Sell</a>
          <a href="#insights" className="nav-link">Insights</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <button className="primary-button">Book a visit</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Trusted property experts</span>
            <h1>Find the right place to live, invest, and grow.</h1>
            <p>
              Discover land, homes, offices, and warehouse spaces designed for your next chapter.
              Chisco Home connects buyers, renters, and investors with property opportunities that fit their goals.
            </p>

            <div className="cta-row">
              <button className="primary-button">Browse listings</button>
              <button className="secondary-button">Talk to an agent</button>
            </div>

            <div className="trust-row" aria-label="Company highlights">
              <span className="trust-pill">1.2K+ homes sold</span>
              <span className="trust-pill">4.9/5 client rating</span>
              <span className="trust-pill">18 cities covered</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="showcase-card">
              <div className="showcase-head">
                <span>Featured property</span>
                <span className="status-badge">New</span>
              </div>

              <div className="property-visual" aria-hidden="true">
                <div className="house-shape" />
              </div>

              <div className="showcase-meta">
                <div>
                  <h3>Sunset Heights</h3>
                  <p>4 Bed • 3 Bath • Gated estate</p>
                </div>
                <strong>$620,000</strong>
              </div>

              <div className="mini-stats">
                <div>
                  <span>Location</span>
                  <strong>Ajah</strong>
                </div>
                <div>
                  <span>Type</span>
                  <strong>Luxury Villa</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="category-section" id="rent">
          <div className="section-heading">
            <span className="eyebrow">Explore by category</span>
            <h2>Popular property types</h2>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.name} className={`category-card ${category.color}`}>
                <div className="category-icon" aria-hidden="true">⌂</div>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="listing-section" id="buy">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Featured listings</span>
              <h2>Curated homes and spaces</h2>
            </div>
            <button className="secondary-button">View all</button>
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
                  <button className="text-button">View details</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="why-us" id="sell">
          <div className="section-heading">
            <span className="eyebrow">Why choose us</span>
            <h2>Support from search to signature</h2>
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

        <section className="process" id="insights">
          <div className="section-heading">
            <span className="eyebrow">How it works</span>
            <h2>A simple path to your next property</h2>
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

        <section className="testimonial-section">
          <div className="section-heading">
            <span className="eyebrow">Client stories</span>
            <h2>People trust Chisco Home</h2>
          </div>

          <div className="testimonial-grid">
            {clientQuotes.map((quote) => (
              <article key={quote.name} className="testimonial-card">
                <p className="quote-mark">“</p>
                <p className="testimonial-text">{quote.quote}</p>
                <div className="testimonial-person">
                  <strong>{quote.name}</strong>
                  <span>{quote.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-banner" id="contact">
          <div>
            <span className="eyebrow alt">Need a property expert?</span>
            <h2>Let’s find the space that fits your plans.</h2>
          </div>
          <button className="primary-button">Schedule a consultation</button>
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
          <a href="#buy">Buy</a>
          <a href="#rent">Rent</a>
          <a href="#sell">Sell</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2026 Chisco Home</p>
      </footer>
    </div>
  );
}
