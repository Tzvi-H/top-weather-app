const baseuUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "e741bda5fac59643059b9d8b3c8dc28a";

const getWeather = async (location) => {
  const url = `${baseuUrl}?q=${location}&APPID=${apiKey}&units=imperial`;
  const reponse = await fetch(url);
  const data = await reponse.json();
  return data;
};

const formatWeather = (data) => {
  return {
    description: data.weather[0].description,
    tempFahrenheit: data.main.temp,
    tempCelsius: Number(((data.main.temp - 32) * (5 / 9)).toFixed(2)),
    name: data.name,
  };
};

export { getWeather, formatWeather };
