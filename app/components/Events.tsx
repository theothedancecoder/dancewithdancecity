'use client';

import React from 'react';

type Event = {
  date: string; // ISO date string
  title: string;
  time: string;
  location: string;
  notes?: string;
  highlight?: boolean;
};

const events: Event[] = [
  {
    date: '2025-06-08 ',
    title: 'Bryggedans Med Dancecity',
    time: '13:00 - 16:00',
    location: 'Salt Art and Music',
    notes: 'Ta med familien og nyt en ettermiddag med latin dansemusikk utendørs hver søndag.',
    highlight: true,
  },
  {
    date: '2025-04-04 ',
    title: 'Bachatera',
    time: '19:00 - 23:00',
    location: 'Cafe SØR',
    notes: 'Gratis bachata sosialdans for alle hver onsdag.',
  },
  {
    date: '2025-06-08',
    title: 'Jam',
    time: '17:00 - 21:00',
    location: 'Cafe Sor',
    notes: 'Jam session med live band. Vi inviterer deltakere til å synge og uttrykke sine musikalske talenter med et live band og fremføre en mini konsert!',
    highlight: true,
  },
  {
    date: '2025-05-11 ',
    title: 'Flip Kidz',
    time: '16:00 - 19:00',
    location: 'Dancecity',
    notes: 'Trygt rom for barn å leke og ha det gøy mens de lærer nye ferdigheter og får nye venner. Aldersgruppe 2-6 år',
  },
  {
    date: '2025-06-6',
    title: 'Oslo Utendørs',
    time: '15:00 - 17:00',
    location: 'Opera Hus',
    notes: 'Gratis dans og kurs foran Opera huset for alle.',
  },
  {
    date: '2025-06-5',
    title: 'Samtidsdans Workshop',
    time: '18:00 - 20:00',
    location: 'Dancecity',
    notes: 'Påmelding på forhånd anbefales. Gratis ungdomsworkshop for 13-17 år.',
  },
];

const Events: React.FC = () => {
  return (
    <>
      <section id="events" aria-labelledby="events-title">
        <h2 id="events-title">Upcoming Events &amp; Timetable</h2>
        <p className="section-subtitle">
          Mark your calendar and don’t miss our exciting dance workshops, community gatherings, and volunteer meetups. We update our schedule regularly to keep you in the loop!
        </p>
        <table className="events-timetable" role="table" aria-describedby="events-desc" tabIndex={0}>
          <caption id="events-desc" className="visually-hidden">
            Kommende arrangementer og ukentlig aktivitetsplan
          </caption>
          <thead>
            <tr>
              <th scope="col">Dato</th>
              <th scope="col">Arrangement</th>
              <th scope="col">Tid</th>
              <th scope="col">Sted</th>
              <th scope="col" aria-label="Beskrivelse eller notater">
                Notater
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map(({ date, title, time, location, notes, highlight }) => (
              <tr key={date + title} className={highlight ? 'event-highlight' : undefined}>
                <td>
                  <time dateTime={date}>{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                </td>
                <td>{title}</td>
                <td>{time}</td>
                <td>{location}</td>
                <td>{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
        .events-timetable {
          max-width: 800px;
          margin: 0 auto;
          border-collapse: collapse;
          width: 100%;
          font-size: 1rem;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgb(39 39 39 / 0.1);
        }
        .events-timetable th,
        .events-timetable td {
          border: 1px solid #ddd;
          padding: 0.9rem 1rem;
          text-align: center;
          vertical-align: middle;
        }
        .events-timetable thead {
          background: #ff4081;
          color: white;
          font-weight: 700;
        }
        .events-timetable tbody tr:nth-child(even) {
          background: #f9f9f9;
        }
        .event-highlight {
          font-weight: 700;
          color: #101820;
        }
        .visually-hidden {
          position: absolute !important;
          height: 1px;
          width: 1px;
          overflow: hidden;
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap;
          border: 0;
          padding: 0;
          margin: -1px;
        }
      `}</style>
    </>
  );
};

export default Events;
