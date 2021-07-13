import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category'

const Categories = props => {
  return (
    <div id={'categories'} data-testid="categoryList">
      {/* {props.categories.title} */}
      {props.categories.map((items) => {
      return <Category title = {items.title} currentQuestion={props.currentQuestion} clues={items.clues}/>
      })}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;


