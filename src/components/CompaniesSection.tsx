import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";

interface Company {
    name: string; // Not shown anymore, but kept in case needed later
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {companies.map((company, index) => (
                        <a
                            key={index}
                            href={company.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div className="flex items-center justify-center p-4 rounded-lg bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 h-32 w-full">
                                {company.imgUrl ? (
                                    <img
                                        src={company.imgUrl}
                                        alt={`Logo of ${company.name}`}
                                        className="h-24 w-24 object-contain"
                                    />
                                ) : (
                                    <div className="h-24 w-24 flex items-center justify-center bg-slate-100 rounded">
                                        <Globe size={32} className="text-slate-600" />
                                    </div>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CompaniesSection;
