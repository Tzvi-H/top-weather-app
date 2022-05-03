const baseuUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "e741bda5fac59643059b9d8b3c8dc28a";

const getWeather = async (location) => {
  const url = `${baseuUrl}?q=${location}&APPID=${apiKey}`;
  const reponse = await fetch(url);
  const data = await reponse.json();
  return data;
};

export { getWeather };
