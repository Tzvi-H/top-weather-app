import "./style.css";
import { getWeather } from "./weather_api";

getWeather("seoul").then((data) => console.log(data));
