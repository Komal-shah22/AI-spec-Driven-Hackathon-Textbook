// src/utils/browser.js

/**
 * Reloads the current page.
 * This function is abstracted to allow easier mocking in tests.
 */
export const reloadPage = () => {
  window.location.reload();
};