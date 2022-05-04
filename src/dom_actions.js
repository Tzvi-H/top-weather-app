import { weatherInput } from "./dom_elements";
import { getWeather, formatWeather } from "./weather_api";

export const handleSubmit = async () => {
  const weatherData = await getWeather(weatherInput.value);
  console.log(formatWeather(weatherData));
  weatherInput.value = "";
};
