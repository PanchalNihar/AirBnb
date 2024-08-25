import { rejects } from "assert";
import { resolve } from "path";

const apiService = {
  get: async function (url: string): Promise<any> {
    // console.log("get", url);

    console.log(`${process.env.NEXT_PUBLIC_API_HOST}${url}`);
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json(); // call json() correctly here
        })
        .then((json) => {
          console.log("Resposne", json);
          resolve(json);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  post: async function (url: string, data: any): Promise<any> {
    console.log("Fetching from:", `${process.env.NEXT_PUBLIC_API_HOST}${url}`);
    console.log("Post data:", data);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body:data,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log("Response", json);
          resolve(json);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          reject(err);
        });
    });
  },
};
export default apiService;
