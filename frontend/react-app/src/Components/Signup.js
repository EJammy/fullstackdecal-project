import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginPage.css';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignup() {
    axios.post("http://localhost:1234/user/signup", { username, email, password })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate('/home');
      })
      .catch(
        err => {
          console.log(err);
          alert(err.response.data.msg);
          navigate('/home');
        });
  }

  return (
    <div className="login-page">
      <h2>Sign Up</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
