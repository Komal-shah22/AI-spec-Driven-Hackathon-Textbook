# Conceptual API Contract: better-auth.com

This document outlines the expected interactions with the `better-auth.com` service. It is a conceptual model, not a formal OpenAPI specification, as we are consumers of this API.

## Authentication Flow

1.  **UI Trigger**: The user clicks a "Login" or "Signup" button in our Docusaurus application.
2.  **Redirection**: Our application redirects the user to the `better-auth.com` hosted signup/login page.
3.  **Authentication**: The user authenticates on the `better-auth.com` domain.
4.  **Callback**: After successful authentication, `better-auth.com` redirects the user back to a specified callback URL in our Docusaurus application (e.g., `/auth/callback`). The callback includes a token or session identifier.
5.  **Session Establishment**: Our client-side code handles the callback, receives the token, and establishes a local session, likely by storing the token securely (e.g., in memory or a secure cookie).

## Assumed Client-Side SDK Methods

We assume `better-auth.com` provides a JavaScript SDK with the following conceptual methods:

### `auth.getUser()`

-   **Description**: Retrieves the profile of the currently authenticated user. Returns `null` if no user is logged in.
-   **Returns**: `Promise<UserProfile | null>`
-   **Example `UserProfile` Object**:
    ```json
    {
      "userId": "usr_12345abc",
      "email": "reader@example.com",
      "metadata": {
        "softwareBackground": "BEGINNER",
        "hardwareBackground": "ROBOTICS",
        "knownTechnologies": ["Python", "ROS 2"]
      }
    }
    ```

### `auth.onAuthStateChanged(callback)`

-   **Description**: Subscribes to changes in the authentication state (login/logout). The `callback` function is invoked whenever the state changes.
-   **Parameters**:
    -   `callback`: `(user: UserProfile | null) => void`
-   **Returns**: An `unsubscribe` function to clean up the listener.

### `auth.login()`

-   **Description**: Initiates the login flow by redirecting the user to the `better-auth.com` hosted login page.
-   **Returns**: `Promise<void>`

### `auth.signup()`

-   **Description**: Initiates the signup flow by redirecting the user to the `better-auth.com` hosted signup page. During this flow, we expect `better-auth.com` to present the custom fields we have configured for collecting the user's software and hardware background.
-   **Returns**: `Promise<void>`

### `auth.logout()`

-   **Description**: Logs the user out and clears their session.
-   **Returns**: `Promise<void>`
