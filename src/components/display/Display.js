import React from 'react';
import './Display.css';
import PropTypes from 'prop-types'


export default function Display(props) {
  // const newNum = props.displayNum.number
  // const newNum = props.displayNum / 2
  return (
    <>
      <p>{props.displayNum.number}</p>
    </>
  )
}

Display.propTypes = {
  displayNum: PropTypes.shape({
    number: PropTypes.number.isRequired
  })
}

// Display.propTypes = {
//   displayNum: PropTypes.number.isRequired
// }