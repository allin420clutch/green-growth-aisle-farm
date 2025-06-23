
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherData, getGrowingConditions } from "@/services/weatherService";
import { SoilData } from "@/services/soilService";

interface PlantingRecommendationsCardProps {
  weatherData: WeatherData;
  soilData: SoilData;
}

const PlantingRecommendationsCard: React.FC<PlantingRecommendationsCardProps> = ({ 
  weatherData, 
  soilData 
}) => {
  return (
    <Card className="bg-white rounded-2xl">
      <CardHeader>
        <CardTitle className="text-farm-green-700">Planting Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-farm-green-600 mb-2">Current Conditions</h4>
            <p className="text-farm-brown-600 mb-2">{getGrowingConditions(weatherData).recommendation}</p>
            <p className="text-sm text-farm-brown-500">Soil moisture: {getGrowingConditions(weatherData).soilMoisture}</p>
          </div>
          <div>
            <h4 className="font-semibold text-farm-green-600 mb-2">Soil Recommendations</h4>
            <ul className="text-sm text-farm-brown-600 space-y-1">
              {soilData.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-farm-green-500 mr-2">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlantingRecommendationsCard;
