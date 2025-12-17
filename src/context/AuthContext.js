// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import auth from '../utils/auth'; // Our auth utility

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
 * @typedef {object} AuthContextType
 * @property {UserProfile | null} user - The authenticated user profile, or null.
 * @property {boolean} isLoading - True if the authentication state is currently being loaded.
 * @property {function(): Promise<void>} login - Function to initiate the login flow.
 * @property {function(): Promise<void>} signup - Function to initiate the signup flow.
 * @property {function(): Promise<void>} logout - Function to initiate the logout flow.
 */

const AuthContext = createContext(/** @type {AuthContextType | undefined} */ (undefined));

/**
 * Custom hook to use the AuthContext.
 * @returns {AuthContextType}
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

/**
 * AuthProvider component to manage and provide authentication state.
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    await auth.login(email, password);
  };

  const signup = async (userData) => {
    setIsLoading(true);
    await auth.signup(userData);
  };

  const logout = async () => {
    setIsLoading(true);
    await auth.logout();
  };

  const value = {
    user,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};