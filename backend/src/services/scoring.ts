import { ActivityScore, WeatherDay } from "../types";

const ACTIVITIES = [
  "Skiing",
  "Surfing",
  "Outdoor sightseeing",
  "Indoor sightseeing",
];

// Calculates an activity score for 7 days
export const calculateActivityScores = (
  weather: WeatherDay[]
): ActivityScore[] => {
  return ACTIVITIES.map((activity) => {
    let total = 0;

    for (const day of weather) {
      const { temp, rain, snow } = day;

      // Snow and rain divided by 10 to reduce scaling as they are measured in mm of fall
      switch (activity) {
        case "Skiing":
          total += snow / 10 + (temp >= -5 && temp <= 2 ? 1 : 0);
          break;
        case "Surfing":
          total += (temp > 15 && temp < 25 ? 1 : 0) - rain / 10;
          break;
        case "Outdoor sightseeing":
          total += (temp >= 15 && temp <= 25 ? 1 : 0) - rain / 10;
          break;
        case "Indoor sightseeing":
          total += rain / 10 + (temp < 10 ? 1 : 0);
          break;
      }
    }

    const score = parseFloat((total / weather.length).toFixed(2));
    return { activity, score };
  }).sort((a, b) => b.score - a.score);
};
