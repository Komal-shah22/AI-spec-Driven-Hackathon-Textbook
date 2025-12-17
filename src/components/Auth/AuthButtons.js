// src/components/Auth/AuthButtons.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './AuthButtons.module.css'; // Assuming CSS module for styling
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const AuthButtons = () => {
  const { i18n } = useDocusaurusContext();
  const { user, isLoading, login, signup, logout } = useAuth();

  // Helper function to translate messages
  const translate = (id, defaultMessage) => i18n.currentLocale === 'ur' ? i18n.locales[i18n.currentLocale].data[id]?.message || defaultMessage : defaultMessage;


  if (isLoading) {
    return <div className={styles.loading}>{translate('theme.auth.loading', 'Loading...')}</div>;
  }

  if (user) {
    return (
      <button className={styles.authButton} onClick={logout}>
        {translate('theme.auth.logout', 'Logout')}
      </button>
    );
  }

  return (
    <>
      <button className={styles.authButton} onClick={login}>
        {translate('theme.auth.login', 'Login')}
      </button>
      <button className={styles.authButton} onClick={signup}>
        {translate('theme.auth.signup', 'Sign Up')}
      </button>
    </>
  );
};

export default AuthButtons;