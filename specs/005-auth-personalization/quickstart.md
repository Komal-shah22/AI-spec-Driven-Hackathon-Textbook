# Quickstart

This document provides a high-level guide for setting up and running the authentication and personalization feature locally.

## 1. Environment Setup

-   **Install Dependencies**: Ensure all project dependencies are installed by running:
    ```bash
    npm install
    ```
-   **Placeholder `betterAuthSDK.js`**:
    -   The `src/utils/betterAuthSDK.js` file serves as a placeholder for the actual `better-auth.com` SDK.
    -   It simulates login, signup, and user metadata for local development.

## 2. Running the Application

-   **Start the Docusaurus development server**:
    ```bash
    npm start
    ```
-   The application will be available at `http://localhost:3000`.

## 3. How to Test the Feature

To simulate different user profiles and test personalization, you will need to directly edit the `src/utils/betterAuthSDK.js` file.

1.  **Navigate to the site**: Open `http://localhost:3000`.
2.  **Simulate User Profiles**:
    -   Open `src/utils/betterAuthSDK.js`.
    -   Locate the `login()` and `signup()` methods.
    -   Modify the `currentUser` object within these methods to simulate users with different `softwareBackground`, `hardwareBackground`, and `knownTechnologies`. Remember to include a `name` property.
    -   For example, to simulate an "Advanced" user with "Embedded Systems" background:
        ```javascript
        currentUser = {
          userId: 'test-advanced-user',
          name: 'Advanced Reader',
          email: 'advanced@example.com',
          metadata: {
            softwareBackground: 'ADVANCED',
            hardwareBackground: 'EMBEDDED_SYSTEMS',
            knownTechnologies: ['C++', 'RTOS'],
          },
        };
        ```
    -   Save the `betterAuthSDK.js` file. The Docusaurus dev server should hot-reload.
3.  **Sign Up / Login**:
    -   Click the "Sign Up" or "Login" button in the navbar. The `betterAuthSDK` will simulate the login/signup process with the `currentUser` data you defined.
    -   You should see "Welcome, {User Name}" in the navbar.
4.  **Personalize Content**:
    -   Navigate to a documentation chapter.
    -   Click the "Enable Personalization" button.
    -   Observe how the content adapts based on the simulated user's background.
5.  **Log Out**:
    -   Click the "Logout" button in the navbar.
    -   The navbar should revert to the unauthenticated state, and the content should return to the default, non-personalized view.
6.  **Reset Personalization**:
    -   If personalization is active, click "Reset Personalization" to return to standard content display.
