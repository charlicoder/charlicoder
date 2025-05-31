
import React from "react";
import ProfileLayout from "@/components/ProfileLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Code, Globe, LineChart, Database, BarChart3, Brain, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Application Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and TypeScript.",
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      features: [
        "Responsive design for all devices",
        "Progressive Web App capabilities",
        "Modern UI/UX implementation",
        "Performance optimization"
      ]
    },
    {
      title: "Backend Development",
      description: "Building robust and scalable APIs and server-side applications.",
      icon: <Database className="h-8 w-8 text-green-500" />,
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "Database design and optimization",
        "Authentication and authorization"
      ]
    },
    {
      title: "Data Science & ETL",
      description: "Data processing, analysis, and visualization for business insights.",
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      features: [
        "Data extraction and transformation",
        "ETL pipeline development",
        "Data analysis and visualization",
        "Machine learning model development"
      ]
    },
    {
      title: "Agentic Chatbots & AI Automation",
      description: "Building intelligent AI agents and automation solutions for businesses.",
      icon: <Brain className="h-8 w-8 text-red-500" />,
      features: [
        "Custom AI chatbot development",
        "Business process automation with n8n",
        "Social media channel automation",
        "AI agent architecture and deployment"
      ]
    },
    {
      title: "Blockchain Development",
      description: "Building decentralized applications and smart contracts on various blockchain platforms.",
      icon: <Code className="h-8 w-8 text-purple-500" />,
      features: [
        "Smart contract development",
        "DeFi application architecture",
        "Web3 integrations",
        "NFT marketplaces"
      ]
    },
    {
      title: "Performance Optimization & Web Pentesting",
      description: "Improving the speed, efficiency, and security of your existing applications.",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      features: [
        "Code auditing and refactoring",
        "Bundle size optimization",
        "Loading time reduction",
        "Security vulnerability assessment"
      ]
    },
  ];

  return (
    <ProfileLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I offer a wide range of development services to help bring your ideas to life with clean, maintainable code and modern design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Services;
