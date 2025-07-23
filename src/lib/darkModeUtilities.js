// darkModeUtilities.js
// A collection of helper functions to manage consistent dark mode styling throughout the app

/**
 * Appends dark mode variants to common text classes
 * @param {string} variant - The style variant (heading, paragraph, etc.)
 * @returns {string} - The appropriate dark mode class string to append
 */
export function getDarkModeTextClass(variant) {
  const variants = {
    // Headings
    h1: "text-gray-900 dark:text-gray-100",
    h2: "text-gray-900 dark:text-gray-100",
    h3: "text-gray-900 dark:text-gray-100",
    h4: "text-gray-900 dark:text-gray-100",

    // Body text
    p: "text-gray-600 dark:text-gray-400",

    // Links
    link: "hover:text-blue-600 dark:hover:text-blue-400",

    // Cards
    cardBg: "bg-white dark:bg-gray-800",
    cardBorder: "border-gray-100 dark:border-gray-700",
  };

  return variants[variant] || "";
}

/**
 * Generates a complete class string with dark mode support
 * @param {string} baseClasses - The base classes
 * @param {string} variant - The style variant (heading, paragraph, etc.)
 * @returns {string} - The complete class string with dark mode support
 */
export function cx(baseClasses, variant) {
  const darkModeClass = getDarkModeTextClass(variant);
  return `${baseClasses} ${darkModeClass}`.trim();
}
