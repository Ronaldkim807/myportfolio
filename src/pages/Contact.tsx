import '../styles/pages.css'

export default function Contact() {
  return (
    <section className="page contact">
      <h2>Contact</h2>
      <p className="contact-intro">Get in touch with me through any of these channels</p>
      <div className="contact-grid">
        <div className="contact-item email-item">
          <div className="contact-icon">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9A2.5 2.5 0 0 0 18.5 5h-13A2.5 2.5 0 0 0 3 7.5z" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M21 7.5l-9 6-9-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Email</h3>
          <p><a href="mailto:kimutaironald48@gmail.com">kimutaironald48@gmail.com</a></p>
          <a href="mailto:kimutaironald48@gmail.com" className="contact-button">Send Email</a>
        </div>
        <div className="contact-item whatsapp-item">
          <div className="contact-icon">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4L21 21l-4.1-1.1A8.5 8.5 0 1 1 21 11.5z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </div>
          <h3>WhatsApp</h3>
          <p><a href="https://wa.me/254716012357" target="_blank" rel="noopener noreferrer">0716012357</a></p>
          <a href="https://wa.me/254716012357" target="_blank" rel="noopener noreferrer" className="contact-button whatsapp-btn">Chat on WhatsApp</a>
        </div>
        <div className="contact-item phone-item">
          <div className="contact-icon">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.81.36 1.6.7 2.34a1 1 0 0 1-.24 1l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a1 1 0 0 1 1-.24c.74.34 1.53.58 2.34.7a1 1 0 0 1 .75 1V21z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </div>
          <h3>Phone</h3>
          <p><a href="tel:0716012357">0716012357</a></p>
          <a href="tel:0716012357" className="contact-button">Call Now</a>
        </div>
        <div className="contact-item location-item">
          <div className="contact-icon">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="12" cy="9" r="2.2" fill="currentColor" />
            </svg>
          </div>
          <h3>Location</h3>
          <p>Nairobi County, Kenya</p>
        </div>
        <div className="contact-item linkedin-item">
          <div className="contact-icon">
            <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <rect x="2" y="3" width="20" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M7 10v7M7 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM12 10v7M12 7a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v0M17 10v4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>LinkedIn</h3>
          <p><a href="https://linkedin.com/in/ronald-kimutai-172129345/" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
          <a href="https://linkedin.com/in/ronald-kimutai-172129345/" target="_blank" rel="noopener noreferrer" className="contact-button linkedin-btn">View Profile</a>
        </div>
      </div>
    </section>
  )
}
