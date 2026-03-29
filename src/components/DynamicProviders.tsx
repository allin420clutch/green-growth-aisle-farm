import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, Activity } from "lucide-react";

// Simulated data removed per user request
const providers: any[] = [];

const DynamicProviders = () => {
  return (
    <section id="providers" className="py-20 bg-farm-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
            <Activity className="w-4 h-4 mr-2 animate-pulse" />
            Live Network
          </Badge>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-farm-green-900 mb-4">
            Dynamic Global Providers
          </h2>
          <p className="text-farm-brown-600 max-w-2xl mx-auto text-lg">
            Connect in real-time with verified seed collectors, bulb farmers, and elite plant nurseries from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-farm-green-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-start justify-between mb-4">
                <Avatar className="h-16 w-16 border-2 border-farm-green-100">
                  <AvatarImage src={provider.image} alt={provider.name} className="object-cover" />
                  <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Badge variant={provider.status === 'online' ? 'default' : 'secondary'} className={provider.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}>
                  {provider.status}
                </Badge>
              </div>
              <h3 className="font-playfair font-bold text-xl text-farm-green-900 mb-1">{provider.name}</h3>
              <div className="flex items-center text-farm-brown-600 text-sm mb-3">
                <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                {provider.location}
              </div>
              <p className="text-sm font-medium text-farm-green-700 mb-4">{provider.specialty}</p>
              <div className="flex items-center justify-between border-t border-farm-green-50 pt-4 mt-auto">
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span className="text-sm font-bold text-farm-green-900">{provider.rating}</span>
                </div>
                <button className="text-sm font-medium text-orange-600 hover:text-orange-700">Connect &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicProviders;
