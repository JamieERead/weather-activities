export interface WeatherDay {
  temp: number;
  rain: number;
  snow: number;
}

export interface ActivityScore {
  activity: string;
  score: number;
}

// Manually typed but could use SDK instead
export interface WeatherByWeek {
  time: string[];
  temperature_2m_min: number[];
  temperature_2m_max: number[];
  precipitation_sum: number[];
  snowfall_sum: number[];
}
