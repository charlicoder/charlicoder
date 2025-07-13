
import React from "react";
import ProfileLayout from "@/components/ProfileLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Jobs = () => {
    // Sample remote job listings data
    const jobs = [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            company: "TechGlobal",
            location: "Remote (Worldwide)",
            type: "Full-time",
            salary: "$100K - $140K",
            posted: "2 days ago",
            description: "Looking for an experienced Full Stack Developer proficient in React, Node.js, and cloud technologies."
        },
        {
            id: 2,
            title: "AI Engineer",
            company: "DataMinds",
            location: "Remote (US/EU)",
            type: "Contract",
            salary: "$120K - $150K",
            posted: "1 week ago",
            description: "Join our team building cutting-edge AI solutions. Experience with LLMs, Python, and vector databases required."
        },
        {
            id: 3,
            title: "DevOps Engineer",
            company: "CloudNative",
            location: "Remote (APAC preferred)",
            type: "Full-time",
            salary: "$90K - $120K",
            posted: "3 days ago",
            description: "Seeking a DevOps engineer with strong Kubernetes, Docker, and CI/CD pipeline experience."
        },
    ];

    return (
        <ProfileLayout>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        <Briefcase size={20} />
                        <span>Remote Job Opportunities</span>
                    </CardTitle>
                    <Badge variant="outline" className="ml-2">
                        {jobs.length} listings
                    </Badge>
                </CardHeader>
                <CardContent>
                    <div className="text-sm text-muted-foreground mb-6">
                        Discover remote opportunities aligned with your expertise in software engineering, AI, and cloud technologies.
                    </div>

                    <div className="space-y-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="font-medium text-lg text-primary">{job.title}</h3>
                                    <Badge variant="secondary" className="mt-1 sm:mt-0 w-fit">
                                        {job.posted}
                                    </Badge>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 text-sm">
                                    <div className="font-medium">{job.company}</div>
                                    <div className="text-muted-foreground">{job.location}</div>
                                    <div className="text-muted-foreground">{job.type}</div>
                                    <div className="font-medium text-green-600 dark:text-green-400">{job.salary}</div>
                                </div>

                                <p className="text-muted-foreground text-sm">{job.description}</p>

                                <div className="mt-4">
                                    <a
                                        href="#"
                                        className="text-sm text-primary hover:underline font-medium"
                                    >
                                        View details & apply
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                        Data sourced from various job boards. Updated regularly.
                    </div>
                </CardContent>
            </Card>
        </ProfileLayout>
    );
};

export default Jobs;
