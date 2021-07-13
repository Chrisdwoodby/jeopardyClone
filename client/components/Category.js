import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories'

const Category = props => {
  return (
    <div className={'category'} data-testid="category">
      {/* display category */}
      {/* display clues for each category */}
      {props.title.title}
       {/* the current question will be referenced here */}
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
