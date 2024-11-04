// src/components/SkillCard.js
import React from 'react';

function SkillCard({ title, description, author, onEnroll }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <small>Impartido por: {author}</small>
      <button onClick={onEnroll}>Inscribirse</button>
    </div>
  );
}

export default SkillCard;
