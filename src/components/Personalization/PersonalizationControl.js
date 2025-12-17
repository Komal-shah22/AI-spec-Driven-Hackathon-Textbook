// src/components/Personalization/PersonalizationControl.js
import React, { useState, useEffect } from 'react';
import styles from './PersonalizationControl.module.css'; // Assuming CSS module for styling
import { reloadPage } from '../../utils/browser'; // Import the new utility
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // Import useDocusaurusContext

const STORAGE_KEY = 'isPersonalizationActive';

const PersonalizationControl = () => {
  const { i18n } = useDocusaurusContext(); // Initialize i18n
  const [isPersonalizationActive, setIsPersonalizationActive] = useState(() => {
    // Initialize from localStorage, default to false
    return localStorage.getItem(STORAGE_KEY) === 'true';
  });

  // Helper function to translate messages
  const translate = (id, defaultMessage) => i18n.currentLocale === 'ur' ? i18n.locales[i18n.currentLocale].data[id]?.message || defaultMessage : defaultMessage;

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isPersonalizationActive.toString());
  }, [isPersonalizationActive]);

  const togglePersonalization = () => {
    setIsPersonalizationActive(prev => !prev);
    // Force a re-render of content, useful for Docusaurus
    reloadPage();
  };

  const resetPersonalization = () => {
    setIsPersonalizationActive(false);
    localStorage.removeItem(STORAGE_KEY);
    // Force a re-render of content
    reloadPage();
  };

  return (
    <div className={styles.controlContainer}>
      <button className={styles.controlButton} onClick={togglePersonalization}>
        {isPersonalizationActive ? translate('theme.personalization.disable', 'Disable Personalization') : translate('theme.personalization.enable', 'Enable Personalization')}
      </button>
      {isPersonalizationActive && (
        <button className={styles.controlButton} onClick={resetPersonalization}>
          {translate('theme.personalization.reset', 'Reset Personalization')}
        </button>
      )}
    </div>
  );
};

export default PersonalizationControl;