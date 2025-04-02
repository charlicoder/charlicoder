
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Phone } from "lucide-react";

interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'phone';
  url: string;
}

interface ContactSectionProps {
  socialLinks: SocialLink[];
}

const ContactSection = ({ socialLinks }: ContactSectionProps) => {
  const getIcon = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'phone': return <Phone size={20} />;
      default: return null;
    }
  };

  const getLabel = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'github': return 'GitHub';
      case 'linkedin': return 'LinkedIn';
      case 'twitter': return 'Twitter';
      case 'phone': return 'WhatsApp/Call';
      default: return platform;
    }
  };

  const getButtonVariant = (platform: SocialLink['platform']): "default" | "outline" => {
    switch (platform) {
      case 'github': return "outline";
      case 'linkedin': return "default";
      case 'twitter': return "outline";
      case 'phone': return "outline";
      default: return "outline";
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Connect</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a 
              key={link.platform} 
              href={link.url}
              target={link.platform !== 'phone' ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <Button 
                variant={getButtonVariant(link.platform)}
                className="flex items-center gap-2" 
              >
                {getIcon(link.platform)}
                {getLabel(link.platform)}
              </Button>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
