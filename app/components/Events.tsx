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
    notes: 'Bring your family and come and enjoy an afternoon of outdoor latin dance music every sunday .',
    highlight: true,
  },
  {
    date: '2025-04-04 ',
    title: 'Bachatera',
    time: '19:00 - 23:00',
    location: 'Cafe SØR',
    notes: 'Gratis bachata social for alle every wednesday.',
  },
  {
    date: '2025-06-08',
    title: 'Jam',
    time: '17:00 - 21:00',
    location: 'Cafe Sor',
    notes: 'Jam session with live band. inviting participants to sing and express their music talents with a live band and perform a mini concert!',
    highlight: true,
  },
  {
    date: '2025-05-11 ',
    title: 'Flip Kidz',
    time: '16:00 - 19:00',
    location: 'Dancecity',
    notes: 'safe space for kids to play and have fun while learning new skills and making new friends. age group 2-6 yrs',
  },
  {
    date: '2025-06-6',
    title: 'Oslo outdoors',
    time: '15:00 - 17:00',
    location: 'Opera Hus',
    notes: 'gratis dancing and classes infront of the Opera hus for alle.',
  },
  {
    date: '2025-06-5',
    title: 'Contemporary Dance Workshop',
    time: '18:00 - 20:00',
    location: 'Dancecity',
    notes: 'Register in advance recommended. gratis youth workshop for 13-17 years.',
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
            Upcoming events and weekly activity timetable
          </caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Event</th>
              <th scope="col">Time</th>
              <th scope="col">Location</th>
              <th scope="col" aria-label="Description or notes">
                Notes
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
