
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GrowingConditionsFormProps {
  zipCode: string;
  setZipCode: (zipCode: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

const GrowingConditionsForm: React.FC<GrowingConditionsFormProps> = ({
  zipCode,
  setZipCode,
  onSubmit,
  loading
}) => {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="flex gap-2">
        <Input
          placeholder="Enter your ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="flex-1"
        />
        <Button 
          onClick={onSubmit}
          disabled={loading || !zipCode}
          className="bg-farm-green-600 hover:bg-farm-green-700"
        >
          {loading ? 'Loading...' : 'Check Conditions'}
        </Button>
      </div>
    </div>
  );
};

export default GrowingConditionsForm;
