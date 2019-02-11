import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {id: 1, jpn: "Japanese", eng: "English", pronunciation: "Pronunciation" },
        {id: 2, jpn: "Japanese-2", eng: "English-2", pronunciation: "Pronunciation-2" },
      ],
      currentCard: {}
    }
  }

  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
