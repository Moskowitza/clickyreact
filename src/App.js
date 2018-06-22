import React, { Component } from "react";
import LostCard from "./components/LostCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the Lost Charaters cards.json array
  state = {
    cards: cards,
    counter: 0
  };
  handleClick= (id) => {
  // FIND this.state.cards for card with an id  equal to the id being clicked
    const card = this.state.cards.find(card => card.id === id);
    //if isClicked=false
    if(card.isClicked == false){
      card.isCLicked=true;
      this.shuffleCard();
      this.updateCount();
    }
  }


  updateCount = () =>{
    this.setState({
       counter : this.state.counter +1
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
        <Title>Cards List</Title>
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


  // removeCard = id => {
  //   // Filter this.state.cards for LostCharacters with an id not equal to the id being removed
  //   const cards = this.state.cards.filter(card => card.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ cards });
  // };
//  shuffleCard=(array) =>{
  //   let currentIndex = array.length, temporaryValue, randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {

  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }

  //   return array;
  // }