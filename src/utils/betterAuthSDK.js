// src/utils/betterAuthSDK.js

// This module serves as a placeholder for the actual better-auth.com SDK.
// It implements the conceptual API as outlined in specs/005-auth-personalization/contracts/better-auth-api.md
// For local development and testing, it simulates the behavior of better-auth.com.

let currentUser = null; // Represents the logged-in user
const authStateListeners = new Set();
const users = []; // In-memory user store for simulation

// Helper to simulate network delay
const simulateNetworkDelay = () => new Promise(resolve => setTimeout(resolve, 500));

const betterAuthSDK = {
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
   * Initiates the login flow.
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    await simulateNetworkDelay();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      currentUser = { ...user };
      authStateListeners.forEach(callback => callback(currentUser));
      return true;
    }
    console.error('Login failed: Invalid credentials');
    return false;
  },

  /**
   * Initiates the signup flow.
   * @param {object} userData
   * @param {string} userData.name
   * @param {string} userData.email
   * @param {string} userData.password
   * @param {object} userData.metadata
   */
  async signup(userData) {
    await simulateNetworkDelay();
    if (users.some(u => u.email === userData.email)) {
      console.error('Signup failed: User with this email already exists');
      return false;
    }
    const newUser = {
      userId: `better-user-${users.length + 1}`,
      picture: 'https://github.com/mdo.png', // Default picture
      ...userData,
    };
    users.push(newUser);
    currentUser = { ...newUser };
    authStateListeners.forEach(callback => callback(currentUser));
    return true;
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
   * @param {string} userId
   * @param {object} newMetadata The new metadata to merge.
   */
  async updateMetadata(userId, newMetadata) {
    if (currentUser && currentUser.userId === userId) {
      currentUser.metadata = { ...currentUser.metadata, ...newMetadata };
      const userIndex = users.findIndex(u => u.userId === userId);
      if (userIndex !== -1) {
        users[userIndex].metadata = { ...users[userIndex].metadata, ...newMetadata };
      }
      authStateListeners.forEach(callback => callback(currentUser));
      return true;
    }
    console.error('Metadata update failed: User not found or unauthorized');
    return false;
  },
};

export default betterAuthSDK;