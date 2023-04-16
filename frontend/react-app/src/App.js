import './App.css';
import Class from './Components/Class';


function App() {
  return (
    <div className="App">
      <h1> *INSERT TITLE HERE* </h1>
     <Class className="CS70" professor="Rao" description = " Discrete Math and Probability Theory"/>  
     <Class className="CS61B" professor="Hug" description = " Data Structures and Algorithms"/>  
    </div>
  );
}

export default App;
