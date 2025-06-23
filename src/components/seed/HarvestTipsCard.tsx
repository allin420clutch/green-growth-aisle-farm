
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SeedData } from "@/services/seedService";

interface HarvestTipsCardProps {
  seedData: SeedData;
}

const HarvestTipsCard: React.FC<HarvestTipsCardProps> = ({ seedData }) => {
  return (
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
  );
};

export default HarvestTipsCard;
