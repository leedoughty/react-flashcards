import React from 'react';
import './Card.css'

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="jpn">{props.jpn}</div>
      </div>
      <div className="back">
        <div className="eng">{props.eng}</div>
        <div className="pronunciation">{props.pronunciation}</div>
      </div>
    </div>
  </div>
)

export default Card;
