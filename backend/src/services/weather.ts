import axios from "axios";
import dotenv from "dotenv";
import { WeatherByWeek, WeatherDay } from "../types";

dotenv.config();

const FORECAST_API = process.env.OPEN_METEO_FORECAST_URL!;

// Get daily weather data for the next 7 days
export const get7DayWeather = async (
  lat: number,
  lon: number
): Promise<WeatherDay[]> => {
  const res = await axios.get(FORECAST_API, {
    params: {
      latitude: lat,
      longitude: lon,
      daily:
        "temperature_2m_min,temperature_2m_max,precipitation_sum,snowfall_sum",
      timezone: "auto",
    },
  });

  const daily: WeatherByWeek = res.data.daily;

  return daily.time.map((_: any, i: number) => ({
    temp: (daily.temperature_2m_min[i] + daily.temperature_2m_max[i]) / 2,
    rain: daily.precipitation_sum[i],
    snow: daily.snowfall_sum[i],
  }));
};
