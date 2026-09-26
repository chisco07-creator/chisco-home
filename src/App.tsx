import React, { useState } from 'react';

const landListings = [
  { title: 'Greenfield Estate', location: 'Lekki-Epe Expressway', type: 'Residential land', price: '₦18.5M', detail: '1,200 sqm • Gated community • Title ready', accent: 'accent-green' },
  { title: 'Cedar Valley Acres', location: 'Ibeju-Lekki', type: 'Agricultural land', price: '₦27.8M', detail: '2.5 acres • Fertile land • Good road access', accent: 'accent-sand' },
  { title: 'City Crest Business Park', location: 'Ikeja', type: 'Commercial plot', price: '₦42M', detail: '1,500 sqm • High visibility • High ROI', accent: 'accent-blue' },
];

const rentals = [
  { title: 'Victoria Island Executive Office', location: 'Victoria Island', type: 'Office space', price: '₦12M/year', detail: '220 sqm • Furnished • 24/7 power • Parking', accent: 'accent-blue' },
  { title: 'Ikeja Logistics Warehouse', location: 'Ikeja Industrial', type: 'Warehouse', price: '₦18M/year', detail: '1,000 sqm • Loading bay • Secure access', accent: 'accent-purple' },
  { title: 'Harbour View Condo', location: 'Lekki Phase 1', type: 'Luxury condo', price: '₦8.5M/year', detail: '2 Beds • 2 Baths • Estate amenities', accent: 'accent-green' },
];

const contractors = [
  { name: 'Afolayan & Sons Construction', specialty: 'Residential & estate development', rating: '4.8/5', projects: '120+' },
  { name: 'BuildRight Contractors Ltd', specialty: 'Commercial & industrial projects', rating: '4.9/5', projects: '85+' },
  { name: 'Zenith Construction Group', specialty: 'Luxury & high-rise construction', rating: '4.7/5', projects: '56+' },
];

const trades = [
  { icon: '🧱', title: 'Bricklayers', desc: 'Masonry and wall construction', available: '47 verified' },
  { icon: '⚡', title: 'Electricians', desc: 'Electrical installations and repairs', available: '52 verified' },
  { icon: '🔧', title: 'Plumbers', desc: 'Plumbing systems and installations', available: '38 verified' },
  { icon: '💧', title: 'Boreholers', desc: 'Borehole drilling and water systems', available: '24 verified' },
  { icon: '🪚', title: 'Carpenters', desc: 'Woodwork and carpentry services', available: '35 verified' },
  { icon: '🎨', title: 'Interior Decorators', desc: 'Design and finishing services', available: '28 verified' },
];

const materials = [
  { name: 'Cement & Concrete', specs: 'BUA Premium • Grade 32.5', price: '₦2,850/bag', delivery: '24-48 hours' },
  { name: 'Steel Rods & Frames', specs: '10-25mm • Grade 460', price: '₦185K/ton', delivery: '3-5 days' },
  { name: 'Ceramic Tiles', specs: 'Premium Grade • 600x600mm', price: '₦8,900/box', delivery: '2-3 days' },
  { name: 'Electrical Wires', specs: '2.5-10mm² • NYY Standard', price: '₦12.5K/roll', delivery: '2 days' },
];

function ListingCard({ item }: { item: any }) {
  return (
    <article className="listing-card">
      <div className={`listing-image ${item.accent}`}><span>{item.type}</span></div>
      <div className="listing-body">
        <div className="listing-topline"><h3>{item.title}</h3><strong>{item.price}</strong></div>
        <p className="listing-location">{item.location}</p>
        <p>{item.detail}</p>
        <button className="text-button">View details</button>
      </div>
    </article>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'build' | 'supply'>('buy');

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">C</div>
          <div>
            <div className="brand-name">Chisco Home</div>
            <div className="brand-tag">Complete property & construction solutions</div>
          </div>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#services" className="nav-link">Services</a>
          <a href="#properties" className="nav-link">Properties</a>
          <a href="#builders" className="nav-link">Builders</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button className="primary-button">Get started</button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Your complete property partner</span>
            <h1>Buy land. Rent spaces. Build smarter. Supply materials.</h1>
            <p>
              Chisco Home is your one-stop platform for acquiring properties, renting offices and warehouses, connecting with builders and skilled workers, and accessing a managed supply chain for all building materials.
            </p>
            <div className="cta-row">
              <button className="primary-button">Explore opportunities</button>
              <button className="secondary-button">Contact an agent</button>
            </div>
            <div className="trust-row">
              <span className="trust-pill">500+ plots sold</span>
              <span className="trust-pill">90+ rental spaces</span>
              <span className="trust-pill">Direct material supply</span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <div className="showcase-head"><span>Featured opportunity</span><span className="status-badge">Available</span></div>
              <div className="property-visual" aria-hidden="true"><div className="land-shape" /></div>
              <div className="showcase-meta"><div><h3>Greenfield Estate</h3><p>Residential land • Ready to build</p></div><strong>₦18.5M</strong></div>
              <div className="mini-stats"><div><span>Location</span><strong>Lekki-Epe</strong></div><div><span>Size</span><strong>1,200 sqm</strong></div></div>
            </div>
          </div>
        </section>

        {/* SERVICE TABS */}
        <section className="services-section" id="services">
          <div className="section-heading">
            <span className="eyebrow">What do you need?</span>
            <h2>Choose your service</h2>
          </div>

          <div className="service-tabs">
            <button 
              className={`tab-button ${activeTab === 'buy' ? 'active' : ''}`}
              onClick={() => setActiveTab('buy')}
            >
              <span className="tab-icon">🏠</span> Buy Land & Property
            </button>
            <button 
              className={`tab-button ${activeTab === 'rent' ? 'active' : ''}`}
              onClick={() => setActiveTab('rent')}
            >
              <span className="tab-icon">🏢</span> Rent Office & Warehouse
            </button>
            <button 
              className={`tab-button ${activeTab === 'build' ? 'active' : ''}`}
              onClick={() => setActiveTab('build')}
            >
              <span className="tab-icon">🏗️</span> Build & Construction
            </button>
            <button 
              className={`tab-button ${activeTab === 'supply' ? 'active' : ''}`}
              onClick={() => setActiveTab('supply')}
            >
              <span className="tab-icon">📦</span> Supply Materials
            </button>
          </div>

          {/* BUY TAB */}
          {activeTab === 'buy' && (
            <div className="tab-content">
              <div className="tab-header">
                <h3>Buy Land & Properties</h3>
                <p>Verified plots and properties in prime locations across Lagos and Nigeria</p>
              </div>
              <div className="listing-grid">
                {landListings.map((item) => <ListingCard key={item.title} item={item} />)}
              </div>
              <div className="tab-footer">
                <button className="secondary-button">View all land listings</button>
                <button className="secondary-button">Schedule a site visit</button>
              </div>
            </div>
          )}

          {/* RENT TAB */}
          {activeTab === 'rent' && (
            <div className="tab-content">
              <div className="tab-header">
                <h3>Rent Offices, Warehouses & Condos</h3>
                <p>Commercial and residential spaces available for immediate occupancy</p>
              </div>
              <div className="listing-grid">
                {rentals.map((item) => <ListingCard key={item.title} item={item} />)}
              </div>
              <div className="tab-footer">
                <button className="secondary-button">View all rentals</button>
                <button className="secondary-button">Request a viewing</button>
              </div>
            </div>
          )}

          {/* BUILD TAB */}
          {activeTab === 'build' && (
            <div className="tab-content">
              <div className="tab-header">
                <h3>Build Your Project</h3>
                <p>Verified contractors, skilled workers, and a managed material supply chain</p>
              </div>

              <div className="build-subsection">
                <h4>Trusted Builders & Contractors</h4>
                <div className="builders-grid">
                  {contractors.map((contractor) => (
                    <article key={contractor.name} className="builder-card">
                      <div className="builder-header">
                        <h3>{contractor.name}</h3>
                        <span className="rating">★ {contractor.rating}</span>
                      </div>
                      <span className="tag">{contractor.specialty}</span>
                      <p>{contractor.projects} projects completed</p>
                      <button className="text-button">Get a quote</button>
                    </article>
                  ))}
                </div>
              </div>

              <div className="build-subsection">
                <h4>Skilled Tradespeople Network</h4>
                <p className="subsection-intro">Register as a tradesperson or hire verified professionals for your project</p>
                <div className="trades-grid">
                  {trades.map((trade) => (
                    <article key={trade.title} className="trade-card">
                      <div className="trade-icon">{trade.icon}</div>
                      <h3>{trade.title}</h3>
                      <p className="trade-description">{trade.desc}</p>
                      <span className="available">{trade.available} professionals</span>
                      <div className="trade-cta">
                        <button className="text-button">Hire now</button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="tab-footer">
                <button className="secondary-button">Browse all builders</button>
                <button className="secondary-button">Post a job</button>
              </div>
            </div>
          )}

          {/* SUPPLY TAB */}
          {activeTab === 'supply' && (
            <div className="tab-content">
              <div className="tab-header">
                <h3>Building Materials Supply</h3>
                <p>Chisco Home manages your entire supply chain with quality materials and fast delivery</p>
              </div>
              <div className="materials-grid">
                {materials.map((material) => (
                  <article key={material.name} className="material-card">
                    <div className="material-icon">📦</div>
                    <h3>{material.name}</h3>
                    <p className="material-specs">{material.specs}</p>
                    <div className="material-pricing">
                      <div><span>Price</span><strong>{material.price}</strong></div>
                      <div><span>Delivery</span><strong>{material.delivery}</strong></div>
                    </div>
                    <button className="text-button">Order now</button>
                  </article>
                ))}
              </div>
              <div className="supply-benefits">
                <h4>Why order from Chisco?</h4>
                <ul>
                  <li>✓ Quality-vetted materials</li>
                  <li>✓ Competitive bulk pricing</li>
                  <li>✓ Fast, reliable delivery</li>
                  <li>✓ Transparent pricing, no hidden costs</li>
                </ul>
              </div>
              <div className="tab-footer">
                <button className="secondary-button">Browse full catalog</button>
                <button className="secondary-button">Request bulk quote</button>
              </div>
            </div>
          )}
        </section>

        {/* HOW IT WORKS */}
        <section className="process-section">
          <div className="section-heading">
            <span className="eyebrow">The Chisco Home difference</span>
            <h2>Integrated solutions from start to finish</h2>
          </div>
          <div className="process-grid">
            {[
              { number: '01', title: 'Find & acquire', text: 'Browse verified land, properties, or rental spaces. We handle verification and documentation.' },
              { number: '02', title: 'Plan & hire', text: 'Connect with trusted builders and skilled workers. Get quotes and manage your project.' },
              { number: '03', title: 'Build & supply', text: 'We supply materials directly with guaranteed quality, timing, and best pricing.' },
            ].map((step) => (
              <article key={step.number} className="process-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* LEAD FORM */}
        <section className="lead-section" id="contact">
          <div className="lead-copy">
            <span className="eyebrow">Ready to get started?</span>
            <h2>Tell us what you're looking for. We'll guide you forward.</h2>
            <ul>
              <li>Buy or sell land and properties</li>
              <li>Rent an office, warehouse, or condo</li>
              <li>Find builders and skilled workers</li>
              <li>Order quality building materials</li>
            </ul>
          </div>
          <form className="lead-form" action="#">
            <label>
              Full name
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              Email or phone
              <input type="text" placeholder="you@example.com or 08012345678" required />
            </label>
            <label>
              What do you need?
              <select defaultValue="" required>
                <option value="" disabled>Select a service</option>
                <option>Buy land or property</option>
                <option>Sell land or property</option>
                <option>Rent office, warehouse, or condo</option>
                <option>Build a project</option>
                <option>Source skilled workers</option>
                <option>Order building materials</option>
              </select>
            </label>
            <button type="submit" className="primary-button">Get started</button>
          </form>
        </section>

        {/* CTA BANNER */}
        <section className="cta-banner">
          <div>
            <span className="eyebrow alt">Everything you need to succeed</span>
            <h2>One platform. Complete property and construction solutions.</h2>
          </div>
          <button className="primary-button">Explore Chisco Home</button>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <div className="brand-wrap">
            <div className="brand-mark small">C</div>
            <div>
              <div className="brand-name">Chisco Home</div>
              <p>Buy • Rent • Build • Supply</p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#properties">Properties</a>
          <a href="#builders">Builders</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2026 Chisco Home • Building better in Nigeria</p>
      </footer>
    </div>
  );
}
