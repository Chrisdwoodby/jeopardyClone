import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories'

const Gameboard = props => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'}>
      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
      {/* <Categories/> */}

      <Categories categories = {props.categories} currentQuestion={props.currentQuestion} selectQuestion={props.selectQuestion} clicked={props.clicked}/>

    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
