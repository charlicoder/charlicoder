import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Bot, Brain, Github, Linkedin, Mail } from "lucide-react"

export default function HomePage() {
  const skills = [
    "Python",
    "Django",
    "FastAPI",
    "Nodejs",
    "Solidity",
    "React",
    "Next.js",
    "PostgreSQL",
    "MongoDB",
    "Chroma",
    "Qdrant",
    "FAISS",
    "Redis",
    "Docker",
    "AWS",
    "Machine Learning",
    "Data Pipelines",
    "Chatbots",
    "LangGraph",
    "CrewAI",
    "AutoGen"
  ]

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies",
    },
    {
      icon: Database,
      title: "Data Pipelines",
      description: "Designing efficient data processing and ETL systems",
    },
    {
      icon: Bot,
      title: "Chatbot Development",
      description: "Creating intelligent conversational AI solutions",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Implementing machine learning and AI-driven applications",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/mamun_bal_pic.jpg"
                alt="Charlie Coder - Professional Developer"
                className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-secondary"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Hi, I'm <span className="text-secondary">Khondoker Md Mamunur Rashid</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              I have over 14 years of experience as a Python Developer, specializing in building scalable full-stack web applications, data pipelines, chatbots, and AI-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="/services">
                  View My Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Technologies & Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">What I Do Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Icon className="h-12 w-12 text-secondary mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{highlight.title}</h3>
                    <p className="text-muted-foreground text-pretty">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-balance">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Let's discuss your project and see how I can help bring your ideas to life with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">© 2024 Charlie Coder. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:charlie@charlicoder.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
