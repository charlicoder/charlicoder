
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface AboutSectionProps {
  bio: string;
}

const AboutSection = ({ bio }: AboutSectionProps) => {
  const handleDownload = () => {
    // Real resume PDF URL
    const resumeUrl = "https://charlicoder.s3.us-east-1.amazonaws.com/media/new_resume_mamun_v4.pdf";
    
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Khondoker_Md_Mamunur_Rashid_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>About</CardTitle>
          <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleDownload}>
            <Download size={16} />
            <span>Resume</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
