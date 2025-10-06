import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User } from "lucide-react"

// This would typically come from a database or CMS
const getBlogPost = (id) => {
  const posts = {
    1: {
      id: 1,
      title: "Building Scalable Data Pipelines with Python and Apache Kafka",
      excerpt:
        "Learn how to design and implement robust data processing systems that can handle millions of records per day using Python, Apache Kafka, and modern streaming technologies.",
      content: `
        <h2>Introduction</h2>
        <p>In today's data-driven world, the ability to process and analyze large volumes of data in real-time has become crucial for businesses to stay competitive. Building scalable data pipelines is essential for handling the ever-increasing flow of information from various sources.</p>
        
        <h2>Why Apache Kafka?</h2>
        <p>Apache Kafka has emerged as the de facto standard for building real-time data streaming applications. Its distributed architecture, fault tolerance, and high throughput make it ideal for handling large-scale data processing requirements.</p>
        
        <h3>Key Benefits:</h3>
        <ul>
          <li>High throughput and low latency</li>
          <li>Horizontal scalability</li>
          <li>Fault tolerance and durability</li>
          <li>Real-time processing capabilities</li>
        </ul>
        
        <h2>Setting Up Your Python Environment</h2>
        <p>Before we dive into building our data pipeline, let's set up the necessary Python environment and dependencies.</p>
        
        <pre><code>pip install kafka-python pandas sqlalchemy psycopg2-binary</code></pre>
        
        <h2>Building the Producer</h2>
        <p>The first component of our data pipeline is the producer, which will send data to Kafka topics.</p>
        
        <pre><code>from kafka import KafkaProducer
import json
import pandas as pd

class DataProducer:
    def __init__(self, bootstrap_servers=['localhost:9092']):
        self.producer = KafkaProducer(
            bootstrap_servers=bootstrap_servers,
            value_serializer=lambda v: json.dumps(v).encode('utf-8')
        )
    
    def send_data(self, topic, data):
        self.producer.send(topic, data)
        self.producer.flush()</code></pre>
        
        <h2>Implementing the Consumer</h2>
        <p>The consumer will process the data from Kafka topics and perform necessary transformations.</p>
        
        <h2>Best Practices</h2>
        <p>When building production-ready data pipelines, consider these best practices:</p>
        <ul>
          <li>Implement proper error handling and retry mechanisms</li>
          <li>Use schema registry for data validation</li>
          <li>Monitor pipeline performance and health</li>
          <li>Implement proper logging and alerting</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building scalable data pipelines with Python and Apache Kafka provides a robust foundation for real-time data processing. By following the patterns and best practices outlined in this article, you can create systems that handle millions of records efficiently and reliably.</p>
      `,
      author: "Charlie Coder",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      tags: ["Python", "Data Engineering", "Apache Kafka", "Streaming"],
      image: "/blog-data-pipelines.jpg",
    },
    // Add more posts as needed
  }
  return posts[id] || null
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishDate)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
            <Button variant="outline" size="sm">
              <BookOpen className="mr-2 h-4 w-4" />
              Save for Later
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: "1.7",
            }}
          />
        </article>

        {/* Author Bio */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <img
                src="/mamun_bal_pic.jpg"
                alt="Charlie Coder"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">About the Author</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Charlie Coder is a Python developer with 14+ years of experience in building scalable web
                  applications, data pipelines, and AI-driven solutions. He specializes in helping businesses leverage
                  modern technology to solve complex problems.
                </p>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/about">View Profile</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 text-balance">
                  Creating Intelligent Chatbots with OpenAI and FastAPI
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  A comprehensive guide to building conversational AI systems...
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/blog/2">Read More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 text-balance">
                  Optimizing Django Applications for High Performance
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  Practical techniques for improving Django application performance...
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/blog/3">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
