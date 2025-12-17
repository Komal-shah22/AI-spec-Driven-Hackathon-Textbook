# Data Model

This document defines the key data entities for the personalization feature, as derived from the feature specification.

## 1. User Profile

This entity represents a reader of the textbook. The data is managed and stored authoritatively by the `better-auth.com` service.

-   **Entity Name**: `UserProfile`
-   **Fields**:
    -   `userId` (string, unique): The unique identifier provided by `better-auth.com`.
    -   `email` (string): The user's email address.
    -   `softwareBackground` (enum): The user's self-reported software experience level.
        -   **Values**: `BEGINNER`, `INTERMEDIATE`, `ADVANCED`
    -   `hardwareBackground` (enum): The user's self-reported hardware experience level.
        -   **Values**: `NO_EXPERIENCE`, `BASIC_ELECTRONICS`, `ROBOTICS`, `EMBEDDED_SYSTEMS`
    -   `knownTechnologies` (list of strings): A list of technologies the user claims to know.
-   **Validation**:
    -   `userId` and `email` are mandatory and managed by the auth provider.
    -   The background and technology fields are optional to allow users to sign up without providing this information.
-   **State Transitions**:
    -   The `UserProfile` is created at signup.
    -   It can be updated by the user through their profile management page (assumed to be provided by `better-auth.com`).

## 2. Personalized Content Block

This entity is a conceptual model representing how content within a Markdown file is marked for personalization. It is not a database model but a convention for authors.

-   **Entity Name**: `PersonalizedContentBlock`
-   **Representation**: This will be implemented using custom React components or MDX syntax within the `.md` files. For example:

    ```mdx
    <PersonalizedBlock showFor={["BEGINNER_SOFTWARE", "INTERMEDIATE_SOFTWARE"]}>
    
    This is a detailed explanation for beginners.
    
    </PersonalizedBlock>
    
    <PersonalizedBlock showFor={["ADVANCED_HARDWARE"]}>
    
    This is a deep-dive into the hardware configuration.
    
    </PersonalizedBlock>
    ```
-   **Attributes**:
    -   `showFor` (list of strings): An array of audience identifiers that determines who should see this block.
        -   Examples: `BEGINNER_SOFTWARE`, `ADVANCED_HARDWARE`, `HAS_ROBOTICS_BACKGROUND`.
-   **Relationships**:
    -   A single chapter document will contain many `PersonalizedContentBlock`s.

## 3. UI State

This entity represents non-sensitive, client-side state stored in `localStorage` to control the UI.

-   **Entity Name**: `UiState`
-   **Fields**:
    -   `isPersonalizationActive` (boolean): Tracks if the user has the personalization feature toggled on or off.
-   **Storage**: Browser `localStorage`.
