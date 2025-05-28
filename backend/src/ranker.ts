import { getCoordinates } from "./services/coordinates";
import { calculateActivityScores } from "./services/scoring";
import { get7DayWeather } from "./services/weather";
import { ActivityScore } from "./types";

export const getActivitiesByRank = async (
  city: string
): Promise<ActivityScore[]> => {
  const { lat, lon } = await getCoordinates(city);
  const weather = await get7DayWeather(lat, lon);
  return calculateActivityScores(weather);
};
