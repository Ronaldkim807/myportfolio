import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-section">
          <strong>Ronald K. Kimutai</strong>
          <div className="footer-subtitle">IT Student — KCA University</div>
        </div>
        <div className="footer-section footer-contact">
          <h4>Quick Contact</h4>
          <div className="footer-links">
            <a href="mailto:kimutaironald48@gmail.com" title="Send Email" className="footer-icon-link email">
              <span className="icon">
                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9A2.5 2.5 0 0 0 18.5 5h-13A2.5 2.5 0 0 0 3 7.5z" fill="none" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M21 7.5l-9 6-9-6" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text">Email</span>
            </a>
            <a href="https://wa.me/254716012357" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="footer-icon-link whatsapp">
              <span className="icon">
                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4L21 21l-4.1-1.1A8.5 8.5 0 1 1 21 11.5z" fill="none" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              </span>
              <span className="text">WhatsApp</span>
            </a>
            <a href="tel:0716012357" title="Call" className="footer-icon-link phone">
              <span className="icon">
                <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.81.36 1.6.7 2.34a1 1 0 0 1-.24 1l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a1 1 0 0 1 1-.24c.74.34 1.53.58 2.34.7a1 1 0 0 1 .75 1V21z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </span>
              <span className="text">Call</span>
            </a>
          </div>
        </div>
        <div className="footer-section footer-social">
          <h4>Social</h4>
          <a href="https://linkedin.com/in/ronald-kimutai-172129345/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            LinkedIn
          </a>
        </div>
        <div className="footer-section footer-credit">
          <p>&copy; 2026 Ronald K. Kimutai. All rights reserved.</p>
          <p className="footer-tagline">Built with React, TypeScript & Vite</p>
        </div>
      </div>
    </footer>
  )
}
