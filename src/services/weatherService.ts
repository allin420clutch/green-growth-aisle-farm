
// Using OpenWeatherMap API for weather data
export interface WeatherData {
  temperature: number;
  humidity: number;
  soilTemp: number;
  rainfall: number;
  windSpeed: number;
  conditions: string;
  forecast: {
    date: string;
    temp: number;
    conditions: string;
    rainfall: number;
  }[];
}

export const getWeatherData = async (zipCode: string): Promise<WeatherData> => {
  // For demo purposes, returning mock data
  // In production, you'd use a real weather API
  console.log(`Fetching weather data for ${zipCode}`);
  
  return {
    temperature: 72,
    humidity: 65,
    soilTemp: 68,
    rainfall: 0.2,
    windSpeed: 8,
    conditions: "Partly Cloudy",
    forecast: [
      { date: "2025-06-23", temp: 75, conditions: "Sunny", rainfall: 0 },
      { date: "2025-06-24", temp: 73, conditions: "Cloudy", rainfall: 0.1 },
      { date: "2025-06-25", temp: 70, conditions: "Light Rain", rainfall: 0.3 },
    ]
  };
};

export const getGrowingConditions = (weather: WeatherData) => {
  const isGoodForPlanting = weather.temperature >= 65 && weather.temperature <= 85;
  const soilMoisture = weather.rainfall > 0.1 ? "Adequate" : "Needs Watering";
  
  return {
    plantingCondition: isGoodForPlanting ? "Excellent" : "Fair",
    soilMoisture,
    recommendation: isGoodForPlanting 
      ? "Great conditions for planting most seeds!" 
      : "Consider waiting for better weather conditions."
  };
};
