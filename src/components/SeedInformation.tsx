
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSeedData, getPlantingCalendar, SeedData } from "@/services/seedService";
import SeedHeader from "@/components/seed/SeedHeader";
import GrowingRequirementsCard from "@/components/seed/GrowingRequirementsCard";
import TimelineTemperatureCard from "@/components/seed/TimelineTemperatureCard";
import CompanionPlantsCard from "@/components/seed/CompanionPlantsCard";
import PestDiseaseCards from "@/components/seed/PestDiseaseCards";
import HarvestTipsCard from "@/components/seed/HarvestTipsCard";

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
          <SeedHeader seedData={seedData} />

          <Tabs defaultValue="growing" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="growing">Growing Info</TabsTrigger>
              <TabsTrigger value="companions">Companions</TabsTrigger>
              <TabsTrigger value="problems">Pest & Disease</TabsTrigger>
              <TabsTrigger value="harvest">Harvest Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="growing" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GrowingRequirementsCard seedData={seedData} />
                <TimelineTemperatureCard seedData={seedData} />
              </div>
            </TabsContent>

            <TabsContent value="companions" className="mt-6">
              <CompanionPlantsCard seedData={seedData} />
            </TabsContent>

            <TabsContent value="problems" className="mt-6">
              <PestDiseaseCards seedData={seedData} />
            </TabsContent>

            <TabsContent value="harvest" className="mt-6">
              <HarvestTipsCard seedData={seedData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SeedInformation;
