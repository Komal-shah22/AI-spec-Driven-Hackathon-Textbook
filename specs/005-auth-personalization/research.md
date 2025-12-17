# Research & Decisions

This document records the decisions made to resolve ambiguities in the implementation plan.

## 1. Testing Framework

-   **Decision**: Use **Jest** and **React Testing Library** for frontend testing.
-   **Rationale**: This is the industry-standard combination for testing React applications. Docusaurus itself is built with React. This setup allows for unit testing individual components and integration testing user flows without relying on a full browser environment, which is ideal for a "hackathon-level" implementation that still requires basic quality assurance.
-   **Alternatives considered**:
    -   **Cypress/Playwright**: These are powerful end-to-end testing tools, but they are heavier and more complex to set up. They are overkill for the stated "hackathon-level" constraint.
    -   **No testing**: This is too risky, even for a hackathon. Basic unit tests are necessary to ensure components don't break during development.

## 2. Navbar Integration Strategy

-   **Decision**: Use Docusaurus's **"Safe Swizzle"** mechanism to customize the Navbar.
-   **Rationale**: Swizzling is the idiomatic and intended way to customize theme components in Docusaurus. It provides the necessary control to add buttons and logic to the navbar while maintaining the benefits of the Docusaurus infrastructure. "Safe" swizzling (wrapping components instead of ejecting) minimizes the risk of breakage during future Docusaurus updates.
-   **Alternatives considered**:
    -   **Plugin**: Creating a plugin is more complex and generally intended for functionality that needs to be shared across multiple Docusaurus sites. It's overkill for a single-site customization.
    -   **DOM Manipulation**: Directly manipulating the DOM after React renders is a brittle and anti-pattern approach that would conflict with React's virtual DOM, leading to unpredictable behavior.

## 3. Internationalization (i18n) Strategy

-   **Decision**: Personalization will be **language-agnostic at the logic level, but language-aware at the content level**.
-   **Rationale**:
    -   The personalization *rules* (e.g., "if user is beginner, show 'beginner-tip' sections") are independent of language.
    -   The content itself is what is translated. The personalization logic will run on whichever version of the content the user is currently viewing (English or Urdu).
    -   This means content authors must ensure that the special personalization blocks (e.g., a "Beginner Tip") are created and translated for both languages.
    -   UI strings like "Login", "Logout", "Personalize Content" must be added to the Docusaurus i18n JSON files (`i18n/en/code.json`, `i18n/ur/code.json`) to be properly translated.
-   **Alternatives considered**:
    -   **Disable personalization for other languages**: This would fail to meet the i18n compatibility requirement.
    -   **Separate personalization rules per language**: This would dramatically increase complexity and is not necessary if the content structure is consistent across languages.

## 4. State Management

-   **Decision**: Use **React Context API** for managing and sharing authentication state.
-   **Rationale**: React Context is built into React, requires no additional dependencies, and is perfectly suited for sharing global state like a user's authentication status across the application. For the scale of this feature, it is the simplest and most effective solution. An `AuthContext` will provide the user object and auth status to any component that needs it.
-   **Alternatives considered**:
    -   **Redux/Zustand**: These are more powerful state management libraries, but they introduce extra complexity and dependencies that are not justified for simply sharing authentication state, especially given the "hackathon-level" constraint.
    -   **Prop Drilling**: Passing the auth state down through many layers of components would be inefficient and lead to unmaintainable code.
