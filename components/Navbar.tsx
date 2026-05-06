'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Tiara.
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={link.name === 'Contact' ? 'navbar-btn-contact' : 'navbar-link'}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="navbar-mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}