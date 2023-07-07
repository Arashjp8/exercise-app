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
    "X-RapidAPI-Key": "29b62418f8mshdcb91040cb64a83p1855b2jsnedcf7c3704e5",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: exerciseOptionsProps) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
