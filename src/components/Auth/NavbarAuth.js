/*
import React, { useState } from 'react';
import { useAuth } from '@site/src/context/AuthContext';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function NavbarAuth() {
  const { user, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  const handleOpenModal = (isSignup = false) => {
    setShowSignup(isSignup);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowSignup(false);
  };

  const handleAuthSuccess = () => {
    closeModal();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '0 5px' }}>
      {user ? (
        <>
          <span style={{ marginRight: '10px', color: 'var(--ifm-navbar-link-color)' }}>Hello, {user.username}!</span>
          <button
            onClick={logout}
            style={{
              background: 'var(--ifm-navbar-background-color)',
              color: 'var(--ifm-navbar-link-color)',
              border: '1px solid var(--ifm-navbar-link-color)',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => handleOpenModal(false)}
            style={{
              background: 'var(--ifm-navbar-background-color)',
              color: 'var(--ifm-navbar-link-color)',
              border: 'none',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          <button
            onClick={() => handleOpenModal(true)}
            style={{
              background: 'var(--ifm-navbar-background-color)',
              color: 'var(--ifm-navbar-link-color)',
              border: '1px solid var(--ifm-navbar-link-color)',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
          >
            Signup
          </button>
        </>
      )}

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: 'var(--ifm-background-color)', // Use Docusaurus background color
            padding: '20px',
            borderRadius: '8px',
            position: 'relative',
            maxWidth: '400px',
            width: '90%',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            color: 'var(--ifm-font-color-base)', // Use Docusaurus font color
          }}>
            <button onClick={closeModal} style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: 'var(--ifm-font-color-base)',
            }}>
              &times;
            </button>
            {showSignup ? (
              <SignupForm onSignupSuccess={handleAuthSuccess} />
            ) : (
              <SigninForm onSigninSuccess={handleAuthSuccess} />
            )}
            <p style={{ textAlign: 'center', marginTop: '15px' }}>
              {showSignup ? (
                <>Already have an account? <span onClick={() => setShowSignup(false)} style={{ color: 'var(--ifm-color-primary)', cursor: 'pointer' }}>Sign In</span></>
              ) : (
                <>Don't have an account? <span onClick={() => setShowSignup(true)} style={{ color: 'var(--ifm-color-primary)', cursor: 'pointer' }}>Sign Up</span></>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarAuth;
*/