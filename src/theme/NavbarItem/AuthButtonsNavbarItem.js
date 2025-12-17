import React from 'react';
import { useAuth } from '@site/src/context/AuthContext';

const AuthButtonsNavbarItem = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="navbar__item">
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
