// src/utils/mockAuthSDK.js

// This module simulates the better-auth.com SDK for development purposes.
// It provides a conceptual API as outlined in specs/005-auth-personalization/contracts/better-auth-api.md

let currentUser = null; // Represents the logged-in user
const authStateListeners = new Set();

// Helper to simulate network delay
const simulateNetworkDelay = () => new Promise(resolve => setTimeout(resolve, 500));

const mockAuthSDK = {
  /**
   * Retrieves the profile of the currently authenticated user.
   * @returns {Promise<object | null>} The user profile or null if no user is logged in.
   */
  async getUser() {
    await simulateNetworkDelay();
    return currentUser;
  },

  /**
   * Subscribes to changes in the authentication state (login/logout).
   * @param {function(object | null): void} callback The function to call when auth state changes.
   * @returns {function(): void} An unsubscribe function.
   */
  onAuthStateChanged(callback) {
    authStateListeners.add(callback);
    // Immediately call the callback with current state
    callback(currentUser);
    return () => {
      authStateListeners.delete(callback);
    };
  },

  /**
   * Initiates the login flow. For this mock, it directly logs in a dummy user.
   * In a real scenario, this would redirect to a hosted login page.
   */
  async login() {
    await simulateNetworkDelay();
    // Simulate a successful login with a dummy user
    currentUser = {
      userId: 'mock-user-123',
      email: 'mock@example.com',
      metadata: {
        softwareBackground: 'INTERMEDIATE', // Default mock background
        hardwareBackground: 'ROBOTICS',
        knownTechnologies: ['ROS 2', 'Python'],
      },
    };
    authStateListeners.forEach(callback => callback(currentUser));
  },

  /**
   * Initiates the signup flow. For this mock, it directly logs in a dummy user
   * with a different profile to simulate a new signup.
   * In a real scenario, this would redirect to a hosted signup page with custom fields.
   */
  async signup() {
    await simulateNetworkDelay();
    // Simulate a successful signup with a dummy user with a different background
    currentUser = {
      userId: 'mock-user-456',
      email: 'new.mock@example.com',
      metadata: {
        softwareBackground: 'BEGINNER',
        hardwareBackground: 'BASIC_ELECTRONICS',
        knownTechnologies: ['JavaScript'],
      },
    };
    authStateListeners.forEach(callback => callback(currentUser));
  },

  /**
   * Logs the user out and clears their session.
   */
  async logout() {
    await simulateNetworkDelay();
    currentUser = null;
    authStateListeners.forEach(callback => callback(currentUser));
  },

  /**
   * Simulates updating user metadata.
   * @param {object} newMetadata The new metadata to merge.
   */
  async updateMetadata(newMetadata) {
    if (currentUser) {
      currentUser.metadata = { ...currentUser.metadata, ...newMetadata };
      authStateListeners.forEach(callback => callback(currentUser));
    }
  },
};

export default mockAuthSDK;