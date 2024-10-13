export const filterTags = [
  "All",
  "Movies",
  "Drama",
  "Hollywood",
  "Music",
  "News",
  "Horror movies",
  "React JS",
  "Gaming",
  "Router Provider",
  "Technology",
  "HTML",
  "Pop Music",
  "Bollywood Drama",
  "Cricket",
  "Solar Energy",
];

export const YOUTUBE_API_KEY = "AIzaSyBMFWUN-diCPU1bZKGKa4qR5SPv4Umyadw";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d12ebf6d5cmsh602b8dbf2b472eep1fb4f2jsnbc6f463ca8ee",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};
