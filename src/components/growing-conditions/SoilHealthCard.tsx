
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf } from "lucide-react";
import { SoilData } from "@/services/soilService";

interface SoilHealthCardProps {
  soilData: SoilData;
}

const SoilHealthCard: React.FC<SoilHealthCardProps> = ({ soilData }) => {
  return (
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
  );
};

export default SoilHealthCard;
