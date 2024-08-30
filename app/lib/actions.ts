"use server";
import { cookies } from "next/headers";
import { ValueContainer } from "react-select/animated";

// Function to handle login and set cookies
export async function handleLogin(
  userId: string,
  accessToken: string,
  refreshToken: string
) {
  console.log("Setting tokens:", { userId, accessToken, refreshToken }); // Debugging line

  cookies().set("session_userId", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });

  cookies().set('session_access_token', accessToken, {
    httpOnly: true,
    secure:  process.env.NODE_ENV === "production",
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

// Function to reset (clear) authentication cookies
export async function resetAuthCookies() {
  cookies().set("session_userId", "");
  cookies().set("session_access_token", "");
  cookies().set("session_refresh_token", "");
}

// Function to get the user ID from cookies
export async function getUserId() {
  const userId = cookies().get("session_userId")?.value;
  console.log(userId)
  return userId || null; // Return null if userId is undefined
}

export async function getAccessToken() {
  let accessToken = cookies().get('session_access_token')?.value;
  return accessToken || null;
}