// src/utils/auth.js
import betterAuthSDK from './betterAuthSDK'; // Import the betterAuth SDK

/**
 * @typedef {object} UserProfile
 * @property {string} userId
 * @property {string} email
 * @property {object} metadata
 * @property {('BEGINNER' | 'INTERMEDIATE' | 'ADVANCED')} metadata.softwareBackground
 * @property {('NO_EXPERIENCE' | 'BASIC_ELECTRONICS' | 'ROBOTICS' | 'EMBEDDED_SYSTEMS')} metadata.hardwareBackground
 * @property {string[]} metadata.knownTechnologies
 */

/**
 * Provides an interface to the authentication service.
 * In a real application, this would interact with the better-auth.com SDK directly.
 * Here, it wraps our mock SDK.
 */
const auth = {
  /**
   * Retrieves the profile of the currently authenticated user.
   * @returns {Promise<UserProfile | null>} The user profile or null if no user is logged in.
   */
  async getUser() {
    return betterAuthSDK.getUser();
  },

  /**
   * Subscribes to changes in the authentication state (login/logout).
   * @param {function(UserProfile | null): void} callback The function to call when auth state changes.
   * @returns {function(): void} An unsubscribe function.
   */
  onAuthStateChanged(callback) {
    return betterAuthSDK.onAuthStateChanged(callback);
  },

  /**
   * Initiates the login flow.
   */
  async login() {
    await betterAuthSDK.login();
  },

  /**
   * Initiates the signup flow.
   */
  async signup() {
    await betterAuthSDK.signup();
  },

  /**
   * Logs the user out.
   */
  async logout() {
    await betterAuthSDK.logout();
  },

  /**
   * Updates user metadata (simulated).
   * @param {object} newMetadata The new metadata to merge.
   */
  async updateMetadata(newMetadata) {
    await betterAuthSDK.updateMetadata(newMetadata);
  }
};

export default auth;