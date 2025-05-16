'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <section className="hero" aria-label="Velkommen til DanceCity frivillig organisasjon">
        <div className="hero-content" role="banner">
          <h1>Velkommen til DanceCity</h1>
          <p>Ditt lokale samlingspunkt for dans, morsomme aktiviteter og frivillig engasjement!</p>
          <a href="#volunteer" className="btn-primary">
            Bli Med I Dag
          </a>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1650&q=80')
            no-repeat center center/cover;
          height: 60vh;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1rem;
        }
        .hero-content {
          background: rgba(16, 24, 32, 0.75);
          padding: 2rem;
          border-radius: 12px;
          max-width: 700px;
          animation: fadeInUp 1s ease forwards;
        }
        h1 {
          font-size: 2.8rem;
          margin-bottom: 0.5rem;
          font-weight: 900;
          letter-spacing: 2px;
        }
        p {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .btn-primary {
          background: #ff4081;
          color: white;
          padding: 0.75rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: background-color 0.3s ease;
          display: inline-block;
          text-decoration: none;
        }
        .btn-primary:hover,
        .btn-primary:focus {
          background: #e03570;
          outline: none;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
