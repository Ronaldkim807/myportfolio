import '../styles/pages.css'

export default function Services() {
  return (
    <section className="page services">
      <h2>Services</h2>
      <div className="grid cards">
        <article className="card service-card">
          <div className="card-icon">AS</div>
          <h3>Application Security</h3>
          <p>Secure coding support and vulnerability awareness for safer applications.</p>
          <ul>
            <li>Secure coding practices</li>
            <li>Vulnerability checks</li>
            <li>Authentication hardening</li>
          </ul>
        </article>

        <article className="card service-card">
          <div className="card-icon">FS</div>
          <h3>Full-Stack Development</h3>
          <p>Build modern web apps from frontend interfaces to backend APIs.</p>
          <ul>
            <li>Responsive frontend UI</li>
            <li>API integration</li>
            <li>Database-backed features</li>
          </ul>
        </article>

        <article className="card service-card">
          <div className="card-icon">IT</div>
          <h3>IT Support</h3>
          <p>Reliable technical support for software, hardware and user issues.</p>
          <ul>
            <li>Diagnostics and troubleshooting</li>
            <li>Software setup</li>
            <li>User assistance and training</li>
          </ul>
        </article>

        <article className="card service-card">
          <div className="card-icon">DA</div>
          <h3>Desktop Administration</h3>
          <p>Desktop environment setup, maintenance and endpoint optimization.</p>
          <ul>
            <li>OS installation and updates</li>
            <li>System configuration</li>
            <li>Performance tuning</li>
          </ul>
        </article>

        <article className="card service-card">
          <div className="card-icon">JC</div>
          <h3>Junior Cyber Security</h3>
          <p>Entry-level cyber defense support with practical security fundamentals.</p>
          <ul>
            <li>Basic threat monitoring</li>
            <li>Access control support</li>
            <li>Security awareness best practices</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
