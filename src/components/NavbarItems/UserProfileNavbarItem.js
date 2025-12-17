import React from 'react';
import { useAuth } from '@site/src/context/AuthContext';
import styles from './styles.module.css';

const UserProfileNavbarItem = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className={styles.userProfile}>
      <img src={user.picture} alt={user.name} className={styles.userProfileImage} />
      <span className={styles.userProfileName}>{user.name}</span>
    </div>
  );
};

export default UserProfileNavbarItem;
