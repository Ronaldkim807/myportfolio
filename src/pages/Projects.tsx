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
          <p className="project-desc">
            NairobiL&amp;B is a comprehensive event management platform for discovering, booking, and managing
            events in Nairobi and beyond. It supports secure user authentication, real-time ticket availability,
            M-Pesa STK Push payments, and role-based dashboards for users, organizers, and admins. The backend
            is built with Node.js, Express, Prisma, and PostgreSQL, with an OpenAI-powered chatbot for support.
            The frontend uses React and Tailwind CSS to deliver a responsive and user-friendly experience.
          </p>
          <div className="tech-tags">
            <span className="tag">React</span>
            <span className="tag">Express</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Prisma</span>
            <span className="tag">Tailwind CSS</span>
            <span className="tag">M-Pesa STK Push</span>
            <span className="tag">JWT Auth</span>
            <span className="tag">OpenAI Chatbot</span>
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
          <p className="project-desc">
            Modern, responsive React portfolio built with TypeScript, React Router, and custom CSS.
            Deployed on Netlify with CI/CD pipeline for automatic build and deployment on each push.
          </p>
          <div className="tech-tags">
            <span className="tag">React</span>
            <span className="tag">CSS</span>
            <span className="tag">TypeScript</span>
            <span className="tag">React Router</span>
            <span className="tag">Netlify</span>
            <span className="tag">CI/CD</span>
          </div>
          <div className="project-actions">
            <a
              className="project-live-button"
              href="https://ronaldkimutai.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
