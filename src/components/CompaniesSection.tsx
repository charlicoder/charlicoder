
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface Company {
  name: string;
  url: string;
  imgUrl?: string;
}

interface CompaniesSectionProps {
  companies: Company[];
}

const CompaniesSection = ({ companies }: CompaniesSectionProps) => {
  return (
    <Card className="mt-6 overflow-hidden backdrop-blur-sm bg-white/60 border border-slate-200/60 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100/80">
        <CardTitle className="font-semibold">Companies & Projects</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {companies.map((company, index) => (
            <a 
              key={index} 
              href={company.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 h-full">
                <div className="mb-3 w-12 h-12 flex items-center justify-center bg-slate-100 rounded-full overflow-hidden">
                  {company.imgUrl ? (
                    <img src={company.imgUrl} alt={company.name} className="w-full h-full object-cover" />
                  ) : (
                    <Globe size={24} className="text-slate-600" />
                  )}
                </div>
                <span className="text-sm font-medium text-center group-hover:text-blue-600 transition-colors">
                  {company.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompaniesSection;
