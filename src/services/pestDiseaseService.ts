
export interface PestAlert {
  id: string;
  type: 'pest' | 'disease';
  name: string;
  severity: 'low' | 'medium' | 'high';
  affectedPlants: string[];
  description: string;
  treatment: string;
  preventive: string[];
}

export const getPestAlerts = async (location: string): Promise<PestAlert[]> => {
  console.log(`Fetching pest and disease alerts for ${location}`);
  
  // Mock data - in production, integrate with agricultural extension services
  return [
    {
      id: "1",
      type: "pest",
      name: "Aphids",
      severity: "medium",
      affectedPlants: ["tomatoes", "peppers", "lettuce"],
      description: "Small green insects clustering on new growth",
      treatment: "Spray with insecticidal soap or neem oil",
      preventive: ["Encourage beneficial insects", "Remove weeds", "Monitor regularly"]
    },
    {
      id: "2",
      type: "disease",
      name: "Powdery Mildew",
      severity: "low",
      affectedPlants: ["cucumbers", "squash", "beans"],
      description: "White powdery coating on leaves",
      treatment: "Apply baking soda spray or copper fungicide",
      preventive: ["Ensure good air circulation", "Water at soil level", "Remove infected leaves"]
    }
  ];
};

export const getSeasonalPestCalendar = () => {
  return {
    spring: ["Aphids", "Cutworms", "Flea Beetles"],
    summer: ["Spider Mites", "Whiteflies", "Hornworms"],
    fall: ["Stink Bugs", "Fall Armyworms", "Root Maggots"]
  };
};
