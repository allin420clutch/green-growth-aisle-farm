
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Sprout } from "lucide-react";
import { SeedData } from "@/services/seedService";

interface SeedHeaderProps {
  seedData: SeedData;
}

const SeedHeader: React.FC<SeedHeaderProps> = ({ seedData }) => {
  return (
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
  );
};

export default SeedHeader;
