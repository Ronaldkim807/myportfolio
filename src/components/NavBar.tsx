import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './nav.css'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="brand">
          Ronald K. Kimutai
        </Link>
        
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}