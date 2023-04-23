import React from 'react';
import '../Styles/Home.css';
import Class from './Class';
import data from '../courseList.json'




const Home = () => {


    
    
    const classes = Object.entries(data).map(([name, description]) => ({ name, description }));

  return (
    <div className="Home">
      <div className="my_div" id="title_area">
        <h1>Class Reviewer</h1>
      </div>
  
      {classes.reduce((rows, cls, index) => {
        if (index % 3 === 0) rows.push([]);
        rows[rows.length - 1].push(
          <div style={{ marginRight: '10px', marginBottom: '15px'}}>
            <Class className={cls.name} description={cls.description} />
          </div>
        );
        return rows;
      }, []).map((row) => (
        <div className="rowC">{row}</div>
      ))}
    </div>
  );

}


export default Home;