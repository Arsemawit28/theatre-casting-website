import React, { useState, useEffect } from 'react';
import '../styles/StudentCard.css';

const PLACEHOLDER = 'https://via.placeholder.com/300x400?text=No+Photo';

const StudentCard = ({ student }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [imgSrc, setImgSrc] = useState(student.photo || PLACEHOLDER);

  useEffect(() => {
    setImgSrc(student.photo || PLACEHOLDER);
  }, [student.photo]);

  useEffect(() => {
    if (!showVideo) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setShowVideo(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showVideo]);

  const handleImgError = () => setImgSrc(PLACEHOLDER);

  const hasVideo = Boolean(student.videoUrl && student.videoUrl.trim());

  return (
    <div className="student-card">
      <div className="card-image">
        <img
          src={imgSrc}
          alt={student.name || 'Student photo'}
          loading="lazy"
          onError={handleImgError}
        />
      </div>

      <div className="card-content">
        <h3>{student.name}</h3>

        <div className="info-grid">
          <div className="info-item">
            <span className="label">Age:</span>
            <span className="value">{student.age ?? '—'}</span>
          </div>
          <div className="info-item">
            <span className="label">Height:</span>
            <span className="value">{student.height ?? '—'}</span>
          </div>
          <div className="info-item">
            <span className="label">Hair:</span>
            <span className="value">{student.hairColor ?? '—'}</span>
          </div>
          <div className="info-item">
            <span className="label">Eyes:</span>
            <span className="value">{student.eyeColor ?? '—'}</span>
          </div>
        </div>

        <div className="talents">
          <p className="talents-label">Talents:</p>
          <div className="talent-tags">
            {(student.talents || []).map((talent) => (
              <span key={talent} className="talent-tag">
                {talent.charAt(0).toUpperCase() + talent.slice(1)}
              </span>
            ))}
          </div>
        </div>

        <button
          className="video-button"
          onClick={() => setShowVideo((s) => !s)}
          disabled={!hasVideo}
          aria-expanded={showVideo}
          aria-controls={`video-${student.id}`}
          title={!hasVideo ? 'No demo video available' : undefined}
        >
          {showVideo ? '✕ Close Video' : '▶ Watch Demo'}
        </button>

        {showVideo && hasVideo && (
          <div className="video-container">
            <iframe
              id={`video-${student.id}`}
              width="100%"
              height="315"
              src={student.videoUrl}
              title={`${student.name || 'Student'} Demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {student.contact && (
          <div className="contact">
            <p className="contact-label">Contact:</p>
            <p className="contact-info">
              <a href={`mailto:${student.contact}`}>{student.contact}</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
