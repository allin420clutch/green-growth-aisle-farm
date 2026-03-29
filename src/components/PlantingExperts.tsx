import React from 'react';
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Sprout, Award } from "lucide-react";

// Simulated data removed per user request
const experts: any[] = [];

const PlantingExperts = () => {
  return (
    <section id="experts" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-green-50 text-green-700 border-green-200">
            <Award className="w-4 h-4 mr-2" />
            Advisory Board
          </Badge>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-farm-green-900 mb-4">
            Planting Experts On Call
          </h2>
          <p className="text-farm-brown-600 max-w-2xl mx-auto text-lg mb-8">
            Don't just buy seeds—succeed. Our certified experts are available 24/7 to provide real-time guidance on soil prep, stratification, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg border border-farm-green-100">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-farm-green-900 via-farm-green-900/60 to-transparent opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="font-playfair text-2xl font-bold mb-1">{expert.name}</h3>
                <p className="text-farm-cream-100 font-medium mb-3 flex items-center text-sm">
                  <Sprout className="w-4 h-4 mr-2 text-farm-green-300" />
                  {expert.role}
                </p>
                <p className="text-sm text-farm-cream-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 line-clamp-3">
                  {expert.bio}
                </p>
                <button className="flex items-center text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 delay-200">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Consult Live
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantingExperts;
