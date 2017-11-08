import React, { Component } from 'react';
import GraphBar from "./GraphBar";


import './index.css';

class App extends Component {
   constructor (props){
    super(props);
    this.state = {
    pizzaVotes: 0,
    tacoVotes: 0
    };
  }


  render() {
    return (
      <div className="App">
       <div id="container">
       <GraphBar label = {"Pizza"} value={this.state.pizzaVotes}/>
       <GraphBar label = {"Tacos"} value={this.state.tacoVotes}/>
       <button id= "pizza" onClick ={this.handlePizzaClick.bind(this)}>Pizza Votes</button>
       <button id= "tacos" onClick ={this.handleTacoClick.bind(this)}>Taco Votes</button>
      </div>
    </div>
    );
  }
  handlePizzaClick(){
    this.setState(prevState => ({pizzaVotes: prevState.pizzaVotes + 1}));
  }
handleTacoClick(){
  this.setState(prevState => ({tacoVotes: prevState.tacoVotes + 1}));
  }
}


export default App;
