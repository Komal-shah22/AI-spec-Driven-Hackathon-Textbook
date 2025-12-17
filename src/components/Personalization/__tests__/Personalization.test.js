// src/components/Personalization/__tests__/Personalization.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AuthProvider } from '../../../context/AuthContext';
import PersonalizationWrapper from '../PersonalizationWrapper';
import PersonalizationControl from '../PersonalizationControl';
import auth from '../../../utils/auth';
import { reloadPage } from '../../../utils/browser'; // Import the utility function

// Mock the auth utility
jest.mock('../../../utils/auth', () => ({
  getUser: jest.fn(),
  onAuthStateChanged: jest.fn(),
  login: jest.fn(),
  signup: jest.fn(),
  logout: jest.fn(),
  updateMetadata: jest.fn(),
}));

// Mock the reloadPage utility function
jest.mock('../../../utils/browser', () => ({
  reloadPage: jest.fn(),
}));

describe('Personalization Flow', () => {
  let authStateChangeCallback;
  let getUserPromiseResolver;
  let mockCurrentUser = null;

  beforeEach(() => {
    // Reset localStorage before each test
    localStorage.clear();
    reloadPage.mockClear(); // Clear mock calls for reloadPage

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

  // Helper function to render components with AuthProvider
  const renderWithAuth = (ui) => {
    return render(<AuthProvider>{ui}</AuthProvider>);
  };

  test('PersonalizationWrapper shows content if no showFor and personalization is active', async () => {
    mockCurrentUser = { userId: 'user1', email: 'user1@example.com', metadata: { softwareBackground: 'BEGINNER' } };
    localStorage.setItem('isPersonalizationActive', 'true');

    renderWithAuth(
      <PersonalizationWrapper showFor={[]}>
        <div>Default content</div>
      </PersonalizationWrapper>
    );

    if (getUserPromiseResolver) getUserPromiseResolver(mockCurrentUser);
    if (authStateChangeCallback) authStateChangeCallback(mockCurrentUser);

    await waitFor(() => {
      expect(screen.getByText('Default content')).toBeInTheDocument();
    });
  });

  test('PersonalizationWrapper hides content if showFor does not match user and personalization is active', async () => {
    mockCurrentUser = { userId: 'user1', email: 'user1@example.com', metadata: { softwareBackground: 'ADVANCED' } };
    localStorage.setItem('isPersonalizationActive', 'true');

    renderWithAuth(
      <PersonalizationWrapper showFor={['BEGINNER_SOFTWARE']}>
        <div>Beginner content</div>
      </PersonalizationWrapper>
    );

    if (getUserPromiseResolver) getUserPromiseResolver(mockCurrentUser);
    if (authStateChangeCallback) authStateChangeCallback(mockCurrentUser);

    await waitFor(() => {
      expect(screen.queryByText('Beginner content')).not.toBeInTheDocument();
    });
  });

  test('PersonalizationWrapper shows content if showFor matches user and personalization is active', async () => {
    mockCurrentUser = { userId: 'user1', email: 'user1@example.com', metadata: { softwareBackground: 'BEGINNER' } };
    localStorage.setItem('isPersonalizationActive', 'true');

    renderWithAuth(
      <PersonalizationWrapper showFor={['BEGINNER_SOFTWARE']}>
        <div>Beginner content</div>
      </PersonalizationWrapper>
    );

    if (getUserPromiseResolver) getUserPromiseResolver(mockCurrentUser);
    if (authStateChangeCallback) authStateChangeCallback(mockCurrentUser);

    await waitFor(() => {
      expect(screen.getByText('Beginner content')).toBeInTheDocument();
    });
  });

  test('PersonalizationWrapper always shows content if personalization is not active, regardless of showFor', async () => {
    mockCurrentUser = { userId: 'user1', email: 'user1@example.com', metadata: { softwareBackground: 'ADVANCED' } };
    localStorage.setItem('isPersonalizationActive', 'false'); // Personalization is not active

    renderWithAuth(
      <PersonalizationWrapper showFor={['BEGINNER_SOFTWARE']}>
        <div>Beginner content</div>
      </PersonalizationWrapper>
    );

    if (getUserPromiseResolver) getUserPromiseResolver(mockCurrentUser);
    if (authStateChangeCallback) authStateChangeCallback(mockCurrentUser);

    await waitFor(() => {
      expect(screen.getByText('Beginner content')).toBeInTheDocument();
    });
  });

  test('PersonalizationWrapper hides content if user is not logged in and showFor is not empty', async () => {
    localStorage.setItem('isPersonalizationActive', 'true');

    renderWithAuth(
      <PersonalizationWrapper showFor={['BEGINNER_SOFTWARE']}>
        <div>Beginner content</div>
      </PersonalizationWrapper>
    );

    if (getUserPromiseResolver) getUserPromiseResolver(null); // No user
    if (authStateChangeCallback) authStateChangeCallback(null);

    await waitFor(() => {
      expect(screen.queryByText('Beginner content')).not.toBeInTheDocument();
    });
  });

  test('PersonalizationControl toggles personalization state', async () => {
    localStorage.setItem('isPersonalizationActive', 'false');
    renderWithAuth(<PersonalizationControl />);

    await waitFor(() => expect(screen.getByText('Enable Personalization')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Enable Personalization'));

    expect(localStorage.getItem('isPersonalizationActive')).toBe('true');
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });

  test('PersonalizationControl resets personalization state', async () => {
    localStorage.setItem('isPersonalizationActive', 'true'); // Ensure it's active initially
    renderWithAuth(<PersonalizationControl />);

    await waitFor(() => expect(screen.getByText('Reset Personalization')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Reset Personalization'));

    expect(localStorage.getItem('isPersonalizationActive')).toBe('false');
    expect(reloadPage).toHaveBeenCalledTimes(1); // Only one reload for reset
  });
});