import axios from "axios";
import { get7DayWeather } from "../weather";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("get7DayWeather", () => {
  const mockResponse = {
    daily: {
      time: ["2024-01-01", "2024-01-02"],
      temperature_2m_min: [0, 1],
      temperature_2m_max: [10, 11],
      precipitation_sum: [2, 4],
      snowfall_sum: [5, 3],
    },
  };

  it("should return transformed weather data", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const result = await get7DayWeather(51.5072, 0.1276);

    expect(result).toEqual([
      { temp: 5, rain: 2, snow: 5 },
      { temp: 6, rain: 4, snow: 3 },
    ]);

    expect(mockedAxios.get).toHaveBeenCalledWith(expect.any(String), {
      params: {
        latitude: 51.5072,
        longitude: 0.1276,
        daily: expect.stringContaining("temperature_2m_min"),
        timezone: "auto",
      },
    });
  });
});
