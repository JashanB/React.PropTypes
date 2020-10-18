import React from 'react';
import './Display.css';
// import PropTypes from 'prop-types'


export default function Display (props) {
  const newNum = props.displayNum / 2
  return (
    <>
      <p>{newNum}</p>
    </>
  )
}

// Display.propTypes = {
//   displayNum: PropTypes.number
// }
