
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sprout, Sun, Droplets, Calendar, Users, Bug, AlertTriangle } from "lucide-react";
import { getSeedData, getPlantingCalendar, SeedData } from "@/services/seedService";

interface SeedInformationProps {
  seedId?: string;
}

const SeedInformation: React.FC<SeedInformationProps> = ({ seedId = "tomato-cherokee" }) => {
  const [seedData, setSeedData] = useState<SeedData | null>(null);
  const [plantingCalendar, setPlantingCalendar] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSeedData();
  }, [seedId]);

  const fetchSeedData = async () => {
    setLoading(true);
    console.log('Fetching seed information for:', seedId);
    
    try {
      const [seed, calendar] = await Promise.all([
        getSeedData(seedId),
        getPlantingCalendar("12345") // Mock zip code
      ]);
      
      setSeedData(seed);
      setPlantingCalendar(calendar);
    } catch (error) {
      console.error('Error fetching seed data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTemperatureColor = (temp: number) => {
    if (temp < 60) return 'text-blue-600';
    if (temp > 80) return 'text-red-600';
    return 'text-green-600';
  };

  if (loading) {
    return <div className="p-8 text-center">Loading seed information...</div>;
  }

  if (!seedData) {
    return <div className="p-8 text-center">No seed data available</div>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sprout className="h-8 w-8 text-farm-green-500 mr-3" />
              <h2 className="font-playfair text-3xl font-bold text-farm-green-700">
                {seedData.name}
              </h2>
            </div>
            <Badge className="bg-farm-green-100 text-farm-green-700 text-lg px-4 py-1">
              {seedData.variety}
            </Badge>
          </div>

          <Tabs defaultValue="growing" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="growing">Growing Info</TabsTrigger>
              <TabsTrigger value="companions">Companions</TabsTrigger>
              <TabsTrigger value="problems">Pest & Disease</TabsTrigger>
              <TabsTrigger value="harvest">Harvest Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="growing" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-farm-cream-50 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-farm-green-700">
                      <Sun className="h-5 w-5 mr-2" />
                      Growing Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="font-medium">Sun Requirement:</span>
                      <p className="text-farm-brown-600">{seedData.sunRequirement}</p>
                    </div>
                    <div>
                      <span className="font-medium">Soil Type:</span>
                      <p className="text-farm-brown-600">{seedData.soilType}</p>
                    </div>
                    <div>
                      <span className="font-medium">Water Needs:</span>
                      <p className="text-farm-brown-600">{seedData.waterNeeds}</p>
                    </div>
                    <div>
                      <span className="font-medium">Planting Depth:</span>
                      <p className="text-farm-brown-600">{seedData.plantingDepth}</p>
                    </div>
                    <div>
                      <span className="font-medium">Spacing:</span>
                      <p className="text-farm-brown-600">{seedData.spacing}</p>
                    </div>
                  </CardContent>
                </Card>

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
              </div>
            </TabsContent>

            <TabsContent value="companions" className="mt-6">
              <Card className="bg-farm-green-50 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-farm-green-700">
                    <Users className="h-5 w-5 mr-2" />
                    Companion Plants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-farm-brown-600 mb-4">
                    These plants grow well together and can help improve growth, flavor, or pest resistance:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {seedData.companionPlants.map((plant, index) => (
                      <Badge key={index} className="bg-farm-green-600 text-white capitalize">
                        {plant}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="problems" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-red-50 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-700">
                      <Bug className="h-5 w-5 mr-2" />
                      Common Pests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {seedData.pests.map((pest, index) => (
                        <Badge key={index} variant="outline" className="mr-2 capitalize">
                          {pest}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-700">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Common Diseases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {seedData.diseases.map((disease, index) => (
                        <Badge key={index} variant="outline" className="mr-2 capitalize">
                          {disease}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="harvest" className="mt-6">
              <Card className="bg-farm-orange-50 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-farm-green-700">Harvest Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {seedData.harvestTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-farm-green-500 mr-2 mt-1">•</span>
                        <span className="text-farm-brown-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SeedInformation;
