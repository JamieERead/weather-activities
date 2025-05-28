import axios from "axios";
import { getCoordinates } from "../coordinates";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getCoordinates", () => {
  it("should return lat/lon for a valid city", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        results: [
          {
            latitude: 51.5072,
            longitude: 0.1276,
          },
        ],
      },
    });

    const coords = await getCoordinates("London");

    expect(coords).toEqual({ lat: 51.5072, lon: 0.1276 });
    expect(mockedAxios.get).toHaveBeenCalledWith(expect.any(String), {
      params: { name: "London" },
    });
  });

  it("should throw an error if city is not found", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { results: [] },
    });

    await expect(getCoordinates("Paris")).rejects.toThrow(
      "Could not find coordinates for city: Paris"
    );
  });
});
