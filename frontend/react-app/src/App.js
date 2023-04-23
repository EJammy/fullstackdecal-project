import './App.css'
import Class from './Components/Class';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import { Routes } from 'react-router-dom';
import Home from './Components/Home';




function App() {
  return (
    <div className="App">
  
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </Router>
  
      
    </div>
  );
}

export default App;
