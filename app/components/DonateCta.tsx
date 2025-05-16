'use client';

import React from 'react';

const DonateCTA: React.FC = () => {
  return (
    <>
      <section id="donate" className="cta-section" aria-label="Donate or sponsor DanceCity">
        <h2>Support DanceCity</h2>
        <p>
          Your generous donations and sponsorships are vital to keep our community vibrant and dancing. Every gift helps us provide free and affordable activities, purchase equipment, and maintain our
          facilities.
        </p>
        <ul>
          <li>💖 Donations of any amount welcome, and are fully tax-deductible.</li>
          <li>🤝 Sponsorship options available for businesses and individuals - help us grow!</li>
          <li>🎉 Sponsor recognition at events and on our website.</li>
          <li>📅 Flexible giving options: one-time, monthly, or yearly support.</li>
        </ul>
        <div className="cta-buttons">
          <a href="https://example.com/donate" target="_blank" rel="noopener noreferrer" className="btn-primary" role="button" tabIndex={0}>
            Donate
          </a>
          <a href="https://example.com/sponsor" target="_blank" rel="noopener noreferrer" className="btn-secondary" role="button" tabIndex={0}>
            Become a Sponsor
          </a>
        </div>
      </section>

      <style jsx>{`
        .cta-section {
          background: #ff4081;
          color: white;
          text-align: center;
          padding: 3rem 1rem;
          border-radius: 12px;
          margin: 3rem 1rem;
          box-shadow: 0 8px 20px rgb(255 64 129 / 0.5);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        h2 {
          margin-bottom: 0.5rem;
          font-weight: 900;
          font-size: 2.4rem;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 500;
          line-height: 1.4;
        }
        ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 2rem;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
          font-size: 1rem;
          line-height: 1.5;
          color: #ffe1f0;
        }
        ul li {
          margin-bottom: 0.4rem;
        }
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: white;
          color: #ff4081;
          padding: 0.75rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border: none;
          text-decoration: none;
          display: inline-block;
          min-width: 150px;
          line-height: 1.2;
          transition: background-color 0.3s ease;
          font-family: inherit;
        }
        .btn-primary:hover,
        .btn-primary:focus {
          background: #f7f7f7;
          color: #d6336c;
          outline: none;
        }
        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 0.75rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          text-decoration: none;
          display: inline-block;
          min-width: 150px;
          line-height: 1.2;
          font-family: inherit;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .btn-secondary:hover,
        .btn-secondary:focus {
          background: white;
          color: #ff4081;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default DonateCTA;
