import '../styles/pages.css'

export default function Services() {
  return (
    <section className="page services">
      <h2>What I Do</h2>
      <p className="section-description">
        I combine full-stack development skills with a growing security mindset to build 
        functional, secure, and user-friendly applications.
      </p>
      
      <div className="grid cards">
        <article className="card service-card">
          <div className="card-icon">FS</div>
          <h3>Full-Stack Development</h3>
          <p>End-to-end web applications with modern frameworks and robust backend systems.</p>
          <ul>
            <li>Frontend: Angular · React · TypeScript</li>
            <li>Backend: Node.js · FastAPI · Express</li>
            <li>Database: PostgreSQL · Prisma ORM</li>
          </ul>
        </article>

        <article className="card service-card">
          <div className="card-icon">AS</div>
          <h3>Application Security</h3>
          <p>Secure coding practices and vulnerability awareness built through HTB Academy training.</p>
          <ul>
            <li>Secure authentication &amp; authorization</li>
            <li>Database security fundamentals</li>
            <li>API security best practices</li>
          </ul>
        </article>

        <article className="card service-card">
          <div className="card-icon">DA</div>
          <h3>API Development &amp; Testing</h3>
          <p>RESTful API design, integration, and testing using tools like Postman.</p>
          <ul>
            <li>API design with FastAPI · Node.js</li>
            <li>Testing with Postman</li>
            <li>Integration with frontend applications</li>
          </ul>
        </article>

        <article className="card service-card">
          <div className="card-icon">IT</div>
          <h3>IT Support &amp; Administration</h3>
          <p>Reliable technical support, diagnostics, and desktop administration.</p>
          <ul>
            <li>OS installation · System configuration</li>
            <li>Performance tuning · Troubleshooting</li>
            <li>User assistance and training</li>
          </ul>
        </article>

        <article className="card service-card">
          <div className="card-icon">CL</div>
          <h3>Cloud Learning &amp; Implementation</h3>
          <p>Building AWS cloud fundamentals with practical application.</p>
          <ul>
            <li>AWS core services exploration</li>
            <li>Cloud architecture basics</li>
            <li>CI/CD pipeline deployment (Netlify)</li>
          </ul>
        </article>
      </div>
    </section>
  )
}