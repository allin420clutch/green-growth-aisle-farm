
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";
import { SeedData } from "@/services/seedService";

interface GrowingRequirementsCardProps {
  seedData: SeedData;
}

const GrowingRequirementsCard: React.FC<GrowingRequirementsCardProps> = ({ seedData }) => {
  return (
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
  );
};

export default GrowingRequirementsCard;
