import React from 'react';
import Button from './Button';
import Review from './Review'
import boxDesign from '../Styles/Class.css';

function ClassRect({ className, professor, description}) {
  return (
    <div style = {{width: '400px', 
    height: '200px',
    border: '1px solid black', 
    padding: '10px'}} >
      <h2>Class: {className}</h2>
      <p>Professor: {professor}</p>
      <p>Class Description:{description}</p>
      <Review></Review>
      
    </div>
  );
}

export default ClassRect;
