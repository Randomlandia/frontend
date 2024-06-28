import jwtDecode from "jwt-decode";

/**
 * Decodes a JWT token.
 *
 * @param {string} token - The JWT token to decode.
 * @returns {object|null} - The decoded payload if decoding is successful, otherwise null.
 */
export function decodeJWT(token) {
  try {
    // Decode without verification (for debugging/inspection)
    const decoded = jwtDecode(token);
    console.log("Decoded Token:", decoded);
    return decoded;
  } catch (err) {
    console.error("Token decoding failed:", err);
    return null;
  }
}
