import React from 'react';
import Button from './Button';
import Review from './Review'
import boxDesign from '../Styles/Class.css';
import Frame from './Frame'

function ClassRect({ className, professor, description}) {
  return (
    <div style = {{width: '400px', 
    height: 'auto',
    border: '1px solid black', 
    padding: '10px',
    }} >
      <h2>Class: {className}</h2>
      <p>Professor: {professor}</p>
      <p>Class Description:{description}</p>
      <h3> Reviews </h3>
      <Frame></Frame>
      
    </div>
  );
}

export default ClassRect;
