import './style/App.css'
import Class from './Components/Class';




function App() {
  return (
    <div className="App">
      <div className = "my_div" id = "title_area">
      <h1> Class Reviewer </h1>
      </div>
     <Class className="CS70" professor="Rao" description = " Discrete Math and Probability Theory"/>  
     <Class className="CS61B" professor="Hug" description = " Data Structures and Algorithms"/>  
    </div>
  );
}

export default App;
