const listings = [
  {
    title: 'Lakeside Villa',
    type: 'For Sale',
    price: '$540,000',
    details: '4 Beds • 3 Baths • 2,300 sq ft',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Harbor View Condo',
    type: 'For Rent',
    price: '$2,400/mo',
    details: '2 Beds • 2 Baths • Sea view',
    accent: 'from-sky-500 to-blue-700',
  },
  {
    title: 'Industrial Warehouse',
    type: 'Rental',
    price: '$6,800/mo',
    details: '7,500 sq ft • Loading bay',
    accent: 'from-violet-500 to-purple-700',
  },
];

const quickStats = [
  { label: 'Homes sold', value: '1.2K+' },
  { label: 'Rental units', value: '320' },
  { label: 'Cities covered', value: '18' },
  { label: 'Client rating', value: '4.9/5' },
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
        <nav className="nav">
          <a href="#buy">Buy</a>
          <a href="#rent">Rent</a>
          <a href="#sell">Sell</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="primary-button">Book a visit</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Trusted property experts</span>
            <h1>Find the right place to live, invest, and grow.</h1>
            <p>
              Discover prime land, modern homes, offices, and warehouse spaces from a team that knows the market.
            </p>
            <div className="cta-row">
              <button className="primary-button">Browse listings</button>
              <button className="ghost-button">Talk to an agent</button>
            </div>
            <div className="stats-grid">
              {quickStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card card-main">
              <div className="mini-header">
                <span>Featured property</span>
                <span className="pill">New</span>
              </div>
              <div className="property-visual">
                <div className="house-shape" />
              </div>
              <div className="card-bottom">
                <div>
                  <h3>Sunset Heights</h3>
                  <p>4 Bed • 3 Bath • Gated estate</p>
                </div>
                <strong>$620,000</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="listing-section" id="buy">
          <div className="section-heading">
            <span className="eyebrow">Available properties</span>
            <h2>Curated homes and spaces</h2>
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
                  <p>{listing.details}</p>
                  <button className="text-button">View details</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
