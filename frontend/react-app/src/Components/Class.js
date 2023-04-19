import React from 'react';
import Button from './Button';
import Review from './Review'
import '../Styles/Class.css'


import Frame from './Frame'

function ClassRect({ className, professor, description}) {
  return (
    <div id = 'boxDesign' >
      <div id = "classStyle">
      <h2>Class: {className}</h2></div>
      <p>Professor: {professor}</p>
      <p>Class Description:{description}</p>
      <h3> Reviews </h3>
      <Frame></Frame>
      
    </div>
  );
}

export default ClassRect;
