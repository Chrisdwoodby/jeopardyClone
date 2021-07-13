import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';
import Response from './Response'
import Categories from './Categories'
// import Category from './Category'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }
  selectQuestion() {
    
  }

  render() {

    return (

      <div id={'app'}>
        What is Reactor 2?
        <Gameboard currentQuestion={this.state.currentQuestion} categories={this.state.results}/>
        {/* <Categories categories={this.state.results}/> */}
        <Scoreboard score={this.state.score}/>
        <Response submitResponse={this.state.answeredQuestions}/>
      </div>
    );
  }
}

//  <div>{this.state.results.map(item) => {
//   <div>{item.title}</div>
// }}</div>