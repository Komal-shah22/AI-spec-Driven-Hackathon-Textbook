import React, { useState } from 'react';
import { useAuth } from '@site/src/context/AuthContext';
import { useHistory } from '@docusaurus/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    history.push('/');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
