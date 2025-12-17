// src/utils/personalization.js
import { UserProfile } from '../context/AuthContext'; // Import UserProfile typedef

/**
 * Evaluates if a content block should be shown based on user profile and conditions.
 * @param {UserProfile | null} user The authenticated user's profile.
 * @param {string[]} showFor An array of conditions (e.g., "BEGINNER_SOFTWARE", "ROBOTICS_HARDWARE")
 *                           for which the content should be shown.
 * @returns {boolean} True if the content should be shown, false otherwise.
 */
export const shouldShowContent = (user, showFor) => {
  if (!user || !user.metadata) {
    return false; // Cannot personalize without user or metadata
  }

  const userSoftware = user.metadata.softwareBackground;
  const userHardware = user.metadata.hardwareBackground;
  const userKnownTech = user.metadata.knownTechnologies || [];

  const userConditions = new Set();
  if (userSoftware) userConditions.add(`${userSoftware}_SOFTWARE`);
  if (userHardware) userConditions.add(`${userHardware}_HARDWARE`);
  userKnownTech.forEach(tech => userConditions.add(tech.toUpperCase().replace(/ /g, '_'))); // Normalize tech names

  // Check if any of the showFor conditions match the user's conditions
  return showFor.some(condition => userConditions.has(condition.toUpperCase().replace(/ /g, '_')));
};