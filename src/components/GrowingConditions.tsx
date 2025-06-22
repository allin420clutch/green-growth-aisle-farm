
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CloudSun, Droplets, Thermometer, Wind, Bug, Leaf } from "lucide-react";
import { getWeatherData, getGrowingConditions, WeatherData } from "@/services/weatherService";
import { getSoilData, SoilData } from "@/services/soilService";
import { getPestAlerts, PestAlert } from "@/services/pestDiseaseService";

const GrowingConditions = () => {
  const [zipCode, setZipCode] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [soilData, setSoilData] = useState<SoilData | null>(null);
  const [pestAlerts, setPestAlerts] = useState<PestAlert[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchConditions = async () => {
    if (!zipCode) return;
    
    setLoading(true);
    console.log('Fetching growing conditions for:', zipCode);
    
    try {
      const [weather, soil, pests] = await Promise.all([
        getWeatherData(zipCode),
        getSoilData(zipCode),
        getPestAlerts(zipCode)
      ]);
      
      setWeatherData(weather);
      setSoilData(soil);
      setPestAlerts(pests);
    } catch (error) {
      console.error('Error fetching growing conditions:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-farm-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-farm-green-700 mb-4">
            Growing Conditions Dashboard
          </h2>
          <p className="text-lg text-farm-brown-600 max-w-2xl mx-auto">
            Get real-time weather, soil, and pest information to make informed planting decisions
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="flex gap-2">
            <Input
              placeholder="Enter your ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={fetchConditions}
              disabled={loading || !zipCode}
              className="bg-farm-green-600 hover:bg-farm-green-700"
            >
              {loading ? 'Loading...' : 'Check Conditions'}
            </Button>
          </div>
        </div>

        {weatherData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Weather Card */}
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

            {/* Soil Card */}
            {soilData && (
              <Card className="bg-white rounded-2xl">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Leaf className="h-6 w-6 text-farm-brown-500 mr-2" />
                  <CardTitle className="text-farm-green-700">Soil Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>pH Level</span>
                      <span className="font-semibold">{soilData.ph}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Nitrogen</span>
                      <Badge variant="outline">{soilData.nitrogen}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Organic Matter</span>
                      <span className="font-semibold">{soilData.organicMatter}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Moisture</span>
                      <Badge className="bg-blue-100 text-blue-700">{soilData.moisture}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pest Alerts Card */}
            <Card className="bg-white rounded-2xl">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Bug className="h-6 w-6 text-red-500 mr-2" />
                <CardTitle className="text-farm-green-700">Pest & Disease Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pestAlerts.length > 0 ? (
                    pestAlerts.map((alert) => (
                      <div key={alert.id} className="border-l-4 border-farm-orange-500 pl-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{alert.name}</span>
                          <Badge className={`${getSeverityColor(alert.severity)} text-white text-xs`}>
                            {alert.severity}
                          </Badge>
                        </div>
                        <p className="text-xs text-farm-brown-600">{alert.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-farm-brown-600">No active alerts in your area</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {weatherData && soilData && (
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
        )}
      </div>
    </section>
  );
};

export default GrowingConditions;
