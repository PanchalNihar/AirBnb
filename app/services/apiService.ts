import { getAccessToken } from "../lib/actions"; // Import a function to get access token

const apiService = {
  // Method to send GET requests
  get: async function (url: string): Promise<any> {
    console.log("get", url);

    // Get access token for authorization
    const token = await getAccessToken();

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, { // Fetch from constructed URL
        method: "GET",
        headers: {
          Accept: "application/json", // Accept JSON response
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in header
        },
      })
        .then((response) => {
          // Check if response is in JSON format
          if (response.headers.get("Content-Type")?.includes("application/json")) {
            return response.json(); // Parse response as JSON
          } else {
            console.log("Response is not JSON"); // Log if response is not JSON
          }
        })
        .then((json) => {
          console.log("Response:", json); // Log the response
          resolve(json); // Resolve the promise with JSON data
        })
        .catch((error) => {
          reject(error); // Reject promise on error
        });
    });
  },

  // Method to send POST requests with authorization
  post: async function (url: string, data: any): Promise<any> {
    console.log("post", url, data);

    // Get access token for authorization
    const token = await getAccessToken();

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, { // Fetch from constructed URL
        method: "POST",
        body: data, // Send data as request body
        headers: {
          Authorization: `Bearer ${token}`, // Include token in header
        },
      })
        .then((response) => { return response.json(); }) // Parse response as JSON
        .then((json) => {
          console.log("Response:", json); // Log the response
          resolve(json); // Resolve the promise with JSON data
        })
        .catch((error) => {
          reject(error); // Reject promise on error
        });
    });
  },

  // Method to send POST requests without authorization token
  postWithoutToken: async function (url: string, data: any): Promise<any> {
    console.log("Fetching from:", `${process.env.NEXT_PUBLIC_API_HOST}${url}`);
    console.log("Post data:", data);
    console.log("Data type:", typeof data);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, { // Fetch from constructed URL
        method: "POST",
        body: JSON.stringify(data), // Convert data to JSON string
        headers: {
          Accept: "application/json", // Accept JSON response
          "Content-Type": "application/json", // Send data as JSON
        },
      })
        .then((response) => {
          return response.json(); // Parse response as JSON
        })
        .then((json) => {
          console.log("Response", json); // Log the response
          return resolve(json); // Resolve the promise with JSON data
        })
        .catch((err) => {
          console.error("Fetch error:", err); // Log error if fetch fails
          reject(err); // Reject promise on error
        });
    });
  },
};

export default apiService; // Export the apiService object for use in other files
