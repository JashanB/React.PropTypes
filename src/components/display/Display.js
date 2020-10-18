import React from 'react';
import './Display.css';

export default function Display (props) {
  const newNum = props.displayNum / 2
  return (
    <>
      <p>{newNum}</p>
    </>
  )
}