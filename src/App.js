import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.updateCard = this.updateCard.bind(this);

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

  updateCard() {
    console.log("New card!");
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card jpn={this.state.currentCard.jpn}
              eng={this.state.currentCard.eng}
              pronunciation={this.state.currentCard.pronunciation}
          />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
    );
  }
}

export default App;
