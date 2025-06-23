
import React, { useState } from 'react';
import { getWeatherData, WeatherData } from "@/services/weatherService";
import { getSoilData, SoilData } from "@/services/soilService";
import { getPestAlerts, PestAlert } from "@/services/pestDiseaseService";
import GrowingConditionsForm from "@/components/growing-conditions/GrowingConditionsForm";
import WeatherCard from "@/components/growing-conditions/WeatherCard";
import SoilHealthCard from "@/components/growing-conditions/SoilHealthCard";
import PestAlertsCard from "@/components/growing-conditions/PestAlertsCard";
import PlantingRecommendationsCard from "@/components/growing-conditions/PlantingRecommendationsCard";

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

        <GrowingConditionsForm
          zipCode={zipCode}
          setZipCode={setZipCode}
          onSubmit={fetchConditions}
          loading={loading}
        />

        {weatherData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <WeatherCard weatherData={weatherData} />
            {soilData && <SoilHealthCard soilData={soilData} />}
            <PestAlertsCard pestAlerts={pestAlerts} />
          </div>
        )}

        {weatherData && soilData && (
          <PlantingRecommendationsCard 
            weatherData={weatherData} 
            soilData={soilData} 
          />
        )}
      </div>
    </section>
  );
};

export default GrowingConditions;
