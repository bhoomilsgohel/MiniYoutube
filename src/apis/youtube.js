import axios from "axios";

const KEY = "AIzaSyBb3gXd3_IAVp-yAbuhqI8Ho9JhRjuxobE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
