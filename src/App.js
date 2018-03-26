import React, { Component } from "react";
import FriendCard from "./components/MemeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import office from "./office.json";
import "./App.css";


class App extends Component {
  state = {
    office: office,
    notification:"",
    points: 0,
    topScore: 0,
    newOffice: office
  };

  // try implementing the map function
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  chosenMeme = id => {
    const friendFinder = this.state.newOffice.find(item => item.id === id);
    if (friendFinder === undefined) {
      this.setState({
        notification: "You guessed incorrectly!",
        topScore: (this.state.points > this.state.topScore) ? this.state.points : this.state.topScore,
        points: 0,
        office: office,
        newOffice: office
      });
    }
    else {
      const newFriends = this.state.newOffice.filter(item => item.id !== id);
      this.setState({
        notification: "Good Guess!",
        points: this.state.points + 1,
        office: office,
        newOffice: newFriends
      });
    }
    this.shuffleArray(office);
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar
          notification = {this.state.notification}
          points = {this.state.points}
          topScore = {this.state.topScore} />
          <Title>Block List</Title>
          <div className="container">
            {this.state.office.map(friend => (
              <FriendCard
                chosenMeme={this.chosenMeme}
                removeFriend={this.removeFriend}
                id={friend.id}
                key={friend.id}
                image={friend.image}
              />
            ))}
          </div>
      </Wrapper>
    );
  }
}

export default App;
