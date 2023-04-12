import React from 'react';

function ClassRect({ className, professor }) {
  return (
    <div style={{ 
      width: '200px', 
      height: '100px', 
      border: '1px solid black', 
      padding: '10px' 
    }}>
      <h2>{className}</h2>
      <p>{professor}</p>
    </div>
  );
}

export default ClassRect;
