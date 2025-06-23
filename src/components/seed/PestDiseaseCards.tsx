
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bug, AlertTriangle } from "lucide-react";
import { SeedData } from "@/services/seedService";

interface PestDiseaseCardsProps {
  seedData: SeedData;
}

const PestDiseaseCards: React.FC<PestDiseaseCardsProps> = ({ seedData }) => {
  return (
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
  );
};

export default PestDiseaseCards;
