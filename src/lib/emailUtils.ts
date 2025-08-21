/**
 * Encodes email for bot protection while keeping it user-friendly
 */
export const encodeEmail = (email: string): string => {
  return btoa(email); // Base64 encode
};

/**
 * Decodes email from base64
 */
export const decodeEmail = (encodedEmail: string): string => {
  return atob(encodedEmail);
};

/**
 * Creates an obfuscated email component that reveals on interaction
 */
export const createProtectedEmail = (email: string) => {
  const encoded = encodeEmail(email);
  return {
    encoded,
    original: email
  };
};