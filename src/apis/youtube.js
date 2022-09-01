import axios from "axios";
import React from "react";

const API_KEY = "AIzaSyCKKvjB08bT9WOUmXvRjYcIy2a9E9Z8BVw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: API_KEY,
  },
});
