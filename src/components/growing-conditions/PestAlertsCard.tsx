
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bug } from "lucide-react";
import { PestAlert } from "@/services/pestDiseaseService";

interface PestAlertsCardProps {
  pestAlerts: PestAlert[];
}

const PestAlertsCard: React.FC<PestAlertsCardProps> = ({ pestAlerts }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="bg-white rounded-2xl">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <Bug className="h-6 w-6 text-red-500 mr-2" />
        <CardTitle className="text-farm-green-700">Pest & Disease Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {pestAlerts.length > 0 ? (
            pestAlerts.map((alert) => (
              <div key={alert.id} className="border-l-4 border-farm-orange-500 pl-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{alert.name}</span>
                  <Badge className={`${getSeverityColor(alert.severity)} text-white text-xs`}>
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-xs text-farm-brown-600">{alert.description}</p>
              </div>
            ))
          ) : (
            <p className="text-farm-brown-600">No active alerts in your area</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PestAlertsCard;
