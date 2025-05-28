import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const GEOCODE_API = process.env.OPEN_METEO_GEOCODE_URL!;

// Converts a city name to its lat/lon
export const getCoordinates = async (
  city: string
): Promise<{ lat: number; lon: number }> => {
  const res = await axios.get(GEOCODE_API, { params: { name: city } });
  const location = res.data?.results?.[0];

  if (!location) {
    throw new Error(`Could not find coordinates for city: ${city}`);
  }

  return { lat: location.latitude, lon: location.longitude };
};
