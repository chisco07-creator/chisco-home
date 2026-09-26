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

const landValuePoints = [
  { title: 'Verified land documents', text: 'We review title status, survey reports, and ownership records to reduce risk.' },
  { title: 'Growth-focused locations', text: 'Our portfolio prioritizes land in high-demand corridors with strong appreciation.' },
  { title: 'Clear buyer guidance', text: 'From visit to closure, we help you make confident, informed land decisions.' },
];

const contractors = [
  {
    title: 'Afolayan & Sons Construction',
    specialty: 'Residential & Estate Development',
    rating: '4.8/5',
    projects: '120+ completed',
    service: 'Full project management',
  },
  {
    title: 'BuildRight Contractors Ltd',
    specialty: 'Commercial & Industrial',
    rating: '4.9/5',
    projects: '85+ completed',
    service: 'Design-build services',
  },
  {
    title: 'Zenith Construction Group',
    specialty: 'Luxury & High-rise',
    rating: '4.7/5',
    projects: '56+ completed',
    service: 'Premium finishes',
  },
];

const materials = [
  {
    name: 'Cement & Concrete',
    supplier: 'BUA Group',
    unit: 'Bag/Bulk',
    status: 'In stock',
  },
  {
    name: 'Steel Rods & Frames',
    supplier: 'Lafarge Steel',
    unit: 'Ton',
    status: 'In stock',
  },
  {
    name: 'Tiles & Finishing',
    supplier: 'Kajola Ceramics',
    unit: 'Box/Sqm',
    status: 'In stock',
  },
  {
    name: 'Electrical & Plumbing',
    supplier: 'Eko Supplies Ltd',
    unit: 'Unit/Kit',
    status: 'In stock',
  },
];

const trades = [
  {
    title: 'Bricklayers',
    icon: '🧱',
    description: 'Expert masonry and wall construction',
    available: '47 verified professionals',
    avgRating: '4.6/5',
  },
  {
    title: 'Electricians',
    icon: '⚡',
    description: 'Electrical installation and repairs',
    available: '52 verified professionals',
    avgRating: '4.7/5',
  },
  {
    title: 'Plumbers',
    icon: '🔧',
    description: 'Plumbing systems and installations',
    available: '38 verified professionals',
    avgRating: '4.5/5',
  },
  {
    title: 'Boreholers',
    icon: '💧',
    description: 'Borehole drilling and water systems',
    available: '24 verified professionals',
    avgRating: '4.8/5',
  },
  {
    title: 'Carpenters',
    icon: '🪚',
    description: 'Woodwork and carpentry services',
    available: '35 verified professionals',
    avgRating: '4.6/5',
  },
  {
    title: 'Interior Decorators',
    icon: '🎨',
    description: 'Design and finishing touches',
    available: '28 verified professionals',
    avgRating: '4.9/5',
  },
];

const processSteps = [
  { number: '01', title: 'Find your land', text: 'Select from verified plots in strategic locations across Lagos and Nigeria.' },
  { number: '02', title: 'Connect with professionals', text: 'Browse trusted builders, contractors, and skilled workers. Request quotes and compare.' },
  { number: '03', title: 'Source materials & execute', text: 'Access quality building supplies and manage your project with verified skilled professionals.' },
];

const faqs = [
  {
    question: 'How do I hire a skilled worker or tradesperson?',
    answer: 'Browse our verified professionals by trade, check their ratings and portfolios, then request a quote. We facilitate secure payment and dispute resolution.',
  },
  {
    question: 'How can I register as a tradesperson?',
    answer: 'Create a profile, verify your identity and qualifications, upload your portfolio, and start receiving project requests from homeowners and contractors.',
  },
  {
    question: 'Are all workers on the platform verified?',
    answer: 'Yes. All professionals undergo identity verification and provide proof of experience. Clients can rate and review their work transparently.',
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
            <div className="brand-tag">Land, builders, materials & skilled workers</div>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#plots" className="nav-link">Plots</a>
          <a href="#builders" className="nav-link">Builders</a>
          <a href="#trades" className="nav-link">Trades</a>
          <a href="#materials" className="nav-link">Materials</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <button className="primary-button">Start your project</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Build smarter in Nigeria</span>
            <h1>Find land, trusted builders, skilled workers, and quality materials—all in one place.</h1>
            <p>
              Chisco Home simplifies property development by connecting you with verified contractors, quality suppliers, and skilled tradespeople.
              Whether you're building your dream home or a commercial project, we make the process efficient, transparent, and affordable.
            </p>

            <div className="cta-row">
              <button className="primary-button">Browse plots</button>
              <button className="secondary-button">Find professionals</button>
            </div>

            <div className="trust-row" aria-label="Highlights">
              <span className="trust-pill">500+ plots sold</span>
              <span className="trust-pill">300+ skilled workers</span>
              <span className="trust-pill">Fast delivery service</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-card">
              <div className="showcase-head">
                <span>Featured opportunity</span>
                <span className="status-badge">Hot</span>
              </div>

              <div className="property-visual" aria-hidden="true">
                <div className="land-shape" />
              </div>

              <div className="showcase-meta">
                <div>
                  <h3>Greenfield Estate</h3>
                  <p>Ready to build • All services nearby</p>
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
            <h2>Prime locations ready to build</h2>
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
              <h2>Prime land for your next project</h2>
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

        <section className="builders-section" id="builders">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Trusted network</span>
              <h2>Verified builders & contractors</h2>
            </div>
            <button className="secondary-button">View all builders</button>
          </div>

          <div className="builders-grid">
            {contractors.map((contractor) => (
              <article key={contractor.title} className="builder-card">
                <div className="builder-header">
                  <h3>{contractor.title}</h3>
                  <span className="rating">★ {contractor.rating}</span>
                </div>

                <div className="builder-detail">
                  <span className="tag">{contractor.specialty}</span>
                </div>

                <div className="builder-stats">
                  <div>
                    <span>Projects</span>
                    <strong>{contractor.projects}</strong>
                  </div>
                  <div>
                    <span>Service</span>
                    <strong>{contractor.service}</strong>
                  </div>
                </div>

                <button className="text-button">Get a quote</button>
              </article>
            ))}
          </div>
        </section>

        <section className="trades-section" id="trades">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Skilled workforce</span>
              <h2>Vetted tradespeople for every job</h2>
            </div>
            <button className="secondary-button">Browse all trades</button>
          </div>

          <p className="section-intro">
            Connect with verified bricklayers, electricians, plumbers, boreholers, carpenters, and interior decorators.
            Register your skills or hire trusted professionals for your projects.
          </p>

          <div className="trades-grid">
            {trades.map((trade) => (
              <article key={trade.title} className="trade-card">
                <div className="trade-icon">{trade.icon}</div>
                <h3>{trade.title}</h3>
                <p className="trade-description">{trade.description}</p>
                <div className="trade-meta">
                  <span className="available">{trade.available}</span>
                  <span className="rating">★ {trade.avgRating}</span>
                </div>
                <div className="trade-cta">
                  <button className="text-button">Hire now</button>
                  <button className="text-button secondary">Register as {trade.title.toLowerCase()}</button>
                </div>
              </article>
            ))}
          </div>

          <div className="trades-signup">
            <span className="eyebrow">Are you a skilled tradesperson?</span>
            <h3>Join our network and get more jobs</h3>
            <p>
              Register your trade, showcase your portfolio, get rated by clients, and access a steady stream of job opportunities.
              Work on your terms, build your reputation, earn more.
            </p>
            <button className="primary-button">Create a professional profile</button>
          </div>
        </section>

        <section className="materials-section" id="materials">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Building supplies</span>
              <h2>Quality materials at competitive prices</h2>
            </div>
            <button className="secondary-button">Browse catalog</button>
          </div>

          <div className="materials-grid">
            {materials.map((material) => (
              <article key={material.name} className="material-card">
                <div className="material-icon" aria-hidden="true">📦</div>
                <h3>{material.name}</h3>
                <p className="supplier">{material.supplier}</p>
                <div className="material-details">
                  <span>{material.unit}</span>
                  <span className="stock-badge">{material.status}</span>
                </div>
                <button className="text-button">Get price</button>
              </article>
            ))}
          </div>
        </section>

        <section className="zones-section">
          <div className="section-heading">
            <span className="eyebrow">Strategic locations</span>
            <h2>High-potential areas for development</h2>
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
            <span className="eyebrow">Why Chisco Home</span>
            <h2>One platform for complete property development</h2>
          </div>

          <div className="benefits-grid">
            {landValuePoints.map((point) => (
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
            <h2>From land to completion in three steps</h2>
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
            <span className="eyebrow">Start your project today</span>
            <h2>Let us help you build smart in Nigeria.</h2>
            <ul>
              <li>Find verified land in prime locations</li>
              <li>Connect with rated contractors and skilled workers</li>
              <li>Source quality materials at best prices</li>
            </ul>
          </div>

          <form className="lead-form" action="#">
            <label>
              Full name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email or phone
              <input type="text" placeholder="you@example.com or 08012345678" />
            </label>
            <label>
              Project type
              <select defaultValue="">
                <option value="" disabled>
                  Select project type
                </option>
                <option>Residential home</option>
                <option>Commercial building</option>
                <option>Estate development</option>
                <option>Other</option>
              </select>
            </label>
            <button type="submit" className="primary-button">Get started</button>
          </form>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-heading">
            <span className="eyebrow">Common questions</span>
            <h2>Building in Nigeria—simplified</h2>
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
            <span className="eyebrow alt">Ready to build?</span>
            <h2>Let's make your project happen efficiently.</h2>
          </div>
          <button className="primary-button">Start now</button>
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
          <a href="#builders">Builders</a>
          <a href="#trades">Trades</a>
          <a href="#materials">Materials</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2026 Chisco Home • Building better in Nigeria</p>
      </footer>
    </div>
  );
}
