import React from 'react';
import { useAuth } from '@site/src/context/AuthContext';

const UserProfileNavbarItem = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="navbar__item">
      <span style={{ marginRight: 8, fontWeight: 'bold' }}>Welcome, {user.name} 👋</span>
      <img src={user.picture} alt={user.name} style={{width: 32, height: 32, borderRadius: '50%', marginRight: 8}} />
    </div>
  );
};

export default UserProfileNavbarItem;
