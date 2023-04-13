import React from 'react';

function ClassRect({ className, professor, description}) {
  return (
    <div style={{ 
      width: '400px', 
      height: '150px', 
      border: '1px solid black', 
      padding: '10px' 
    }}>
      <h2>Class: {className}</h2>
      <p>Professor: {professor}</p>
      <p>Class Description:{description}</p>
    </div>
  );
}

export default ClassRect;
