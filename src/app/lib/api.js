import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getMateriales = async () => {
  const res = await api.get("/materials");
    console.log("API Response in lib:", res);
  return res.data;
  
};
