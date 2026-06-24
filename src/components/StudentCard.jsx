import React, { useState } from 'react';
import '../styles/StudentCard.css';

const StudentCard = ({ student }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="student-card">
      <div className="card-image">
        <img src={student.photo} alt={student.name} />
      </div>
      <div className="card-content">
        <h3>{student.name}</h3>
        <div className="info-grid">
          <div className="info-item">
            <span className="label">Age:</span>
            <span className="value">{student.age}</span>
          </div>
          <div className="info-item">
            <span className="label">Height:</span>
            <span className="value">{student.height}</span>
          </div>
          <div className="info-item">
            <span className="label">Hair:</span>
            <span className="value">{student.hairColor}</span>
          </div>
          <div className="info-item">
            <span className="label">Eyes:</span>
            <span className="value">{student.eyeColor}</span>
          </div>
        </div>
        <div className="talents">
          <p className="talents-label">Talents:</p>
          <div className="talent-tags">
            {student.talents.map(talent => (
              <span key={talent} className="talent-tag">
                {talent.charAt(0).toUpperCase() + talent.slice(1)}
              </span>
            ))}
          </div>
        </div>
        <button
          className="video-button"
          onClick={() => setShowVideo(!showVideo)}
        >
          {showVideo ? '✕ Close Video' : '▶ Watch Demo'}
        </button>
        {showVideo && (
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src={student.videoUrl}
              title={`${student.name}'s Demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {student.contact && (
          <div className="contact">
            <p className="contact-label">Contact:</p>
            <p className="contact-info">{student.contact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
