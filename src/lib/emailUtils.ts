/**
 * Obfuscates email addresses to prevent bot harvesting
 * Replaces @ with [at] and dots with [dot]
 */
export const obfuscateEmail = (email: string): string => {
  return email.replace('@', ' [at] ').replace(/\./g, ' [dot] ');
};

/**
 * Creates a mailto link with the original email while displaying obfuscated version
 */
export const createObfuscatedMailto = (email: string): { href: string; display: string } => {
  return {
    href: `mailto:${email}`,
    display: obfuscateEmail(email)
  };
};