"use client";

import React from 'react';



const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <p>
          &copy; 2025 Dance With Dancecity Org - 925 542 547 Frivillig Organisasjon. Alle rettigheter reservert.
          <br />
          <a href="mailto:info@dancecity.no">dancewithdancecity@gmail.com</a> | Følg oss på{' '}
          <a href="https://www.facebook.com/dancecity" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          ,{' '}
          <a href="https://www.instagram.com/dancecity" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </footer>

      <style jsx>{`
        footer {
          background: #101820;
          color: #bbb;
          text-align: center;
          padding: 1.5rem 1rem;
          font-size: 0.9rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        a {
          color: #ff4081;
          text-decoration: none;
          transition: text-decoration 0.3s ease;
        }
        a:hover,
        a:focus {
          text-decoration: underline;
          outline-offset: 2px;
          outline: 2px solid #ff4081;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default Footer;
