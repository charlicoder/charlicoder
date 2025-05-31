
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, ExternalLink, Phone } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  title: string;
  location: string;
  email: string;
  secondaryEmail?: string; // Added secondary email parameter
  phone?: string;
  imgUrl: string;
  available: boolean;
}

const ProfileHeader = ({
  name,
  title,
  location,
  email,
  secondaryEmail,
  phone,
  imgUrl,
  available,
}: ProfileHeaderProps) => {
  // Use secondary email if provided, otherwise fall back to primary email
  const displayEmail = secondaryEmail || email;
  
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white rounded-xl p-6 shadow-sm">
      <Avatar className="w-28 h-28 border-4 border-white shadow-md">
        <AvatarImage src={imgUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          {available && (
            <Badge className="bg-green-500 hover:bg-green-600 self-center md:self-auto">
              Available for work
            </Badge>
          )}
        </div>
        
        <p className="text-lg text-blue-600 font-medium mb-4">{title}</p>
        
        <div className="flex flex-col md:flex-row gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Mail size={16} />
            <a href={`mailto:${displayEmail}`} className="hover:text-blue-600 transition-colors">
              {displayEmail}
            </a>
          </div>
          
          {phone && (
            <div className="flex items-center gap-1">
              <Phone size={16} />
              <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors">
                {phone}
              </a>
            </div>
          )}
          
          <a 
            href="#" 
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
