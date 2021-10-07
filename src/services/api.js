import axios from "axios";

const api = axios.create({
  baseURL: "https://digimon-api.vercel.app/api/digimon",
  responseType: "json",
});

export const searchDigimon = (name) => {
  return api
    .get(`/name/${name}`)
    .then((response) => response)
    .catch((error) => error.response.data);
};
