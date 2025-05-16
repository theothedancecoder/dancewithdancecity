'use client';

import React, { useState } from 'react';

type Activity = {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  ariaLabel: string;
};

const activities: Activity[] = [
  {
    id: 'BeSporty',
    title: 'Flip Kidz',
    description:
      'I samarbeid med BeSporty har vi nå Flipkidz, et svensk konsept i Oslo. For barn mellom 2-6 år i Oslo hver onsdag!',
    youtubeId: 'EqcUgWqqtX0',
    ariaLabel: 'Flip kidz video',
  },
  {
    id: 'Elder Care',
    title: 'Seniordans',
    description:
      'Vi arrangerer forskjellige danseaktiviteter for eldre eller personer med begrenset bevegelighet, og hjelper dem med å oppleve gleden ved bevegelse.',
    youtubeId: '1EKsdyZjyMg',
    ariaLabel: 'Seniordans video',
  },
  {
    id: 'salsa',
    title: 'Salsa Dans Martine',
    description:
      'Hver søndag, bli med oss i Salt Art and Music for latin sosial dans for hele familien. Perfeksjoner fotarbeidet ditt, møt nye venner og fordyp deg i livlige latinske rytmer.',
    youtubeId: 'byMynTZj3Us',
    ariaLabel: 'Salsa dansekveld video',
  },
  {
    id: 'Kids/Youth',
    title: 'Barn/Ungdom Sone',
    description:
      'Vi samarbeider med andre klubber og grupper for å arrangere forskjellige aktiviteter for barn og ungdom.',
    youtubeId: 'Wbc5KAILxHc',
    ariaLabel: 'ungdomssone video',
  },
];

const Activities: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(activities.map(activity => [activity.id, true]))
  );

  const handleIframeLoad = (id: string) => {
    setLoadingStates(prev => ({ ...prev, [id]: false }));
  };
  return (
    <>
      <section id="activities" aria-labelledby="activities-title">
        <h2 id="activities-title">Våre Aktiviteter</h2>
        <p className="section-subtitle">
          Opplev et variert utvalg av danseworkshops og fellesarrangementer designet for å inspirere til bevegelse og fellesskap. Passende for alle aldre og ferdighetsnivåer, våre mangfoldige aktiviteter feirer kultur, kreativitet og moro.
        </p>
        <div className="activities-grid">
          {activities.map(({ id, title, description, youtubeId, ariaLabel }) => (
            <article key={id} className="activity-card" tabIndex={0} aria-label={ariaLabel}>
              <div className="video-container">
                <>
                  {(loadingStates[id] !== false) && (
                    <div className="loading-placeholder">
                    <div className="loading-text">Laster video...</div>
                    </div>
                  )}
                  <iframe
                    className={`activity-video ${loadingStates[id] ? 'loading' : ''}`}
                    loading="lazy"
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                    title={ariaLabel}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => handleIframeLoad(id)}
                  />
                </>
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{title}</h3>
                <p className="activity-desc">{description}</p>
              </div>
            </article>
          ))}
        </div>
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

        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
        }
        .activity-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgb(39 39 39 / 0.1);
          transition: box-shadow 0.3s ease;
        }
        .activity-card:hover {
          box-shadow: 0 8px 24px rgb(39 39 39 / 0.2);
        }
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-radius: 12px 12px 0 0;
        }
        .loading-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px 12px 0 0;
        }
        .loading-text {
          color: #666;
          font-size: 1rem;
        }
        .activity-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .activity-video.loading {
          opacity: 0;
        }
        .activity-content {
          padding: 1rem 1rem 1.5rem;
        }
        .activity-title {
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #101820;
        }
        .activity-desc {
          font-size: 0.95rem;
          color: #555;
        }
      `}</style>
    </>
  );
};

export default Activities;
