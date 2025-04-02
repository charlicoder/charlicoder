
import React from "react";
import ProfileLayout from "@/components/ProfileLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  // Real resume PDF URL
  const resumeUrl = "https://charlicoder.s3.us-east-1.amazonaws.com/media/new_resume_mamun_v4.pdf";
  
  const handleDownload = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Khondoker_Md_Mamunur_Rashid_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ProfileLayout>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>My Resume</CardTitle>
          <Button onClick={handleDownload} className="flex items-center gap-2">
            <Download size={16} />
            <span>Download Resume</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[800px]">
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0`}
              className="w-full h-full border rounded-md"
              title="Resume Preview"
            />
          </div>
        </CardContent>
      </Card>
    </ProfileLayout>
  );
};

export default Resume;
