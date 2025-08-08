
export interface SeedData {
  id: string;
  name: string;
  variety: string;
  plantingDepth: string;
  spacing: string;
  daysToGermination: string;
  daysToMaturity: number;
  sunRequirement: string;
  soilType: string;
  waterNeeds: string;
  temperature: {
    min: number;
    max: number;
    optimal: number;
  };
  companionPlants: string[];
  pests: string[];
  diseases: string[];
  harvestTips: string[];
}

export const getSeedData = async (seedId: string): Promise<SeedData> => {
  console.log(`Fetching detailed seed data for ${seedId}`);
  
  // Mock data - in production, integrate with seed supplier APIs
  const seedDatabase: Record<string, SeedData> = {
    "tomato-cherokee": {
      id: "tomato-cherokee",
      name: "Cherokee Purple Tomato",
      variety: "Heirloom Indeterminate",
      plantingDepth: "1/4 inch",
      spacing: "24-36 inches apart",
      daysToGermination: "7–14",
      daysToMaturity: 80,
      sunRequirement: "Full Sun (6-8 hours)",
      soilType: "Well-draining, rich loam",
      waterNeeds: "1-2 inches per week",
      temperature: {
        min: 60,
        max: 85,
        optimal: 75
      },
      companionPlants: ["basil", "oregano", "carrots", "lettuce"],
      pests: ["hornworms", "aphids", "whiteflies"],
      diseases: ["blight", "wilt", "mosaic virus"],
      harvestTips: [
        "Harvest when fully colored but still firm",
        "Pick regularly to encourage production",
        "Can be harvested green and ripened indoors"
      ]
    }
  };
  
  return seedDatabase[seedId] || seedDatabase["tomato-cherokee"];
};

export const getPlantingCalendar = (zipCode: string) => {
  // Mock planting calendar based on zone
  return {
    spring: {
      early: ["peas", "spinach", "lettuce", "radishes"],
      mid: ["carrots", "beets", "onions", "potatoes"],
      late: ["tomatoes", "peppers", "basil", "cucumbers"]
    },
    summer: {
      early: ["beans", "corn", "squash", "melons"],
      mid: ["fall carrots", "turnips"],
      late: ["fall lettuce", "spinach"]
    }
  };
};
