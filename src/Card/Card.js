import React, { Component } from 'react';
import './Card.css'

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="jpn">Japanese word</div>
      </div>
      <div className="back">
        <div className="eng">English word</div>
        <div className="pronunciation">Pronunciation</div>
      </div>
    </div>
  </div>
)

export default Card;
