import React, { Component } from "react";
import LostCard from "./components/LostCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Info from "./components/Info";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the Lost Charaters cards.json array
  state = {
    cards: cards,
    counter: 0,
    highScore: 1,
    infoMsg: "Click a Character to Start"
  };


  handleClick = (id) => {
    // FIND this.state.cards for card with an id  equal to the id being clicked
    const card = this.state.cards.find(card => card.id === id);
    //all cards
    const cards = this.state.cards;
    console.log(card);
    //if isClicked=false

    if (card.isClicked === false && this.state.counter < 11) {
      this.clickSatus(card);
      this.shuffleCard();
      this.updateCount();
      this.highScore(this.state.counter);
      this.continue();
    } else if(card.isClicked === false && this.state.highScore === 11){
      this.setState({
        highScore:12,
        infoMsg: "You WON!! Click a card to start again"
      })
    }else{
      this.resetGame(cards);
    }
  }


  continue = () => {
    this.setState({
      infoMsg: "Keep Going!"
    })
  }

  //reset all cards click to false
  resetGame = (cards) => {
    cards.map(card => card.isClicked = false)
    this.setState({
      cards: cards,
      counter: 0,
    })
    if (this.state.highScore < 12) {
      this.setState({
        infoMsg: "Let's play again!"
      })
    }

  };
  highScore = () => {
    if (this.state.counter >= this.state.highScore && this.state.highScore < 12) {
      this.setState({
        highScore: this.state.highScore + 1
      })
    }

  }
  clickSatus = (card) => {
    card.isClicked = true;
    this.setState({
      cards: cards
    })
  }
  updateCount = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  shuffleCard = () => {
    const cards = this.state.cards.sort(
      //Our comparison function
      function (a, b) {
        return 0.5 - Math.random();
      });
    this.setState({
      cards: cards
    });
  }

  // Map over this.state.cards and render a LostCard component for each cards.json object
  render() {
    return (
      <Wrapper>
        <Title>A Lost Memory Game</Title>
        <Info>
          <p>Score:{this.state.counter}</p>
          <p>High Score:{this.state.highScore}</p>
          <p>Info:{this.state.infoMsg}</p>
        </Info>
        {this.state.cards.map(card => (
          <LostCard
            handleClick={this.handleClick}
            id={card.id}
            key={card.id}
            name={card.name}
            isClicked={card.isClicked}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;