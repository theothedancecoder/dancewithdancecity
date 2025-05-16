'use client';

import React, { useState } from 'react';

const navLinks = [
  { href: '#activities', label: 'Activities' },
  { href: '#events', label: 'Events' },
  { href: '#volunteer', label: 'Volunteer' },
  { href: '#donate', label: 'Donate' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="container nav-container">
          <div className="logo" tabIndex={0}>
            DanceCity
          </div>
          <nav aria-label="Primary Navigation">
            <button
              aria-expanded={menuOpen}
              aria-controls="primary-menu"
              className={`menu-toggle${menuOpen ? ' active' : ''}`}
              id="menuToggle"
              aria-label="Toggle navigation menu"
              onClick={toggleMenu}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            <ul id="primary-menu" className={menuOpen ? 'show' : undefined}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} onClick={handleLinkClick}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <style jsx>{`
        header {
          background: #101820;
          color: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff4081;
          outline-offset: 4px;
        }
        nav ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        nav ul li {
          margin-left: 1.5rem;
        }
        nav ul li:first-child {
          margin-left: 0;
        }
        nav a {
          font-weight: 600;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        nav a:hover,
        nav a:focus {
          text-decoration: underline;
          outline-offset: 3px;
          outline: 2px solid #ff4081;
          border-radius: 4px;
        }

        /* Hamburger Menu */
        .menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
          width: 30px;
          height: 25px;
          background: none;
          border: none;
          padding: 0;
          outline-offset: 4px;
        }
        .menu-toggle span {
          background: #ff4081;
          height: 3px;
          margin-bottom: 5px;
          border-radius: 2px;
          transition: 0.3s;
          display: block;
        }
        .menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        .menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Responsive nav */
        @media (max-width: 768px) {
          nav ul {
            display: none;
            flex-direction: column;
            background: #101820;
            position: absolute;
            top: 58px;
            right: 1rem;
            width: 200px;
            border-radius: 0 0 0 12px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgb(0 0 0 / 0.3);
          }
          nav ul.show {
            display: flex;
          }
          nav ul li {
            margin: 0;
            border-bottom: 1px solid #222;
          }
          nav ul li:last-child {
            border-bottom: none;
          }
          nav a {
            display: block;
            padding: 12px 20px;
          }
          .menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
