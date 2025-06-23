
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { SeedData } from "@/services/seedService";

interface TimelineTemperatureCardProps {
  seedData: SeedData;
}

const TimelineTemperatureCard: React.FC<TimelineTemperatureCardProps> = ({ seedData }) => {
  const getTemperatureColor = (temp: number) => {
    if (temp < 60) return 'text-blue-600';
    if (temp > 80) return 'text-red-600';
    return 'text-green-600';
  };

  return (
    <Card className="bg-farm-cream-50 rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center text-farm-green-700">
          <Calendar className="h-5 w-5 mr-2" />
          Timeline & Temperature
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <span className="font-medium">Days to Germination:</span>
          <p className="text-farm-brown-600">{seedData.daysToGermination} days</p>
        </div>
        <div>
          <span className="font-medium">Days to Maturity:</span>
          <p className="text-farm-brown-600">{seedData.daysToMaturity} days</p>
        </div>
        <div className="border-t pt-3">
          <span className="font-medium">Temperature Range:</span>
          <div className="flex justify-between mt-2">
            <span className={`text-sm ${getTemperatureColor(seedData.temperature.min)}`}>
              Min: {seedData.temperature.min}°F
            </span>
            <span className={`text-sm font-semibold ${getTemperatureColor(seedData.temperature.optimal)}`}>
              Optimal: {seedData.temperature.optimal}°F
            </span>
            <span className={`text-sm ${getTemperatureColor(seedData.temperature.max)}`}>
              Max: {seedData.temperature.max}°F
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineTemperatureCard;
