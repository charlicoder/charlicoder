
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Recommendation {
  name: string;
  position: string;
  text: string;
  imgUrl: string;
}

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
}

const RecommendationsSection = ({ recommendations }: RecommendationsSectionProps) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={rec.imgUrl} 
                  alt={rec.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{rec.name}</h3>
                  <p className="text-sm text-gray-600">{rec.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{rec.text}"</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationsSection;
