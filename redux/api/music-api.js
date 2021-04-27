import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "https://60814e4c73292b0017cdd394.mockapi.io/",
});

export const getAllTracks = async () => {
  try {
    const tracks = await axios.get("tracks");
    console.log(tracks.data);
    return tracks.data;
  } catch (err) {
    return console.error(err);
  }
};
