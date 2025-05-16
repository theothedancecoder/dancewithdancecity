'use client';

import React from 'react';
import Link from 'next/link';

const UnderConstruction: React.FC = () => {
  return (
    <>
      <div className="construction-page">
        <h1>🚧 Under Utvikling 🚧</h1>
        <p>Vår sponsorside er for tiden under utvikling. Vennligst kom tilbake snart!</p>
        <Link href="/" className="back-button">Tilbake til Forsiden</Link>
      </div>

      <style jsx>{`
        .construction-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          background: #f5f5f5;
        }

        h1 {
          font-size: 2.5rem;
          color: #ff4081;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
        }

        .back-button {
          background: #ff4081;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          transition: background-color 0.3s ease;
        }

        .back-button:hover {
          background: #e03570;
        }
      `}</style>
    </>
  );
};

export default UnderConstruction;
