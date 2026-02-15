import '../styles/home.css'

export default function Home() {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Ronald Kiptulwo Kimutai</h1>
          <p className="hero-subtitle">IT Student | Full-Stack &amp; Security Learner</p>
          <p className="hero-summary">
            I am an IT student with hands-on experience in full-stack development and application security.
            I am currently doing HTB training to improve application and database security skills, while
            learning AWS as I work toward becoming a cloud and security engineer. Open to internships for
            real-world hands-on experience.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="button">Get In Touch</a>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="profile-container">
            <img 
              src="/Photo/my photo 1.jpg" 
              alt="Ronald Kimutai Profile" 
              className="profile-image"
              loading="lazy"
            />
          </div>
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      <section className="grid cards">
        <article className="card skill-card">
          <div className="card-icon">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
              <rect x="2" y="5" width="20" height="12" rx="1" ry="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 19h20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h3>Skills</h3>
          <ul>
            <li>Full-Stack Development</li>
            <li>Application Security</li>
            <li>Database Security</li>
            <li>AWS Cloud Fundamentals</li>
          </ul>
        </article>

        <article className="card achievement-card">
          <div className="card-icon">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
              <path d="M12 2l2.39 4.847L19 8.179l-3.5 3.412L16.78 18 12 15.27 7.22 18l1.28-6.409L5 8.179l4.61-.332L12 2z" fill="currentColor" />
            </svg>
          </div>
          <h3>Achievements</h3>
          <p>Built production-ready projects, completed ongoing HTB labs, and continuously improving cloud and security engineering skills.</p>
        </article>

        <article className="card contact-card">
          <div className="card-icon">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
              <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 18.5 5h-13A2.5 2.5 0 0 0 3 7.5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 7.5l-9 6-9-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Contact</h3>
          <p>kimutaironald48@gmail.com — 0716012357</p>
        </article>
      </section>
    </section>
  )
}
