
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { SeedData } from "@/services/seedService";

interface CompanionPlantsCardProps {
  seedData: SeedData;
}

const CompanionPlantsCard: React.FC<CompanionPlantsCardProps> = ({ seedData }) => {
  return (
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
  );
};

export default CompanionPlantsCard;
