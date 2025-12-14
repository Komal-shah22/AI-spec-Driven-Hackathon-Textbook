/*
import React, { useState } from 'react';
import { useAuth } from '@site/src/context/AuthContext';

function SignupForm({ onSignupSuccess }) {
  const { signup } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [softwareBackground, setSoftwareBackground] = useState('');
  const [hardwareBackground, setHardwareBackground] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!username || !password || !softwareBackground || !hardwareBackground) {
      setError('All fields are required.');
      return;
    }

    const success = signup(username, password, softwareBackground, hardwareBackground);
    if (success) {
      onSignupSuccess();
    } else {
      setError('Username already exists.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '20px auto' }}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <select
        value={softwareBackground}
        onChange={(e) => setSoftwareBackground(e.target.value)}
        style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      >
        <option value="">Select Software Background</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <textarea
        placeholder="Hardware / Robotics Background"
        value={hardwareBackground}
        onChange={(e) => setHardwareBackground(e.target.value)}
        rows="4"
        style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      ></textarea>
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
*/