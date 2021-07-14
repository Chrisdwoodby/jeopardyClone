import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  console.log(props.clueObject)
  if (props.clicked === true) {
    return (
      <div id="gameboard" onClick={props.selectQuestion}>
      {props.clueObject.question}
    </div>
    )
  } else if (props.clicked === false) {
  return (
    <div class="clueValue">
    <div onClick={props.selectQuestion}>{props.clueObject.value}</div>
  </div>
  )
  }
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
