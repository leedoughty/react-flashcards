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

  componentWillMount() {
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }

  render() {
    return (
      <div className="App">
        <Card jpn={this.state.currentCard.jpn}
              eng={this.state.currentCard.eng}
              pronunciation={this.state.currentCard.pronunciation}
              />
      </div>
    );
  }
}

export default App;
