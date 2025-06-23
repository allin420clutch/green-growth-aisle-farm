
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CloudSun, Droplets, Thermometer, Wind } from "lucide-react";
import { WeatherData, getGrowingConditions } from "@/services/weatherService";

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  return (
    <Card className="bg-white rounded-2xl">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <CloudSun className="h-6 w-6 text-farm-orange-500 mr-2" />
        <CardTitle className="text-farm-green-700">Weather Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="flex items-center"><Thermometer className="h-4 w-4 mr-1" />Temp</span>
            <span className="font-semibold">{weatherData.temperature}°F</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center"><Droplets className="h-4 w-4 mr-1" />Humidity</span>
            <span className="font-semibold">{weatherData.humidity}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center"><Wind className="h-4 w-4 mr-1" />Wind</span>
            <span className="font-semibold">{weatherData.windSpeed} mph</span>
          </div>
          <div className="pt-2">
            <Badge className="bg-farm-green-100 text-farm-green-700">
              {getGrowingConditions(weatherData).plantingCondition} Planting Conditions
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
