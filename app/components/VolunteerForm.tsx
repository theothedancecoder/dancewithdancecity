'use client';

import React, { useState, FormEvent } from 'react';

const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In real app, submit data to backend here
    alert('Thank you for signing up! We will contact you soon.');
    setFormData({ name: '', email: '', interest: '', message: '' });
    setSubmitSuccess(true);
  };

  return (
    <>
      <section id="volunteer" aria-labelledby="volunteer-title">
        <h2 id="volunteer-title">Bli Frivillig Hos Oss</h2>
        <p className="section-subtitle">
          Å være frivillig hos DanceCity er en givende måte å knytte bånd med lokalsamfunnet og støtte kunsten. Enten du hjelper til med å organisere arrangementer, underviser i dans, eller støtter vårt administrative arbeid, gjør ditt bidrag en stor forskjell!
        </p>
        <form className="volunteer-form" aria-label="Volunteer sign up form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">
              Fullt Navn <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ditt fulle navn"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              E-postadresse <span aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="din.epost@eksempel.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="interest">
              Jeg er interessert i <span aria-hidden="true">*</span>
            </label>
            <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required>
              <option value="" disabled>
                Velg et alternativ
              </option>
              <option value="events">Hjelpe med Arrangementer</option>
              <option value="teaching">Undervisning i Dans</option>
              <option value="admin">Administrativ Støtte</option>
              <option value="sponsorship">Sponsorkontakt</option>
              <option value="other">Annet</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Tilleggsinformasjon</label>
            <textarea
              id="message"
              name="message"
              placeholder="Fortell oss litt om deg selv"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Meld Deg På Nå" />
          {submitSuccess && <p className="success-message">Takk for påmeldingen!</p>}
        </form>
      </section>

      <style jsx>{`
        section {
          padding: 4rem 0 2rem;
        }
        h2 {
          text-align: center;
          font-size: 2.4rem;
          color: #101820;
          margin-bottom: 1rem;
          font-weight: 800;
        }
        .section-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 3rem;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .volunteer-form {
          max-width: 450px;
          margin: 0 auto;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgb(39 39 39 / 0.08);
        }
        .form-group {
          margin-bottom: 1.2rem;
          text-align: left;
        }
        label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.3rem;
          color: #101820;
        }
        input[type='text'],
        input[type='email'],
        select,
        textarea {
          width: 100%;
          padding: 0.6rem;
          font-size: 1rem;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-family: inherit;
          resize: vertical;
          transition: border-color 0.3s ease;
        }
        input[type='text']:focus,
        input[type='email']:focus,
        select:focus,
        textarea:focus {
          border-color: #ff4081;
          outline: none;
        }
        textarea {
          min-height: 100px;
        }
        input[type='submit'] {
          background: #ff4081;
          color: white;
          border: none;
          padding: 0.75rem 1.8rem;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: 1rem;
        }
        input[type='submit']:hover,
        input[type='submit']:focus {
          background: #e03570;
        }
        .success-message {
          margin-top: 1rem;
          color: green;
          font-weight: 700;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default VolunteerForm;
