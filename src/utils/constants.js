export const LOGO = "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png";
export const USERICON =  "https://avatars.githubusercontent.com/u/117891341?s=400&u=cb31fbd81bece9bcf1aabd39db9ce25b606f0ed8&v=4";
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODkzYjAwNjUwNTNkYzI2MDM4NGU3MTViMTFlOGQ4NCIsIm5iZiI6MTcyNDc3NzI4MC4yNTM4NDEsInN1YiI6IjY2Y2UwMTdiOGQ0MTUxNzFjOGM1N2JlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qEYcEjN9nNjTt96sGXGqYmnXp7lElVdzZ8pJGiSJlr0'
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
  }
};

export const YT_URL = "https://www.youtube.com/embed/";
export const MOVIE_CARD_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const GPT_MODE_IMG="https://res.cloudinary.com/dzbmc0pit/image/upload/f_auto,q_auto/v1/personal%20projects/MOVIES%20GPT/ps1rvj6p6t6n015ofsp0"
