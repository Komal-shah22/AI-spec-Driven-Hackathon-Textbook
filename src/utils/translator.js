
// This is a mock translation function.
// In a real application, you would use a proper translation service.
export const translate = (text, targetLanguage) => {
  if (targetLanguage === 'ur') {
    return `(Urdu) ${text}`;
  }
  return text;
};
