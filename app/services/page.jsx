import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Database,
  Bot,
  Brain,
  Globe,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Star,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description:
        "Custom web applications built with modern technologies like Python, Django, FastAPI, React, and Next.js. From concept to deployment.",
      features: [
        "Responsive web applications",
        "RESTful API development",
        "Database design & optimization",
        "Third-party integrations",
        "Performance optimization",
        "Security implementation",
      ],
      technologies: ["Python", "Django", "FastAPI", "React", "Next.js", "PostgreSQL", "Docker"],
      pricing: "Starting at $5,000",
      timeline: "4-12 weeks",
    },
    {
      icon: Database,
      title: "Data Pipeline Development",
      description:
        "Scalable data processing systems that handle millions of records efficiently. ETL processes, real-time streaming, and data warehousing.",
      features: [
        "ETL pipeline design",
        "Real-time data processing",
        "Data warehouse architecture",
        "API integrations",
        "Monitoring & alerting",
        "Performance tuning",
      ],
      technologies: ["Python", "Apache Kafka", "PostgreSQL", "Redis", "Docker", "AWS", "Pandas"],
      pricing: "Starting at $8,000",
      timeline: "6-16 weeks",
    },
    {
      icon: Bot,
      title: "Chatbot Development",
      description:
        "Intelligent conversational AI systems for customer support, lead generation, and process automation. Natural language understanding and multi-platform deployment.",
      features: [
        "Natural language processing",
        "Multi-platform deployment",
        "Integration with existing systems",
        "Analytics & reporting",
        "Continuous learning",
        "Custom training data",
      ],
      technologies: ["Python", "OpenAI API", "Langchain", "FastAPI", "React", "WebSocket", "NLP"],
      pricing: "Starting at $6,000",
      timeline: "4-10 weeks",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description:
        "Custom AI applications including predictive analytics, recommendation systems, computer vision, and automated decision-making systems.",
      features: [
        "Predictive analytics",
        "Recommendation engines",
        "Computer vision",
        "Natural language processing",
        "Model deployment & monitoring",
        "Data preprocessing",
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "FastAPI", "Docker"],
      pricing: "Starting at $10,000",
      timeline: "8-20 weeks",
    },
    {
      icon: Globe,
      title: "API Development & Integration",
      description:
        "Robust RESTful and GraphQL APIs with comprehensive documentation. Third-party service integrations and microservices architecture.",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "API documentation",
        "Rate limiting & security",
        "Microservices architecture",
        "Third-party integrations",
      ],
      technologies: ["Python", "FastAPI", "Django REST", "GraphQL", "PostgreSQL", "Redis", "Docker"],
      pricing: "Starting at $4,000",
      timeline: "3-8 weeks",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimize existing applications for better performance, scalability, and cost efficiency. Database tuning, code optimization, and infrastructure improvements.",
      features: [
        "Code performance analysis",
        "Database optimization",
        "Caching strategies",
        "Load testing",
        "Infrastructure scaling",
        "Cost optimization",
      ],
      technologies: ["Python", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Monitoring Tools"],
      pricing: "Starting at $3,000",
      timeline: "2-6 weeks",
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We discuss your requirements, goals, and technical constraints to create a detailed project plan.",
    },
    {
      step: "2",
      title: "Design & Architecture",
      description: "I design the system architecture and create technical specifications for your approval.",
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Agile development with regular updates, thorough testing, and quality assurance.",
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Smooth deployment to production with documentation and ongoing support options.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Charlie delivered an exceptional data pipeline that processes over 1M records daily. His expertise in Python and system architecture is outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      text: "The chatbot Charlie built for us increased our customer engagement by 300%. Professional, reliable, and highly skilled.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "AI Innovations",
      text: "Working with Charlie was a game-changer. He transformed our legacy system into a modern, scalable application.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">My Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive Python development services to help you build scalable, efficient, and innovative solutions
            for your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <Icon className="h-8 w-8 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {service.pricing}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {service.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">My Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic text-pretty">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-12">
              <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-6 text-balance">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 opacity-90 text-pretty">
                Let's discuss your requirements and see how I can help bring your ideas to life with cutting-edge Python
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/resume">View My Experience</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
