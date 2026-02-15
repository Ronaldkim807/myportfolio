import '../styles/pages.css'

export default function About() {
  return (
    <section className="page about">
      <h2>About Me</h2>
      <div className="section">
        <p className="lead-text">
          I am an IT student at KCA University with hands-on experience in full-stack development and application security. I am currently training on Hack The Box (HTB) to strengthen my practical skills in application security and database security. I am also learning AWS because I am working toward a career as a cloud engineer and security engineer. I am open to internships where I can gain more real-world, hands-on experience and contribute to impactful projects.
        </p>
      </div>

      <div className="section">
        <h3>Education</h3>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-title">Bachelor of Science in Information Technology</p>
            <p className="timeline-subtitle">KCA University</p>
            <p className="timeline-date">08/2022 – 11/2026</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Current Focus</h3>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <p className="timeline-title">Practical Skill Building</p>
            <p className="timeline-subtitle">Full-Stack Development, HTB Security Labs, AWS Learning Path</p>
            <p className="timeline-date">Ongoing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
