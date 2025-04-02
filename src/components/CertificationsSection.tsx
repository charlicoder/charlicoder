
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialLink: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Certifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </div>
              <div className="flex flex-col sm:text-right mt-2 sm:mt-0">
                <span className="text-sm text-gray-600">{cert.date}</span>
                <a href={cert.credentialLink} className="text-sm text-blue-600 hover:underline">View Credential</a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationsSection;
