
import React from "react";
import ProfileLayout from "@/components/ProfileLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper } from "lucide-react";

const TechNews = () => {
  // Sample tech news data
  const newsArticles = [
    {
      id: 1,
      title: "OpenAI Releases New Model with Enhanced Reasoning Capabilities",
      source: "TechCrunch",
      time: "3 hours ago",
      snippet: "The latest model from OpenAI demonstrates remarkable improvements in mathematical reasoning and code generation, setting new benchmarks in the AI research community.",
      url: "#",
      category: "AI"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough Promises Faster Algorithms",
      source: "MIT Technology Review",
      time: "1 day ago",
      snippet: "Researchers have developed a new quantum algorithm that could significantly speed up certain types of calculations, bringing practical quantum computing applications closer to reality.",
      url: "#",
      category: "Quantum Computing"
    },
    {
      id: 3,
      title: "New Cloud Infrastructure Framework Gains Traction Among Enterprises",
      source: "InfoWorld",
      time: "2 days ago",
      snippet: "A newly released cloud framework is being rapidly adopted by major enterprises for its innovative approach to managing distributed systems and microservices.",
      url: "#",
      category: "Cloud"
    },
  ];

  return (
    <ProfileLayout>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Newspaper size={20} />
            <span>Latest Tech News</span>
          </CardTitle>
          <Badge variant="outline">
            Updated Daily
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground mb-6">
            Stay updated with the latest developments in technology, AI, and software engineering.
          </div>
          
          <div className="space-y-6">
            {newsArticles.map((article) => (
              <div key={article.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="font-medium text-lg text-primary">{article.title}</h3>
                  <Badge className="w-fit" variant="secondary">{article.category}</Badge>
                </div>
                
                <div className="flex gap-2 items-center text-sm mb-3">
                  <span className="font-medium">{article.source}</span>
                  <span className="text-muted-foreground">• {article.time}</span>
                </div>
                
                <p className="text-muted-foreground text-sm">{article.snippet}</p>
                
                <div className="mt-4">
                  <a 
                    href={article.url} 
                    className="text-sm text-primary hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read full article
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            News data aggregated from various tech publications. Updated daily.
          </div>
        </CardContent>
      </Card>
    </ProfileLayout>
  );
};

export default TechNews;
