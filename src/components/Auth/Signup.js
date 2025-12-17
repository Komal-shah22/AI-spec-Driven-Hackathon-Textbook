import React, { useState } from 'react';
import { useAuth } from '@site/src/context/AuthContext';
import { useHistory } from '@docusaurus/router';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [softwareBackground, setSoftwareBackground] = useState('BEGINNER');
  const [hardwareBackground, setHardwareBackground] = useState('NO_EXPERIENCE');
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup({
      name,
      email,
      password,
      metadata: {
        softwareBackground,
        hardwareBackground,
        knownTechnologies: [],
      },
    });
    history.push('/');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="softwareBackground">Software Background</label>
          <select
            id="softwareBackground"
            value={softwareBackground}
            onChange={(e) => setSoftwareBackground(e.target.value)}
            className="form-select"
          >
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCED">Advanced</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hardwareBackground">Hardware Background</label>
          <select
            id="hardwareBackground"
            value={hardwareBackground}
            onChange={(e) => setHardwareBackground(e.target.value)}
            className="form-select"
          >
            <option value="NO_EXPERIENCE">No experience</option>
            <option value="BASIC_ELECTRONICS">Basic Electronics</option>
            <option value="ROBOTICS">Robotics</option>
            <option value="EMBEDDED_SYSTEMS">Embedded Systems</option>
          </select>
        </div>
        <button type="submit" className="form-button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
