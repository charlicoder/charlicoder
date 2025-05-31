
import React from "react";
import ProfileLayout from "@/components/ProfileLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, FileCode, Database, Clock, Search, Trello } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      title: "Code Formatter",
      description: "Automatically format your code according to best practices. Supports multiple languages including JavaScript, TypeScript, HTML, CSS, and more.",
      icon: <Code className="h-10 w-10 text-blue-500" />,
      link: "https://prettier.io/playground/",
      linkText: "Open Formatter"
    },
    {
      title: "JSON Validator",
      description: "Validate and format JSON data. Check for syntax errors and beautify your JSON for better readability.",
      icon: <FileCode className="h-10 w-10 text-purple-500" />,
      link: "https://jsonlint.com/",
      linkText: "Validate JSON"
    },
    {
      title: "SQL Playground",
      description: "Test your SQL queries online. Practice and learn SQL without installing a database system.",
      icon: <Database className="h-10 w-10 text-green-500" />,
      link: "https://www.db-fiddle.com/",
      linkText: "Run SQL Queries"
    },
    {
      title: "Crontab Generator",
      description: "Easily generate cron job syntax for scheduled tasks on Unix-based systems.",
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      link: "https://crontab.guru/",
      linkText: "Generate Crontab"
    },
    {
      title: "Regex Tester",
      description: "Test and debug regular expressions with real-time highlighting and explanation.",
      icon: <Search className="h-10 w-10 text-red-500" />,
      link: "https://regex101.com/",
      linkText: "Test Regex"
    },
    {
      title: "Project Management",
      description: "Taiga is an open source project management tool for agile developers & designers who want a simple, beautiful tool that makes work truly enjoyable.",
      icon: <Trello className="h-10 w-10 text-teal-500" />,
      link: "https://tree.taiga.io/login",
      linkText: "Open Taiga"
    },
  ];

  return (
    <ProfileLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Free Developer Tools</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of useful online tools for developers that I recommend. These resources can help streamline your workflow and solve common development challenges.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {tools.map((tool, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <CardTitle className="text-center">{tool.title}</CardTitle>
                <CardDescription className="text-center">{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4">
                <Button className="w-full" asChild>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    {tool.linkText}
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Tools;
