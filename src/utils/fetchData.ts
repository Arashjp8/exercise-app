import { API_KEY } from "./../../apiConfig";
interface exerciseOptionsProps {
  method: string;
  url?: string;
  header?: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
}

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: exerciseOptionsProps) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
