import axios from "axios";

const YOUR_APP_ID = `82e453da`;
const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

export const recipe = async (query) => {
  return await axios.get(
    `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  );
};
