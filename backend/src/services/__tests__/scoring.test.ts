import { calculateActivityScores } from "../scoring";
import { WeatherDay, ActivityScore } from "../../types";

describe("calculateActivityScores", () => {
  const sampleWeather: WeatherDay[] = [
    { temp: -2, rain: 0, snow: 10 }, // perfect for skiing
    { temp: 20, rain: 1, snow: 0 }, // good surfing/sightseeing
    { temp: 8, rain: 5, snow: 2 }, // good for indoor sightseeing
    { temp: 22, rain: 0, snow: 0 }, // perfect outdoor day
    { temp: 3, rain: 2, snow: 5 }, // mediocre ski
    { temp: 17, rain: 0, snow: 0 }, // solid surf/sightsee
    { temp: 25, rain: 3, snow: 0 }, // hot and rainy
  ];

  it("should check that all 4 activities are included", () => {
    const result: ActivityScore[] = calculateActivityScores(sampleWeather);

    expect(result.map((r) => r.activity).sort()).toEqual([
      "Indoor sightseeing",
      "Outdoor sightseeing",
      "Skiing",
      "Surfing",
    ]);
  });

  it("should return scores for each activity", () => {
    const result: ActivityScore[] = calculateActivityScores(sampleWeather);

    result.forEach((activityScore) => {
      expect(typeof activityScore.score).toBe("number");
      expect(activityScore.score).toBeGreaterThanOrEqual(-1);
      expect(activityScore.score).toBeLessThanOrEqual(2);
    });
  });
});
