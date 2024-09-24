"use server"; // Indicates that this module runs only on the server side.
import { cookies } from "next/headers"; // Import cookies utility from Next.js to handle cookie operations.

// Function to handle user login and set cookies
export async function handleLogin(userId:string, accessToken:string, refreshToken:string) {
  console.log("Setting tokens:", { userId, accessToken, refreshToken }); // Debugging: Log the tokens being set.

  // Set a cookie for the user ID
  cookies().set("session_userId", userId, {
    httpOnly: true, // Prevent JavaScript access to this cookie (security feature).
    secure: process.env.NODE_ENV === "production", // Use secure flag only in production.
    maxAge: 60 * 60 * 24 * 7, // Cookie expires in one week.
    path: "/", // Cookie is accessible throughout the entire site.
  });

  // Set a cookie for the access token
  cookies().set('session_access_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // Cookie expires in 60 minutes.
    path: '/'
  });

  // Set a cookie for the refresh token
  cookies().set("session_refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // Cookie expires in one week.
    path: "/",
  });
}

// Function to refresh the access token using the stored refresh token
export async function refreshToken() {
  const refreshToken = cookies().get("session_refresh_token")?.value; // Retrieve the refresh token from cookies.

  if (refreshToken) {
    const response = await fetch('/api/token/refresh/', { // Make an API call to refresh the access token.
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }), // Send the refresh token in the request body.
    });

    const data = await response.json(); // Parse the response as JSON.

    if (response.ok) { // If the request was successful,
      cookies().set('session_access_token', data.access, { // Update the access token in cookies.
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60, // New access token expires in 60 minutes.
        path: '/'
      });
      return data.access; // Return the new access token.
    } else {
      // If the refresh failed, handle the error.
      console.error("Token refresh failed:", data); // Log the error.
      resetAuthCookies(); // Reset all authentication-related cookies.
      return null; // Return null indicating failure.
    }
  } else {
    // If no refresh token is available.
    return null;
  }
}

// Function to clear all authentication-related cookies.
export async function resetAuthCookies() {
  const pastDate = new Date(0); // January 1, 1970 (a past date to expire cookies).

  // Clear user ID cookie by setting its expiration date to the past.
  cookies().set("session_userId", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: pastDate,
    path: "/",
  });

  // Clear access token cookie.
  cookies().set("session_access_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: pastDate,
    path: "/",
  });

  // Clear refresh token cookie.
  cookies().set("session_refresh_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: pastDate,
    path: "/",
  });
}

// Function to get the user ID from cookies.
export async function getUserId() {
  const userId = cookies().get("session_userId")?.value; // Retrieve user ID from cookies.
  console.log(userId); // Log the user ID.
  return userId || null; // Return the user ID or null if not found.
}

// Function to get the access token from cookies.
export async function getAccessToken() {
  let accessToken = cookies().get("session_access_token")?.value; // Retrieve access token from cookies.
  return accessToken || null; // Return the access token or null if not found.
}
