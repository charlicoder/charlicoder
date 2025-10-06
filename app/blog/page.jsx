import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Data Pipelines with Python and Apache Kafka",
      excerpt:
        "Learn how to design and implement robust data processing systems that can handle millions of records per day using Python, Apache Kafka, and modern streaming technologies.",
      content: "Full article content would go here...",
      author: "Charlie Coder",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      tags: ["Python", "Data Engineering", "Apache Kafka", "Streaming"],
      featured: true,
      image: "/blog-data-pipelines.jpg",
    },
    {
      id: 2,
      title: "Creating Intelligent Chatbots with OpenAI and FastAPI",
      excerpt:
        "A comprehensive guide to building conversational AI systems that can understand context, maintain conversation flow, and integrate with existing business systems.",
      content: "Full article content would go here...",
      author: "Charlie Coder",
      publishDate: "2024-01-08",
      readTime: "12 min read",
      tags: ["AI", "Chatbots", "OpenAI", "FastAPI", "NLP"],
      featured: false,
      image: "/blog-chatbots.jpg",
    },
    {
      id: 3,
      title: "Optimizing Django Applications for High Performance",
      excerpt:
        "Practical techniques for improving Django application performance, including database optimization, caching strategies, and code profiling.",
      content: "Full article content would go here...",
      author: "Charlie Coder",
      publishDate: "2024-01-01",
      readTime: "10 min read",
      tags: ["Django", "Performance", "Optimization", "Python"],
      featured: false,
      image: "/blog-django-optimization.jpg",
    },
    {
      id: 4,
      title: "Machine Learning Model Deployment with Docker and Kubernetes",
      excerpt:
        "Step-by-step guide to containerizing and deploying machine learning models in production environments using Docker and Kubernetes.",
      content: "Full article content would go here...",
      author: "Charlie Coder",
      publishDate: "2023-12-20",
      readTime: "15 min read",
      tags: ["Machine Learning", "Docker", "Kubernetes", "MLOps"],
      featured: false,
      image: "/blog-ml-deployment.jpg",
    },
    {
      id: 5,
      title: "Building RESTful APIs with FastAPI: Best Practices",
      excerpt:
        "Explore advanced FastAPI features and learn best practices for building robust, scalable, and well-documented REST APIs.",
      content: "Full article content would go here...",
      author: "Charlie Coder",
      publishDate: "2023-12-10",
      readTime: "7 min read",
      tags: ["FastAPI", "REST API", "Python", "Web Development"],
      featured: false,
      image: "/blog-fastapi-best-practices.jpg",
    },
    {
      id: 6,
      title: "Real-time Data Processing with Python and Redis",
      excerpt:
        "Learn how to implement real-time data processing systems using Python and Redis for high-throughput applications.",
      content: "Full article content would go here...",
      author: "Charlie Coder",
      publishDate: "2023-11-25",
      readTime: "9 min read",
      tags: ["Python", "Redis", "Real-time", "Data Processing"],
      featured: false,
      image: "/blog-redis-realtime.jpg",
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Technical Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Insights, tutorials, and best practices from 14+ years of Python development, data engineering, and AI
            implementation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground">
                All Topics
              </Badge>
              {allTags.slice(0, 6).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(featuredPost.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight text-balance">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20">
          <Card className="bg-muted max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                Get the latest articles on Python development, AI, and data engineering delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
