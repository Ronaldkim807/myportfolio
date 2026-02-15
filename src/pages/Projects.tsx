import '../styles/pages.css'

export default function Projects() {
  return (
    <section className="page projects">
      <h2>Projects</h2>
      <div className="grid projects-grid">
        <article className="project-card">
          <div className="project-header">
            <h3>NairobiL&amp;B Event Booking System</h3>
            <span className="status">Ongoing</span>
          </div>
          <p className="project-desc">React, Express, PostgreSQL, and M-Pesa Daraja integration for booking and payments.</p>
          <div className="tech-tags">
            <span className="tag">React</span>
            <span className="tag">Express</span>
            <span className="tag">PostgreSQL</span>
          </div>
          <div className="project-actions">
            <a
              className="project-live-button"
              href="https://nairobilbcom.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-header">
            <h3>AI-Powered Learning Management System</h3>
            <span className="status">Completed</span>
          </div>
          <p className="project-desc">Role management and personalized course suggestions.</p>
          <div className="tech-tags">
            <span className="tag">AI-LMS</span>
            <span className="tag">Full Stack</span>
          </div>
          <div className="project-actions">
            <a className="project-live-button disabled" href="#" aria-disabled="true">
              View Live
            </a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-header">
            <h3>Personal Portfolio Website</h3>
            <span className="status">Completed</span>
          </div>
          <p className="project-desc">Modern, responsive React portfolio with animations and contact form.</p>
          <div className="tech-tags">
            <span className="tag">React</span>
            <span className="tag">CSS</span>
            <span className="tag">TypeScript</span>
          </div>
          <div className="project-actions">
            <a className="project-live-button disabled" href="#" aria-disabled="true">
              View Live
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
