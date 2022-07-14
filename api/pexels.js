import axios from "axios";

export const getImages = async (searchTerm = "technology") =>
  await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
      Authorization: '563492ad6f91700001000001e4055a815c184af99495aeaad2c7702b',
    },
  });
