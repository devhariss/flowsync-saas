const navItems = ['Product', 'Solutions', 'Pricing', 'Customers']

const metrics = [
  { label: 'Workflow runs', value: '32M+', note: 'processed each month' },
  { label: 'Time recovered', value: '18.4k', note: 'hours saved weekly' },
  { label: 'Team adoption', value: '94%', note: 'weekly active usage' },
]

const features = [
  {
    title: 'Visual orchestration',
    text: 'Build production workflows with a fast visual editor, branching logic, retries, approvals, and reusable templates.',
  },
  {
    title: 'AI-assisted automations',
    text: 'Generate flows from plain-English prompts, detect bottlenecks, and receive intelligent recommendations before issues escalate.',
  },
  {
    title: 'Enterprise governance',
    text: 'Ship with audit trails, role-based permissions, environment controls, and secure vendor approvals out of the box.',
  },
  {
    title: 'Live observability',
    text: 'Track every run with searchable logs, throughput analytics, SLA views, and incident alerts in one control layer.',
  },
]

const testimonials = [
  {
    quote:
      'FlowSync replaced a messy stack of scripts and brittle zaps. We now launch operational automations in hours, not weeks.',
    name: 'Leena Shah',
    role: 'VP Operations, Northstar Cloud',
  },
  {
    quote:
      'It is one of the rare SaaS tools our engineers and GTM team both love. The experience feels premium and dependable.',
    name: 'Dev Mehra',
    role: 'Head of Product, LayerForge',
  },
]

const pricing = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'For individuals validating workflow ideas.',
    points: ['5 live workflows', '1,000 runs per month', 'Core integrations', 'Community support'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$49',
    desc: 'For teams replacing repetitive operational work.',
    points: ['Unlimited workflows', '50,000 runs per month', 'Analytics and AI suggestions', 'Priority support'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For organizations needing compliance and scale.',
    points: ['Unlimited runs', 'SSO and SCIM', 'Audit logs', 'Dedicated success manager'],
    featured: false,
  },
]

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#" className="brand" aria-label="FlowSync home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="9" fill="currentColor" />
                <path
                  d="M9 16.5C9 12 13 9 16.5 9C19.6 9 22 10.9 22 13.8C22 17 19.2 18 16.8 18C14.8 18 12 18.9 12 21.4C12 23.5 13.7 24 16.3 24C20.1 24 23.4 21.4 24 17.3"
                  stroke="white"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>FlowSync</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>
          <div className="topbar-actions">
            <a className="link-muted" href="#pricing">Log in</a>
            <a className="button button-primary" href="#pricing">Start free</a>
          </div>
        </div>
      </header>

      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Next.js 15+ SaaS starter</div>
            <h1>Automate every workflow without slowing your team down.</h1>
            <p className="lede">
              FlowSync gives product, ops, and engineering teams one elegant place to connect tools,
              launch automations, and monitor every mission-critical workflow in real time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary button-large" href="#pricing">Start free</a>
              <a className="button button-secondary button-large" href="#product">Explore product</a>
            </div>
            <div className="metric-row">
              {metrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <p>{metric.note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-panel" aria-label="Product dashboard preview">
            <div className="panel-window">
              <div className="panel-chrome"><span /><span /><span /></div>
              <div className="panel-layout">
                <aside className="panel-sidebar">
                  <div className="sidebar-title">Control plane</div>
                  <div className="sidebar-item sidebar-item-active">Overview</div>
                  <div className="sidebar-item">Automations</div>
                  <div className="sidebar-item">Integrations</div>
                  <div className="sidebar-item">Analytics</div>
                  <div className="sidebar-item">Security</div>
                </aside>
                <div className="panel-main">
                  <div className="mini-kpis">
                    <div className="mini-card"><span>Runs today</span><strong>2,418</strong></div>
                    <div className="mini-card"><span>Success rate</span><strong>99.8%</strong></div>
                    <div className="mini-card"><span>Saved this week</span><strong>38h</strong></div>
                  </div>
                  <div className="graph-card">
                    <div className="graph-head">
                      <span>Workflow throughput</span>
                      <span className="graph-chip">Live</span>
                    </div>
                    <div className="bars" aria-hidden="true">
                      {[36, 54, 48, 72, 68, 84, 96].map((height, index) => (
                        <div key={index} className="bar-col">
                          <div className="bar-fill" style={{ height: `${height}%` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="event-card">
                    <div>
                      <strong>AI recommendation</strong>
                      <p>Add retry logic to lead enrichment flow to reduce failures by 14%.</p>
                    </div>
                    <button className="button button-tertiary">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust-strip">
        <div className="container trust-inner">
          <p>Trusted by fast-moving teams across SaaS, fintech, support, and RevOps.</p>
          <div className="logo-strip" aria-label="Partner brands">
            <span>Stripe</span><span>Notion</span><span>Linear</span><span>Vercel</span><span>Figma</span>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="container section-head">
          <div className="eyebrow">Product</div>
          <h2>Everything your team needs to move faster, not just automate more.</h2>
          <p>Built for speed, reliability, and the way modern teams actually operate.</p>
        </div>
        <div className="container feature-grid">
          {features.map((feature, index) => (
            <article key={feature.title} className={`feature-card ${index === 0 ? 'feature-card-large' : ''}`}>
              <div className="feature-index">0{index + 1}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted-band" id="solutions">
        <div className="container solution-grid">
          <div>
            <div className="eyebrow">Why it works</div>
            <h2>Built for teams that care about speed, polish, and operational trust.</h2>
          </div>
          <div className="solution-list">
            <article>
              <strong>Faster launches</strong>
              <p>App Router architecture and reusable sections make this starter easy to evolve into a full marketing site.</p>
            </article>
            <article>
              <strong>Design consistency</strong>
              <p>A restrained palette, strong typography, and clear spacing keep the interface premium instead of template-like.</p>
            </article>
            <article>
              <strong>Conversion structure</strong>
              <p>The page includes hero, proof, features, testimonials, and pricing — ready for real SaaS positioning.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="customers">
        <div className="container testimonial-layout">
          <div className="section-head section-head-left">
            <div className="eyebrow">Customers</div>
            <h2>Teams adopt it quickly because the product story is immediately clear.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <p>&#8220;{testimonial.quote}&#8221;</p>
                <div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container section-head">
          <div className="eyebrow">Pricing</div>
          <h2>Simple plans that scale from first workflow to enterprise rollout.</h2>
          <p>No hidden fees. Cancel anytime.</p>
        </div>
        <div className="container pricing-grid">
          {pricing.map((plan) => (
            <article key={plan.name} className={`price-card ${plan.featured ? 'price-card-featured' : ''}`}>
              {plan.featured ? <div className="price-badge">Most popular</div> : null}
              <h3>{plan.name}</h3>
              <div className="price-value">{plan.price}</div>
              <p>{plan.desc}</p>
              <ul>{plan.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <a className={`button ${plan.featured ? 'button-primary' : 'button-secondary'}`} href="#">
                {plan.name === 'Enterprise' ? 'Contact sales' : 'Get started'}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-card">
          <div>
            <div className="eyebrow">Launch faster</div>
            <h2>Your polished Next.js 15+ SaaS foundation, ready to ship.</h2>
          </div>
          <a className="button button-primary button-large" href="#">Clone and customize</a>
        </div>
      </section>
    </main>
  )
}
