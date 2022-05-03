import "./style.css";
import { getWeather, formatWeatherData } from "./weather_api";

getWeather("seoul").then((data) => console.log(formatWeatherData(data)));
