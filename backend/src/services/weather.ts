import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

type ActivityScore = {
  activity: string;
  score: number;
};

const GEOCODE_API = process.env.OPEN_METEO_GEOCODE_URL!;
const FORECAST_API = process.env.OPEN_METEO_FORECAST_URL!;

const ACTIVITIES = [
  "Skiing",
  "Surfing",
  "Outdoor sightseeing",
  "Indoor sightseeing",
];

// Converts a city name to its lat/lon
const getCoordinates = async (
  city: string
): Promise<{ lat: number; lon: number }> => {
  const res = await axios.get(GEOCODE_API, { params: { name: city } });
  const location = res.data?.results?.[0];

  if (!location) {
    throw new Error(`Could not find coordinates for city: ${city}`);
  }

  return { lat: location.latitude, lon: location.longitude };
};

export const getActivitiesByRank = async (
  city: string
): Promise<ActivityScore[]> => {
  const { lat, lon } = await getCoordinates(city);
  console.log(lat, lon);
  return [];
};
