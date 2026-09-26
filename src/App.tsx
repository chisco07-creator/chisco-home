const landListings = [
  { title: 'Greenfield Estate', location: 'Lekki-Epe Expressway', type: 'Residential land for sale', price: '₦18.5M', detail: '1,200 sqm • Gated community • Title ready', accent: 'accent-green' },
  { title: 'Cedar Valley Acres', location: 'Ibeju-Lekki', type: 'Agricultural land for sale', price: '₦27.8M', detail: '2.5 acres • Fertile land • Good road access', accent: 'accent-sand' },
  { title: 'City Crest Business Park', location: 'Ikeja', type: 'Commercial plot for sale', price: '₦42M', detail: '1,500 sqm • High visibility • High ROI potential', accent: 'accent-blue' },
];

const rentals = [
  { title: 'Victoria Island Executive Office', location: 'Victoria Island, Lagos', type: 'Office for rent', price: '₦12M/year', detail: '220 sqm • Furnished • 24/7 power • Parking', accent: 'accent-blue' },
  { title: 'Ikeja Logistics Warehouse', location: 'Ikeja Industrial Estate', type: 'Warehouse for rent', price: '₦18M/year', detail: '1,000 sqm • Loading bay • Secure access', accent: 'accent-purple' },
  { title: 'Harbour View Condo', location: 'Lekki Phase 1', type: 'Condo for rent', price: '₦8.5M/year', detail: '2 Beds • 2 Baths • Estate amenities • Sea view', accent: 'accent-green' },
];

const categories = [
  { name: 'Residential plots', count: '180+ listings', color: 'mint' },
  { name: 'Commercial plots', count: '42 sites', color: 'blue' },
  { name: 'Agricultural land', count: '64 acres', color: 'sand' },
  { name: 'Offices & warehouses', count: '90+ spaces', color: 'violet' },
];

const contractors = [
  ['Afolayan & Sons Construction', 'Residential & estate development', '4.8/5'],
  ['BuildRight Contractors Ltd', 'Commercial & industrial projects', '4.9/5'],
  ['Zenith Construction Group', 'Luxury & high-rise construction', '4.7/5'],
];

const trades = [
  ['🧱', 'Bricklayers', 'Masonry and wall construction', '47 verified professionals'],
  ['⚡', 'Electricians', 'Electrical installations and repairs', '52 verified professionals'],
  ['🔧', 'Plumbers', 'Plumbing systems and installations', '38 verified professionals'],
  ['💧', 'Boreholers', 'Borehole drilling and water systems', '24 verified professionals'],
  ['🪚', 'Carpenters', 'Woodwork and carpentry services', '35 verified professionals'],
  ['🎨', 'Interior decorators', 'Design and finishing services', '28 verified professionals'],
];

const materials = ['Cement & concrete', 'Steel rods & frames', 'Tiles & finishing', 'Electrical & plumbing'];

function ListingGrid({ items }: { items: typeof landListings }) {
  return (
    <div className="listing-grid">
      {items.map((item) => (
        <article key={item.title} className="listing-card">
          <div className={`listing-image ${item.accent}`}><span>{item.type}</span></div>
          <div className="listing-body">
            <div className="listing-topline"><h3>{item.title}</h3><strong>{item.price}</strong></div>
            <p className="listing-location">{item.location}</p>
            <p>{item.detail}</p>
            <button className="text-button">Request details</button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap"><div className="brand-mark">C</div><div><div className="brand-name">Chisco Home</div><div className="brand-tag">Land • Sales • Rentals • Construction</div></div></div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#land" className="nav-link">Buy land</a><a href="#rentals" className="nav-link">Rentals</a><a href="#builders" className="nav-link">Builders</a><a href="#supply" className="nav-link">Supply</a><a href="#trades" className="nav-link">Trades</a>
        </nav>
        <button className="primary-button">Start your project</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy"><span className="eyebrow">Complete property solutions in Nigeria</span><h1>Buy land, rent spaces, and build with one trusted partner.</h1><p>Chisco Home connects you to verified land for sale, quality offices, warehouses and condos for rent, trusted builders, skilled workers, and materials supplied through our own managed supply chain.</p><div className="cta-row"><button className="primary-button">Browse land for sale</button><button className="secondary-button">Explore rentals</button></div><div className="trust-row"><span className="trust-pill">500+ plots sold</span><span className="trust-pill">Office & warehouse rentals</span><span className="trust-pill">Direct material supply</span></div></div>
          <div className="hero-panel"><div className="hero-card"><div className="showcase-head"><span>Featured land</span><span className="status-badge">Title ready</span></div><div className="property-visual" aria-hidden="true"><div className="land-shape" /></div><div className="showcase-meta"><div><h3>Greenfield Estate</h3><p>Ready to build • Lekki-Epe</p></div><strong>₦18.5M</strong></div><div className="mini-stats"><div><span>Size</span><strong>1,200 sqm</strong></div><div><span>Use</span><strong>Residential</strong></div></div></div></div>
        </section>

        <section className="category-section"><div className="section-heading"><span className="eyebrow">Everything for your next move</span><h2>Buy, rent, build, and supply</h2></div><div className="category-grid">{categories.map((category) => <article key={category.name} className={`category-card ${category.color}`}><div className="category-icon">▣</div><h3>{category.name}</h3><p>{category.count}</p></article>)}</div></section>

        <section className="featured-section" id="land"><div className="section-heading split-heading"><div><span className="eyebrow">Land for sale</span><h2>Prime plots for homes and investment</h2></div><button className="secondary-button">View all land</button></div><ListingGrid items={landListings} /></section>

        <section className="featured-section" id="rentals"><div className="section-heading split-heading"><div><span className="eyebrow">Spaces for rent</span><h2>Offices, warehouses, and condos</h2></div><button className="secondary-button">View all rentals</button></div><p className="section-intro">Find productive workspaces, secure logistics facilities, and comfortable homes with flexible viewing support from Chisco Home.</p><ListingGrid items={rentals} /></section>

        <section className="builders-section" id="builders"><div className="section-heading"><span className="eyebrow">Trusted network</span><h2>Verified builders and contractors</h2></div><div className="builders-grid">{contractors.map(([name, specialty, rating]) => <article key={name} className="builder-card"><div className="builder-header"><h3>{name}</h3><span className="rating">★ {rating}</span></div><span className="tag">{specialty}</span><p>Project planning, construction management, and delivery support.</p><button className="text-button">Get a quote</button></article>)}</div></section>

        <section className="supply-section" id="supply"><div className="section-heading"><span className="eyebrow">Chisco-managed supply chain</span><h2>We source and deliver your building materials</h2></div><p className="section-intro">The company manages procurement, quality checks, pricing, and delivery directly—so your project gets the right materials at the right time without unnecessary middlemen.</p><div className="materials-grid">{materials.map((material) => <article key={material} className="material-card"><div className="material-icon">📦</div><h3>{material}</h3><p className="supplier">Quality checked • Bulk pricing available</p><div className="material-details"><span>In stock</span><span className="stock-badge">Chisco delivery</span></div><button className="text-button">Request supply quote</button></article>)}</div></section>

        <section className="trades-section" id="trades"><div className="section-heading"><span className="eyebrow">Skilled workforce</span><h2>Source verified tradespeople for every job</h2></div><p className="section-intro">Bricklayers, electricians, plumbers, boreholers, carpenters, and interior decorators can register, while clients can compare and request trusted professionals.</p><div className="trades-grid">{trades.map(([icon, title, description, available]) => <article key={title} className="trade-card"><div className="trade-icon">{icon}</div><h3>{title}</h3><p className="trade-description">{description}</p><div className="trade-meta"><span>{available}</span><span className="rating">★ 4.7/5</span></div><div className="trade-cta"><button className="text-button">Hire now</button><button className="text-button secondary">Register</button></div></article>)}</div><div className="trades-signup"><span className="eyebrow">Are you a skilled tradesperson?</span><h3>Register with Chisco Home and get more jobs</h3><p>Create a profile, show your work, receive project requests, and grow your reputation.</p><button className="primary-button">Create professional profile</button></div></section>

        <section className="process-section"><div className="section-heading"><span className="eyebrow">How it works</span><h2>One partner from property search to project delivery</h2></div><div className="process-grid">{[['01', 'Buy or rent', 'Choose verified land for sale, or find an office, warehouse, or condo to rent.'], ['02', 'Plan and build', 'Connect with contractors and skilled workers for your project.'], ['03', 'We supply', 'Chisco Home manages procurement and delivers materials directly to your site.']].map(([number, title, text]) => <article key={number} className="process-card"><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="lead-section" id="contact"><div className="lead-copy"><span className="eyebrow">Start your project today</span><h2>Tell us what you need. We’ll coordinate the next step.</h2><ul><li>Buy or sell land and properties</li><li>Rent an office, warehouse, or condo</li><li>Hire builders and skilled workers</li><li>Order materials through our supply chain</li></ul></div><form className="lead-form" action="#"><label>Full name<input type="text" placeholder="Your name" /></label><label>Email or phone<input type="text" placeholder="you@example.com or 08012345678" /></label><label>What do you need?<select defaultValue=""><option value="" disabled>Select a service</option><option>Buy land</option><option>Sell land or property</option><option>Rent an office, warehouse, or condo</option><option>Build a property</option><option>Source skilled workers</option><option>Order building materials</option></select></label><button type="submit" className="primary-button">Get started</button></form></section>

        <section className="cta-banner"><div><span className="eyebrow alt">Ready to move forward?</span><h2>Property, construction, and supply—handled efficiently.</h2></div><button className="primary-button">Talk to Chisco Home</button></section>
      </main>

      <footer className="site-footer"><div><div className="brand-wrap"><div className="brand-mark small">C</div><div><div className="brand-name">Chisco Home</div></div></div><p>Buy • Sell • Rent • Build • Supply</p></div><div className="footer-links"><a href="#land">Buy land</a><a href="#rentals">Rentals</a><a href="#builders">Builders</a><a href="#supply">Supply</a><a href="#trades">Trades</a><a href="#contact">Contact</a></div><p>© 2026 Chisco Home • Building better in Nigeria</p></footer>
    </div>
  );
}
