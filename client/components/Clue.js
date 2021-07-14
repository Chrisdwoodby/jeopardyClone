import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  if (props.clicked) {
    return (
      <div class="clueValue">
      {props.clueObject.question}
      {/* {console.log(props.clicked)} */}
    </div>
    )
  }
  return (
    <div class="clueValue" onClick={props.selectQuestion}>
    {props.clueObject.value}
    {/* {console.log(props.clicked)} */}
  </div>
  )
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
