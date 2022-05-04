import {
  locationInput,
  locationCell,
  conditionsCell,
  temperatureCell,
  loadingDiv,
} from "./dom_elements";
import { getWeather, formatWeather } from "./weather_api";

export const handleSubmit = async () => {
  try {
    loadingDiv.hidden = false;
    const weatherData = await getWeather(locationInput.value);
    displayData(formatWeather(weatherData));
  } catch {
    alert("invalid location");
  } finally {
    locationInput.value = "";
    loadingDiv.hidden = true;
  }
};

const displayData = (weatherData) => {
  locationCell.textContent = weatherData.name;
  conditionsCell.textContent = weatherData.description;
  temperatureCell.textContent = weatherData.tempFahrenheit;
};
