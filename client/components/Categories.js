import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category'

const Categories = props => {
  return (
    <div id={'categories'} data-testid="categoryList">
      {props.categories.map((items, i) => {
       return<Category title = {items}/>
      //  return <div key = {i}>{items.title}</div>
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


// {props.categories.map((items) => {
//   return items.title
// })}