import {
  locationInput,
  locationCell,
  conditionsCell,
  temperatureCell,
  loadingDiv,
  locationImage,
} from "./dom_elements";
import { getWeather, formatWeather } from "./weather_api";
import { getImage } from "./giphy_api";

export const handleSubmit = async () => {
  try {
    locationImage.hidden = true;
    loadingDiv.hidden = false;
    const weatherData = await getWeather(locationInput.value);
    displayData(formatWeather(weatherData));
    locationImage.src = await getImage(locationInput.value);
    locationImage.hidden = false;
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
