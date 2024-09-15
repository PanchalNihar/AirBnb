"use server";
import { cookies } from "next/headers";
// Function to handle login and set cookies
export async function handleLogin(userId:string, accessToken:string, refreshToken:string) {
  console.log("Setting tokens:", { userId, accessToken, refreshToken }); // Debugging line

  cookies().set("session_userId", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });

  cookies().set('session_access_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // 60 minutes
    path: '/'
  });

  cookies().set("session_refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
}
export async function refreshToken() {
  const refreshToken = cookies().get("session_refresh_token")?.value;

  if (refreshToken) {
    const response = await fetch('/api/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    const data = await response.json();

    if (response.ok) {
      cookies().set('session_access_token', data.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60, // 60 minutes
        path: '/'
      });
      return data.access;
    } else {
      // Handle refresh token errors
      console.error("Token refresh failed:", data);
      resetAuthCookies();
      return null;
    }
  } else {
    // No refresh token available
    return null;
  }
}


export async function resetAuthCookies() {
  const pastDate = new Date(0); // January 1, 1970
  cookies().set("session_userId", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: pastDate,
    path: "/",
  });

  cookies().set("session_access_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: pastDate,
    path: "/",
  });

  cookies().set("session_refresh_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: pastDate,
    path: "/",
  });
}

// Function to get the user ID from cookies
export async function getUserId() {
  const userId = cookies().get("session_userId")?.value;
  console.log(userId);
  return userId || null; // Return null if userId is undefined
}

export async function getAccessToken() {
  let accessToken = cookies().get("session_access_token")?.value;
  return accessToken || null;
}
