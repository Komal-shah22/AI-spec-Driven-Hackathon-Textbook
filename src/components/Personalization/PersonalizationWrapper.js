// src/components/Personalization/PersonalizationWrapper.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { shouldShowContent } from '../../utils/personalization'; // Import the personalization logic utility

/**
 * @typedef {'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'} SoftwareBackground
 * @typedef {'NO_EXPERIENCE' | 'BASIC_ELECTRONICS' | 'ROBOTICS' | 'EMBEDDED_SYSTEMS'} HardwareBackground
 */

/**
 * PersonalizationWrapper component that conditionally renders its children
 * based on the authenticated user's profile and the `showFor` prop.
 *
 * This component expects a `showFor` prop which is an array of strings.
 * Each string in `showFor` can be a combination of:
 * - Software background levels: "BEGINNER_SOFTWARE", "INTERMEDIATE_SOFTWARE", "ADVANCED_SOFTWARE"
 * - Hardware background levels: "NO_EXPERIENCE_HARDWARE", "BASIC_ELECTRONICS_HARDWARE", "ROBOTICS_HARDWARE", "EMBEDDED_SYSTEMS_HARDWARE"
 * - Specific known technologies (e.g., "ROS_2", "Python") - simplified for this component.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children The content to be conditionally rendered.
 * @param {string[]} props.showFor An array of conditions for which to show the content.
 */
const PersonalizationWrapper = ({ children, showFor = [] }) => {
  const { user, isLoading } = useAuth();

  // Retrieve personalization active state from localStorage
  const isPersonalizationActive = localStorage.getItem('isPersonalizationActive') === 'true';

  if (isLoading) {
    return null; // Don't render content while auth state is loading
  }

  // If personalization is not active, always show the content.
  // This aligns with FR-014: "The system MUST show standard, non-personalized content if a user has not provided their background information."
  // And also if personalization is explicitly disabled by the user.
  if (!isPersonalizationActive) {
    return <>{children}</>;
  }

  // If personalization is active but no user is logged in, only show content with no specific "showFor" rules (default content).
  // This aligns with FR-014 and the general principle that personalization requires a user.
  if (!user) {
    return showFor.length === 0 ? <>{children}</> : null;
  }

  // If personalization is active AND a user is logged in
  // If showFor is empty, it means this is default content that should always be shown to authenticated users.
  if (showFor.length === 0) {
    return <>{children}</>;
  }

  // Otherwise, apply the personalization logic based on user profile and showFor conditions.
  // Use the utility function to evaluate if the content should be shown.
  const shouldShow = shouldShowContent(user, showFor);

  return shouldShow ? <>{children}</> : null;
};

export default PersonalizationWrapper;