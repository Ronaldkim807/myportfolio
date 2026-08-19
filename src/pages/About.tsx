import '../styles/pages.css'

export default function About() {
  return (
    <section className="page about">
      <h2>About Me</h2>
      
      <div className="section">
        <p className="lead-text">
          I'm a Junior Software Engineer and Security Researcher with a Bachelor of Science in Information Technology from KCA University (graduating November 2026). I recently completed a software development internship at the Kenya Revenue Authority (KRA), where I built full-stack web applications using Angular, React, Node.js, FastAPI, and PostgreSQL.
        </p>
        <p className="lead-text">
          My work at KRA included designing and building <strong>TaxConnect</strong>—a visitor feedback and service-tracking system for Times Tower—and contributing to the Electronic Tax Invoice Management System (ETIMS). I'm passionate about application security, currently training through HTB Academy, and actively learning AWS as I work toward becoming a Cloud and Security Engineer.
        </p>
        <p className="lead-text">
          I'm always open to internships and real-world hands-on opportunities where I can grow, contribute, and solve meaningful problems.
        </p>
      </div>

      <div className="section">
        <h3>Education</h3>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-title">Bachelor of Science in Information Technology</p>
            <p className="timeline-subtitle">KCA University, Ruaraka, Nairobi County</p>
            <p className="timeline-date">08/2022 – 11/2026</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-title">Kenya Certificate of Secondary Education (KCSE)</p>
            <p className="timeline-subtitle">Tambach High School, Elgeyo-Marakwet County</p>
            <p className="timeline-date">01/2018 – 04/2022</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Certifications</h3>
        <div className="cert-grid">
          <div className="cert-item">
            <span className="cert-badge">✓</span>
            <div>
              <p className="cert-title">Introduction to Cybersecurity</p>
              <p className="cert-issuer">Cisco</p>
            </div>
          </div>
          <div className="cert-item">
            <span className="cert-badge">✓</span>
            <div>
              <p className="cert-title">Network Support Security</p>
              <p className="cert-issuer">Cisco</p>
            </div>
          </div>
          <div className="cert-item">
            <span className="cert-badge">✓</span>
            <div>
              <p className="cert-title">IT Support Basics</p>
              <p className="cert-issuer">Cisco</p>
            </div>
          </div>
          <div className="cert-item">
            <span className="cert-badge">✓</span>
            <div>
              <p className="cert-title">Data Analysis</p>
              <p className="cert-issuer">Cisco</p>
            </div>
          </div>
          <div className="cert-item">
            <span className="cert-badge">✓</span>
            <div>
              <p className="cert-title">Python Essentials</p>
              <p className="cert-issuer">Cisco</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Current Focus</h3>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-title">HTB Academy — Application &amp; Database Security</p>
            <p className="timeline-subtitle">Hands-on labs and practical security training</p>
            <p className="timeline-date">Ongoing</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-title">AWS Cloud Learning Path</p>
            <p className="timeline-subtitle">Building cloud fundamentals toward Cloud Engineering</p>
            <p className="timeline-date">Ongoing</p>
          </div>
        </div>
      </div>
    </section>
  )
}