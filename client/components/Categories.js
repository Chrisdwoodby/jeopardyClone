import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category'

const Categories = props => {
  return (

    <div id={'categories'} data-testid="categoryList">
      {/* {props.categories.title} */}
      {props.categories.map((items, i) => {
      return <Category key={i} title = {items.title} currentQuestion={props.currentQuestion} clues={items.clues} selectQuestion={props.selectQuestion} clicked={props.clicked}/>
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


