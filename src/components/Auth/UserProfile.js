// src/components/Auth/UserProfile.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './UserProfile.module.css'; // Assuming CSS module for styling

const UserProfile = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null; // Don't show anything while loading
  }

  if (!user) {
    return null; // Don't show if no user is logged in
  }

  return (
    <div className={styles.userProfile}>
      <span className={styles.userName}>Welcome, {user.name || user.email}</span>
      {/* Optionally, display an avatar or more user details */}
    </div>
  );
};

export default UserProfile;