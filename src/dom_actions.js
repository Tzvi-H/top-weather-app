import {
  locationInput,
  locationCell,
  conditionsCell,
  temperatureCell,
} from "./dom_elements";
import { getWeather, formatWeather } from "./weather_api";

export const handleSubmit = async () => {
  const weatherData = await getWeather(locationInput.value);
  displayData(formatWeather(weatherData));
  locationInput.value = "";
};

const displayData = (weatherData) => {
  locationCell.textContent = weatherData.name;
  conditionsCell.textContent = weatherData.description;
  temperatureCell.textContent = weatherData.tempFahrenheit;
};
