import React from 'react';
import { useAuth } from '@site/src/context/AuthContext';
import styles from './styles.module.css';

const AuthButtonsNavbarItem = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className={styles.authButtons}>
      {user ? (
        <button onClick={logout} className="button button--secondary">
          Logout
        </button>
      ) : (
        <button onClick={login} className="button button--primary">
          Login
        </button>
      )}
    </div>
  );
};

export default AuthButtonsNavbarItem;
