import React from 'react';
import '../Styles/Home.css';
import Class from './Class';




const Home = () => {
  

  return (
    <div className = "Home">
    <div className = "my_div" id = "title_area">
    <h1> Class Reviewer </h1>
    </div>
    <div className='rowC'>
      <div style={{ marginRight: '30px' }}>
  <Class className="CS70" professor="Rao" description = " Discrete Math and Probability Theory"/>  
  </div>
  <Class className="CS61a" professor="DeNero" description = "Structure and Interpretation of Computer Programs"/>  
  </div>

  </div>
  )

}


export default Home;