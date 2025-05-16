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
    title: 'Flip kidz',
    description:
      'in collaboration with BeSporty we now have flipkidz a swedish concept in Oslo . For kids aged between 2-6yrsin Oslo every wednesday!',
    youtubeId: 'EqcUgWqqtX0',
    ariaLabel: 'Flip kidz video',
  },
  {
    id: 'Elder Care',
    title: 'Elder dance ',
    description:
      'We run different dance activities for elders or people with limited mobility helping them enjoy the joy of movement.',
    youtubeId: '1EKsdyZjyMg', 


    ariaLabel: 'Ballet beginner class video',
  },
  {
    id: 'salsa',
    title: 'Salsa Dance Martine',
    description:
      'Every sunday , join us salt Art and Music for latin social dancing for the whole family. Perfect your footwork, meet new friends, and immerse yourself in vibrant Latin rhythms.',
    youtubeId: 'byMynTZj3Us',
    ariaLabel: 'Salsa dance night video',
  },
  {
    id: 'Kids/Youth',
    title: 'kids/youth zone',
    description:
      'We collaborate with other clubs and groups to host different activities for kids and youth.',
    youtubeId: 'Wbc5KAILxHc',
    ariaLabel: 'youth zone video',
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
        <h2 id="activities-title">Our Activities</h2>
        <p className="section-subtitle">
          Experience a variety of dance workshops and community events designed to inspire movement and connection. Suitable for all ages and skill levels, our diverse activities celebrate culture,
          creativity, and fun.
        </p>
        <div className="activities-grid">
          {activities.map(({ id, title, description, youtubeId, ariaLabel }) => (
            <article key={id} className="activity-card" tabIndex={0} aria-label={ariaLabel}>
              <div className="video-container">
                <>
                  {(loadingStates[id] !== false) && (
                    <div className="loading-placeholder">
                      <div className="loading-text">Loading video...</div>
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
