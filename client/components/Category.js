import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories'
import Clue from './Clue'

const Category = props => {
  console.log(props.title)
  return (
    <div className={'category'} data-testid="category">
      {/* display category */}
      {/* display clues for each category */}
      {props.title}
      {props.clues.map((clue, i) => {
        return <Clue key={i} clueObject={clue} selectQuestion={props.selectQuestion} clicked={props.clicked}/>
      })}
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
