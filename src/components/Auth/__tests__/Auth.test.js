// src/components/Auth/__tests__/Auth.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AuthProvider } from '../../../context/AuthContext';
import AuthButtons from '../AuthButtons';
import UserProfile from '../UserProfile';
// Import the auth utility - this will be the mocked version
import auth from '../../../utils/auth';

// Mock the auth utility module
jest.mock('../../../utils/auth', () => ({
  getUser: jest.fn(),
  onAuthStateChanged: jest.fn(),
  login: jest.fn(),
  signup: jest.fn(),
  logout: jest.fn(),
  updateMetadata: jest.fn(),
}));


describe('Authentication Flow', () => {
  let authStateChangeCallback;
  let getUserPromiseResolver;
  let mockCurrentUser = null;

  beforeEach(() => {
    // Reset mocks before each test
    auth.getUser.mockReset();
    auth.onAuthStateChanged.mockReset();
    auth.login.mockReset();
    auth.signup.mockReset();
    auth.logout.mockReset();
    auth.updateMetadata.mockReset();
    mockCurrentUser = null; // Reset internal mock user state

    // Control auth.getUser's resolution
    auth.getUser.mockImplementation(() => new Promise(resolve => {
      getUserPromiseResolver = resolve;
    }));

    // Control auth.onAuthStateChanged's initial callback
    auth.onAuthStateChanged.mockImplementationOnce((callback) => {
      authStateChangeCallback = callback; // Store the callback to trigger it manually
      return () => {}; // Return a no-op unsubscribe
    });

    // Default mock implementations for subsequent calls to onAuthStateChanged
    auth.onAuthStateChanged.mockImplementation((callback) => {
      callback(mockCurrentUser);
      return () => {};
    });
  });

  test('shows Login and Sign Up buttons when not authenticated', async () => {
    render(
      <AuthProvider>
        <AuthButtons />
      </AuthProvider>
    );

    // Resolve the initial getUser and onAuthStateChanged
    if (getUserPromiseResolver) getUserPromiseResolver(null);
    if (authStateChangeCallback) authStateChangeCallback(null);

    await waitFor(() => {
      expect(screen.getByText('Login')).toBeInTheDocument();
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
    });
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });

  test('shows Logout button and user email when authenticated', async () => {
    mockCurrentUser = { userId: 'initial', email: 'initial@example.com', metadata: {} };

    render(
      <AuthProvider>
        <AuthButtons />
        <UserProfile />
      </AuthProvider>
    );

    // Resolve the initial getUser and onAuthStateChanged
    if (getUserPromiseResolver) getUserPromiseResolver(mockCurrentUser);
    if (authStateChangeCallback) authStateChangeCallback(mockCurrentUser);

    await waitFor(() => {
      expect(screen.getByText('Logout')).toBeInTheDocument();
      expect(screen.getByText('Welcome, initial@example.com')).toBeInTheDocument();
    });
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
    expect(screen.queryByText('Sign Up')).not.toBeInTheDocument();
  });

  test('login button calls auth.login and updates state', async () => {
    render(
      <AuthProvider>
        <AuthButtons />
        <UserProfile />
      </AuthProvider>
    );

    // Resolve the initial getUser and onAuthStateChanged to unauthenticated state
    if (getUserPromiseResolver) getUserPromiseResolver(null);
    if (authStateChangeCallback) authStateChangeCallback(null);

    await waitFor(() => expect(screen.getByText('Login')).toBeInTheDocument());

    auth.login.mockImplementationOnce(async () => {
      mockCurrentUser = { userId: 'test-user-1', name: 'Test User', email: 'test@example.com', metadata: {} }; // Added name
      authStateChangeCallback(mockCurrentUser); // Simulate state change
    });

    fireEvent.click(screen.getByText('Login'));

    expect(auth.login).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText('Logout')).toBeInTheDocument();
      expect(screen.getByText('Welcome, Test User')).toBeInTheDocument(); // Changed assertion
    });
  });

  test('sign up button calls auth.signup and updates state', async () => {
    render(
      <AuthProvider>
        <AuthButtons />
        <UserProfile />
      </AuthProvider>
    );

    // Resolve the initial getUser and onAuthStateChanged to unauthenticated state
    if (getUserPromiseResolver) getUserPromiseResolver(null);
    if (authStateChangeCallback) authStateChangeCallback(null);

    await waitFor(() => expect(screen.getByText('Sign Up')).toBeInTheDocument());

    auth.signup.mockImplementationOnce(async () => {
      mockCurrentUser = { userId: 'test-user-2', name: 'New User', email: 'new@example.com', metadata: {} }; // Added name
      authStateChangeCallback(mockCurrentUser); // Simulate state change
    });

    fireEvent.click(screen.getByText('Sign Up'));

    expect(auth.signup).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText('Logout')).toBeInTheDocument();
      expect(screen.getByText('Welcome, New User')).toBeInTheDocument(); // Changed assertion
    });
  });

  test('logout button calls auth.logout and updates state', async () => {
    mockCurrentUser = { userId: 'initial', name: 'Initial User', email: 'initial@example.com', metadata: {} };

    render(
      <AuthProvider>
        <AuthButtons />
      </AuthProvider>
    );

    // Resolve the initial getUser and onAuthStateChanged to authenticated state
    if (getUserPromiseResolver) getUserPromiseResolver(mockCurrentUser);
    if (authStateChangeCallback) authStateChangeCallback(mockCurrentUser);

    await waitFor(() => expect(screen.getByText('Logout')).toBeInTheDocument());

    auth.logout.mockImplementationOnce(async () => {
      mockCurrentUser = null;
      authStateChangeCallback(mockCurrentUser); // Simulate state change
    });

    fireEvent.click(screen.getByText('Logout'));

    expect(auth.logout).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText('Login')).toBeInTheDocument();
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
    });
  });

  test('isLoading state is handled correctly', async () => {
    render(
      <AuthProvider>
        <AuthButtons />
      </AuthProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Manually resolve the getUser and onAuthStateChanged promises
    if (getUserPromiseResolver) getUserPromiseResolver(null);
    if (authStateChangeCallback) authStateChangeCallback(null);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      expect(screen.getByText('Login')).toBeInTheDocument();
    });
  });
});