
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WorkExperience {
  company: string;
  location: string;
  position: string;
  type: string;
  period: string;
  description: string;
}

interface WorkExperienceSectionProps {
  experiences: WorkExperience[];
}

const WorkExperienceSection = ({ experiences }: WorkExperienceSectionProps) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((job, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-gray-200 pb-4">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="font-medium text-gray-900">{job.position} {job.type && <span className="text-sm font-normal">({job.type})</span>}</h3>
                <p className="text-sm text-gray-600">{job.period}</p>
              </div>
              <div className="mb-2">
                <p className="text-blue-600">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
              <p className="mt-2 text-gray-700 whitespace-pre-line">{job.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkExperienceSection;
