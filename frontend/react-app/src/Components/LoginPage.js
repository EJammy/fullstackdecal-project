import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginPage.css';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    axios.post("http://localhost:1234/user/login", { email, password })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate('/home');
      })
      .catch(
        err => {
          console.log(err);
          alert('Invalid email, username, or password');
        });
  }

  return (
    <div className="login-page">
      <h2>Login Page</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Log In</button>
      </form>
      <a href='/signup'>signup</a>
    </div>
  );
}

export default LoginPage;
